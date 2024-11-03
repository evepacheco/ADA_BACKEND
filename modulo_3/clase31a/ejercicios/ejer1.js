/*Crea un script en Node.js que utilice el módulo readline-sync para 
solicitar al usuario que ingrese su nombre y edad. Luego, muestra un 
mensaje de saludo personalizado que incluya el nombre y la edad del 
usuario  */

const readlineSync = require('readline-sync');

const nombreUsuario =readlineSync.question('Ingrese su nombre: ');
const edadUsuario = readlineSync.questionInt('Ingrese su edad : ');

console.log(`Su nombre es ${nombreUsuario} y su edad es ${edadUsuario}`);