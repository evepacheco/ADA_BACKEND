/*  Ejercicio 2: Tuplas para almacenar información 
1. Declara una tupla para representar un libro con la siguiente información: 
título (string), año de publicación (número) y si está disponible (booleano).
2. Inicializa la tupla con los valores: "El principito", 1943, true.
3. Imprime el título del libro y el año de publicación.
4. Cambia el valor de disponibilidad a false y muestra el nuevo valor por 
consola*/

//declaracion
let libro : [string, number, boolean];
//inicializacion
libro =["El Principito", 1943, true];

console.log(`Nombre del libro:`,libro[0]+`y el año de Publicación:`,libro[1]);

libro[2] = false
console.log(`Disponibilidad actualizada: `,libro[2]);
