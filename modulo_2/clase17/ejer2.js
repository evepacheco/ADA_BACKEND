/*•	Ejercicio 2: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, aplicamos lo aprendido en semanas anteriores.
// Quiero que hagan lo mismo del ejercicio anterior (buscar la posición de un número en un array), pero partiendo de esta lista:*/

let list = [12, 3, 5, 7, 1, 22, 47, 100];

/*Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort.*/
for (let i = 0; i < list.length; i++) {// Para interar en el primer bucle 
    for (let k = 0; k < list.length - 1; k++) {// 2do bucle para cmparar 
        if (list[k] > list[k + 1]) {// Si el elemento actual es mayor que el siguiente, se cambian o sube
            let temporal = list[k]// se guarda el valor actual dle eleme en una vaiable temporal
            list[k] = list[k + 1];//se asiga valor al sig elemento al actual
            list[k + 1] = temporal//Se assigna valor guardado en la variab temporal al sig elemnto.
        }
    }
} console.log(list);

// Luego, respondan las siguientes preguntas:

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

//o	¿Cuál es la posición del número 12?
let number12 = 12;
console.log(buscardorDeNumber(list, number12));
//o	¿Cuál es la posición del número 5?
let number5 = 5;
console.log(buscardorDeNumber(list,number5));
//o	¿Cuál es la posición del número 22?
let number22 = 22;
console.log(buscardorDeNumber(list,number22));
//o	¿Cuál es la posición del número 100?*/
let number100 = 100;
console.log(buscardorDeNumber(list,number100));

