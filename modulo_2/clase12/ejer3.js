
/* Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
adolescente, adulto o adulto mayor.*/


const prompt = require("prompt-sync")({ sigint: true });

let edad = parseFloat(prompt(`Ingrese su edad: `));

let clasificacionEdad = edad => {
    if (edad >= 0 && edad <= 12) {
        console.log(`Clasificación: Niño`);
    } else if (edad >= 13 && edad <= 17) {
        console.log(`Clasificación: Adolescente`);

    } else if (edad >= 18 && edad <= 72) {
        console.log(`Clasificación: Adulto`);
    } else {
        console.log(`Clasificación: Adulto mayor`);

    }
}
clasificacionEdad(edad);



