// inmutabillida en objetos
// par mantener la inmuta en objetos , se puede usar el operador de propagacion
//(...)

// para crea una copia





//2 Inmutabilidad en array
//Para arrat se usar metdo contac,slice o op propagacion(...)
//para crear copias neuvas del array original

let numeros = [1,2,3,4,5]

//copia cambio

let numerosNuevos = [...numeros,6]

console.log(numeros);
console.log(numerosNuevos);


//3. Inmutabilidad en funciones
/* En lgar de moficiar una fx existente, crearemosuna nueva fx con los
cambios necesarios

Fx original*/

function saludar(nombre) {
    return `Hola ${nombre}`;
    

}
//Modificar la fx original (no mutable)

function saludarFormal(nombre) {
    return `Buenos dias, ${nombre}`;
}
// crear una fx con los cambios (inmutabilidad)

const saludarEnIngles = (nombre) => `Hello, ${nombre}`
console.log(saludarEnIngles(`Evelia`));