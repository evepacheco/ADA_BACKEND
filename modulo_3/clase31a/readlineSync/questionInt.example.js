const readlineSync = require('readline-sync');
const edad=readlineSync.questionInt('Por favor , ingrese su edad: ');
if (edad>= 18 ) {
    console.log('Eres mayor, puedes acceder');
    
}else{
    console.log('Lo siento, nevfesitas ser mayor de 18 años');
    
}