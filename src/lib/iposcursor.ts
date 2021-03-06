import { removeClass, addClass } from "./utils";

export type Options = {
  element : string | HTMLElement;
};

export class IposCursor {

  private parentElement? : HTMLElement;
  private cursorElement? : HTMLElement;
  private highlightElements? : NodeListOf<Element>;

  constructor(
    private options : Options
  ){}

  static create(options : Options){
    return new IposCursor(options);
  }

  /**
   * Set mouse position to element
   * @param cursorElement 
   * @param event 
  */
  private setPosition(cursorElement : HTMLElement, event : MouseEvent){
    cursorElement.style.top = event.clientY + 'px';
    cursorElement.style.left = event.clientX + 'px';
  }

  private getParentElement(element : string | HTMLElement) : HTMLElement{
    if(typeof element === 'string')
      return document.getElementById(element)!;
    else if(element instanceof HTMLElement){
      return element;
    }else {
      throw 'Problem here';
    }
  }

  /**
   * main function
  */
  suscribe() : void {
    this.parentElement = this.getParentElement(this.options.element);

    // Create cursor element
    this.cursorElement = document.createElement('div');
    addClass('ipos-cursor',this.cursorElement);

    // Append cursorElement to parent element
    this.parentElement.appendChild(this.cursorElement);

    // ipos class to parent element
    addClass('ipos', this.parentElement);

    // Add events listener to parent element
    this.parentElement.addEventListener('mousemove', event => {
      if(this.cursorElement)
      this.setPosition(this.cursorElement, event);
    });
    this.parentElement.addEventListener('mouseenter', () => {
      if(this.cursorElement)
      this.cursorElement.style.opacity = '1';
    });
    this.parentElement.addEventListener('mouseleave', () => {
      if(this.cursorElement)
      this.cursorElement.style.opacity = '0';
    });

    // Add events listener to childs hightlights elements
    this.highlightElements = this.parentElement.querySelectorAll('.ipos-highlight');
    this.highlightElements.forEach(highlightElement => {
      highlightElement.addEventListener('mouseenter',() => {
        if(this.cursorElement)
        this.cursorElement.style.opacity = '0';
      });
      highlightElement.addEventListener('mouseleave',() => {
        if(this.cursorElement)
        this.cursorElement.style.opacity = '1';
      });
    });
  }

  unsuscribe(){
    if(this.parentElement){
      removeClass('ipos',this.parentElement);
      this.parentElement.removeChild(this.cursorElement!);
      this.highlightElements!.forEach(highlightElement => {
        highlightElement.removeEventListener('mouseenter',() => true);
        highlightElement.removeEventListener('mouseleave',() => true);
      });
      this.parentElement.removeEventListener('mousemove', () => true);
      this.parentElement.removeEventListener('mouseenter', () => true);
      this.parentElement.removeEventListener('mouseleave', () => true);
      this.parentElement = undefined;
      this.cursorElement = undefined;
      this.highlightElements = undefined;
    }
  }
}

export const create = (options : Options) => new IposCursor(options);