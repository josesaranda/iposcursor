export function addClass(name : string, element : HTMLElement) : void{
  let className = element.className ? element.className.split(' ') : [];
  className.push(name);
  element.setAttribute('class',className.join(' '));
}

export function removeClass(name : string, element : HTMLElement) : void{
  let className = element.className.split(' ');
  let index = className.findIndex((klass : string) => klass === name);
  if(index !== -1){
    className.splice(index,1);
    element.setAttribute('class',className.join(' '));
  }
}