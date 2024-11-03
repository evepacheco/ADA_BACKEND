/* Ejercicio 8: 
Pide al usuario que ingrese las longitudes de los tres lados de un 
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
escaleno. (Investiga sobre los triángulos para determinar la formula) */

const prompt = require('prompt-sync')({ sigint: true });
let lado1= parseFloat(prompt("Ingrese el primer lado del triángulo: "));
let lado2=parseFloat(prompt("Ingrese el segundo lado del triángulo: "));
let lado3 =parseFloat(prompt("Ingrese el tercer lado del triángulo: "));

if (lado1===lado2 && lado2===lado3) {
    console.log("Este triángulo es un equilátero");
 }else if (lado1===lado2 && lado1!=lado3) {
    console.log("Este triangulo es un isóseles");
 }else if (lado1===lado3 && lado1!=lado2) {
    console.log("Este triangulo es un isóseles");
 }else if (lado2===lado3 && lado2!=lado1) {
    console.log("Este triangulo es un isóseles");
 }else{
    console.log("Este triángulo es un escaleno");
 }
