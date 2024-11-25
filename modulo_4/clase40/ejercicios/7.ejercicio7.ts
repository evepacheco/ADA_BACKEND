/* Ejercicio 7: Array de tuplas para almacenar productos 
1. Crea un array de tuplas donde cada tupla almacene el nombre de un 
producto (string), la cantidad disponible (número) y el precio por unidad 
(número).
2. Añade tres productos al array con la siguiente información: "Manzana", 10, 
1.5; "Pan", 20, 2.0; "Leche", 5, 1.2.
3. Imprime la información del segundo producto*/


let almacenarProductos:[string,number,number][]=[
    ["Manzana", 10 , 1.5],
    ["Pan", 20, 2.0],
    ["Leche", 5, 1.2]
]

console.log(almacenarProductos[1]);

// Modificar la cantidad del tercer producto
almacenarProductos[2][1] =8;
 //es el producto en la posicion 2 y dentro de el en la posicion 1 modifica la cantidad de ese producto
  
// Mostrar el array actualizado
console.log(almacenarProductos);


