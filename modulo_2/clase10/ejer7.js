/* Ejercicio 7: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los 
almacene en un array. Luego, solicita al usuario ingresar un nombre y 
verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
pasos el código si eso les facilita su desarrollo  */


const prompt = require('prompt-sync')({ sigint: true });
let nombres = [];

for (let i = 0; i < 5; i++) {//le indicamos cuantos nombres ingresar
    let nombre = prompt(`Ingrese el nombre: `,(i + 1));//ppedimos que los ingrese
    nombres.push(nombre);//guarda en el array de nombres los datos de nombre
}

let buscadorNombres = prompt(`Ingrese el nombre que desea buscar:`);
let verificacion = nombres.includes(buscadorNombres);//buscar el nombre en el array de nombres

if (verificacion) {
    console.log("Nombre encontado en la lista");
} else {
    console.log("Nombre no encontrado en la lista");
}