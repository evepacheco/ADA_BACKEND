/*  Ejercicio 5: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes 
usando arrays y mostrarlas por pantalla:*/

const prompt = require('prompt-sync')({ sigint: true });
/*1. Crear un array para almacenar las notas.*/
let notas = [];

/*2. Define un array vacío llamado notas donde almacenaremos las 
notas de los estudiantes.*/


/*3. Pide al usuario que ingrese las notas de varios estudiantes una por 
una utilizando el método prompt.*/
let cantNotas = parseInt(prompt("Cuantas notas desea ingresar?: "))

/*4. Usa un bucle for para solicitar las notas y asignarlas directamente a 
posiciones específicas del array notas.*/
for (let i = 0; i < cantNotas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i + 1}: `));// 
    notas[i] = nota;
}
/* 5. Imprime en consola las notas ingresadas usando el array notas*/
console.log('Las notas ingresadas son: ',notas);