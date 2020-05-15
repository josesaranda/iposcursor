import * as iposcursor from '../../dist'

let cursor = iposcursor.create({element : 'body'});
cursor.suscribe();

setTimeout(() => {
  console.log('-- cursor unsuscribed --');
  cursor.unsuscribe();
},5000);