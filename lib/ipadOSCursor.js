
/**
 * Set mouse position to element
 * @param cursorElement 
 * @param event 
 */
function setPosition(cursorElement, event){
  cursorElement.style.top = event.clientY + 'px';
  cursorElement.style.left = event.clientX + 'px';
}

/**
 * main function
 */
function createIpadOSCursor(){
  let cursorElement = document.createElement('div');
  cursorElement.id = 'ipadOSCursor';
  document.getElementsByTagName('body')[0].appendChild(cursorElement);
  document.addEventListener('mousemove', event => setPosition(cursorElement, event));
  document.addEventListener('mouseenter', () => cursorElement.style.opacity = 1);
  document.addEventListener('mouseleave', () => cursorElement.style.opacity = 0);

  let highlightElements = document.querySelectorAll('.highlight');
  highlightElements.forEach(highlightElement => {
    highlightElement.addEventListener('mouseenter',() => {
      cursorElement.style.opacity = 0;
    });
    highlightElement.addEventListener('mouseleave',() => {
      cursorElement.style.opacity = 1;
    });
  });
}