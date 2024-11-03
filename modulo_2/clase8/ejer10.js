/*  Ejercicio 10: 
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error. */

const prompt = require('prompt-sync')({ sigint: true });
let dia = parseFloat(prompt("Ingrese un número del 1 al 7: "));

if (dia === 1) {
    console.log("Corresponde al dia lunes");
} else if (dia === 2) {
    console.log("Corresponde al dia martes.");
} else if (dia === 3) {
    console.log("Corresponde al dia miércoles.");
} else if (dia === 4) {
    console.log("Corresponde al dia jueves.");
} else if (dia === 5) {
    console.log("Corresponde al dia viernes.");
} else if (dia === 6) {
    console.log("Corresponde al dia sábado.");
} else if (dia === 7) {
    console.log("Corresponde al dia domingo.");
} else {
    console.log("ERROR: NO CORRESPONDE A UN DIA DE LA SEMANA");
}