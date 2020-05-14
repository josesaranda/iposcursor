type Options = {
  element : string | HTMLElement;
};

export class IpadOSCursor {

  private parentElement? : HTMLElement;
  private cursorElement? : HTMLElement;
  private highlightElements? : NodeListOf<Element>;

  constructor(
    private options : Options
  ){}

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
    addClass('cursor',this.cursorElement);

    // Append cursorElement to parent element
    this.parentElement.appendChild(this.cursorElement);

    // IpadOSCursor class to parent element
    addClass('IpadOSCursor', this.parentElement);

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
    this.highlightElements = this.parentElement.querySelectorAll('.highlight');
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
      removeClass('IpadOSCursor',this.parentElement);
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

function addClass(name : string, element : HTMLElement) : void{
  let className = element.className ? element.className.split(' ') : [];
  className.push(name);
  element.setAttribute('class',''+className.join(' '));
}

function removeClass(name : string, element : HTMLElement) : void{
  let className = element.className.split(' ');
  let index = className.findIndex((klass : string) => klass === name);
  if(index !== -1){
    className.splice(index,1);
    element.setAttribute('class',''+className.join(' '));
  }
}