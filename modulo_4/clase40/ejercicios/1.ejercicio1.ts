/* Ejercicio 1: Operaciones básicas con Arrays 
1. Declara un array de números con los valores [5, 10, 15, 20, 25].
2. Imprime el tercer elemento del array.
3. Añade el número 30 al final del array.
4. Elimina el primer número del array.
5. Muestra por consola la longitud actual del array */


let arrayNumber:number[]=[5,10,15,20,25]
console.log(`${arrayNumber}`);

let thirdElement = arrayNumber[3]
console.log(`2-El tercer elemento del array de numeros: ${thirdElement}`);

arrayNumber.push(30)
console.log(`3- Final elemento añadido: ${arrayNumber}`);

let primerEliminado = arrayNumber.shift()
console.log(`4- El primer elemento eliminado: ${primerEliminado}`);
console.log(`${arrayNumber}`);

console.log(`5- La longitud del array de numeros es: ${arrayNumber.length}`);



