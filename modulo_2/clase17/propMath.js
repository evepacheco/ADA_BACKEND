
//Propiedades Objeto Math

//1. Math.PI:
// Calcular la circurferencia un circulo dado su radio

let radio = 7; 
let circurferencia = 2*Math.PI * radio;

//console.log(circurferencia);

//Calcular el area de un circulo usando su radio
let radio2 = 7;
let area = Math.PI * Math.pow(radio2,2)
//console.log(area);


//2.Math.E
//Simula creciemiento exponencial una inversion con interes compuesto
let principa = 1000// cantida princ
let tasa = 0.05// tasa ineres anual
let tiempo = 5// timpo en anios
let monto = principa * Math.exp(tasa * tiempo)
console.log(monto);