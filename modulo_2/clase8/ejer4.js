/*• Ejercicio 4: 
Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre. */

const prompt = require('prompt-sync')({ sigint: true });
let nombre=prompt(`Ingrese su nombre: `);

if (nombre==="Evelia") {
    console.log(`Tenemos el mismo nombre, ${nombre}`);
} else {
    console.log(`Hola, mi nombre es Evelia `);
}