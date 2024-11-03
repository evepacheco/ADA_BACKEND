/*• Ejercicio 2: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros 
numeros enteros y positivos. Luego, escribe un algoritmo para sumar 
todos los numeros en la matriz.*/


let matriz = [
    [10, 3, 2, 1, 4],
    [5, 5, 10, 100, 6],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
    [10, 8, 36, 15, 78]
];
let suma = 0
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {

        suma += matriz[fila][columna];

    }

} console.log(`La suma de la matriz es:`, suma);


