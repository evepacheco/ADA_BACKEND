/* • Ejercicio 10: While y Do While
Implementa un programa que permita al usuario registrar la edad de 
mascotas en una veterinaria hasta que decida dejar de agregar.
Cuando el usuario no agregue mas edades, imprimir en consola las 
mascotas agregadas anteriormente y sus respectivas edades */


const prompt = require('prompt-sync')({ sigint: true });
let edades=[];
let nombres=[];
let agregar;

do {
let nombre= prompt(`Ingrese el nombre de su mascota:`);  
let edad=prompt(`Ingrese la edad de la mascota:`) ;
 agregar=prompt (`Desea agregar otra mascota (si/no): `)
nombres.push(nombre);
edades.push(edad);

} while (agregar==="si");
console.log(`Registro de mascotas:`);
for (let i = 0; i < nombres.length; i++) {
    console.log("Nombre: "+ nombres[i]+",edad: "+ edades[i]+" años");
    
}
