
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

  let highlightElements = document.querySelectorAll('.highlight');
  highlightElements.forEach(highlightElement => {
    highlightElement.addEventListener('mouseenter',() => {
      highlightElement.setAttribute('data-highlight', true);
      cursorElement.style.opacity = 0;
    });
    highlightElement.addEventListener('mouseleave',() => {
      highlightElement.setAttribute('data-highlight', false);
      cursorElement.style.opacity = 1;
    });
  });
}