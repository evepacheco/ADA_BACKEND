/*• Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres.
 */

const prompt = require('prompt-sync')({ sigint: true });
let numero1=parseFloat(prompt("Ingrese el primer número: "));
let numero2=parseFloat(prompt("Ingrese el segundo número: "));
let numero3=parseFloat(prompt("Ingrese el tercer número: "));

if (numero1>=numero2 && numero1>=numero3) {
    console.log("El primer número ingresado es el mayor");
}else if (numero2>=numero1 && numero2>=numero3) {
    console.log("El segundo número ingresado es el mayor");
}else {
    console.log("El tercer número ingresado es el mayor");
}