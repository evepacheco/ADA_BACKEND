/* Ejercicio 4: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si 
la contraseña es incorrecta, debe volver a pedirla hasta que el usuario 
ingrese la correcta. La contraseña correcta es "1234".
  */

const prompt = require('prompt-sync')({ sigint: true });
let contraseniaUsu= parseInt(prompt("Ingrese su contraseña: "));
let contrasenia=1234
do {
    contraseniaUsu= parseInt(prompt("Contraseña incorrecta. Ingrese su contraseña: "));
} while(contraseniaUsu!==contrasenia)
    console.log("Contraseña correcta.");
