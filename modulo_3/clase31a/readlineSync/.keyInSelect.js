
const readlineSync = require('readline-sync');

const lenguajes = ['Javascript', 'Pytho','Java','C++'];
const indexSelect= readlineSync.keyInSelect(lenguajes,'Cual es tu lenguaj favorito?:');
if (indexSelect===-1) {//verifica si toca esc
    console.log('No seleccionaste ningun lenguaje');
    
}else{
    console.log(`'Ha seleccionado: ${lenguajes[indexSelect]}`);
    
}