/* Ejercicio 4: Manipulación de Arrays 
1. Crea un array que contenga los nombres de tus 5 frutas favoritas.
2. Usa un método para añadir otra fruta al final del array.
3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana") 
dentro del array.
4. Elimina la última fruta y muestra el array actualizado por consola.*/

let myFavoriteFruits:string[]=["Manzana", "Pera", "Ciruela", "Durazno", "Frutilla"]

myFavoriteFruits.push("Banana");
console.log(myFavoriteFruits);

let buscadorIndiceCiruela = myFavoriteFruits.indexOf("Ciruela")
console.log(`Posicion de indice de "Ciruela: ${buscadorIndiceCiruela}`);

let ultimaEliminada=myFavoriteFruits.pop()

console.log(`Array de frutas favoritas eliminando el ultimo: ${myFavoriteFruits}`);

