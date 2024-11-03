
/*Ejercicio 1: Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con un ejemplo simple. 
Quiero que se familiaricen con la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la solución.
Dada la siguiente lista:*/
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


function buscardorDeNumber(list, item) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        const mitad = Math.floor((low + high) / 2); // si encuentra la mitad entre low y high(posicion del medio)
        const guess = list[mitad]
        if (guess === item) {
            return mitad
        }
        if (guess > item) {
            high = mitad - 1;

        } else {
            low = mitad + 1;
        } }
 return null;
}

/*Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
// ¿Cuál es la posición del número 1?*/

let buscar = 1;
console.log(buscardorDeNumber(list, buscar));
//  ¿Cuál es la posición del número 5?
let buscar5 = 5;
console.log(buscardorDeNumber(list,buscar5));
//   ¿Cuál es la posición del número 6?
let buscar6 = 6;
console.log(buscardorDeNumber(list, buscar6));
//   ¿Cuál es la posición del número 9?
let buscar9= 9;
console.log(buscardorDeNumber(list, buscar9));
//  ¿Cuál es la posición del número 11?*/

let buscar11= 11;
console.log(buscardorDeNumber(list,buscar11));
//null
let buscar18 = 18;
console.log(buscardorDeNumber(list,buscar18 ));