/* •	Ejercicio 3: reduce() “Maraton”
Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
Además de hacer esto, deberemos realizar las siguientes operaciones:

1) Añadir una vuelta al principio del array: Usamos unshift para agregar la vuelta 7 al principio del array vueltas.*/

let vueltas = [5, 8, 12, 3, 22];

let agregarPrinc = vueltas.unshift(7)
//console.log(agregarPrinc);//guarda la pposicion nueva
console.log(`Punto 1: `, vueltas);//lo aprego al array

//2)Eliminar la última vuelta del array: Usamos pop para eliminar la última vuelta del array y guardarla en la variable ultimaVuelta.
let ultimaVuelta = vueltas.pop()//elimina la ultim vuelta

//console.log(ultimaVuelta);//lo guardamos en esta variable
console.log(`Punto 2: `, vueltas);

/*Verificar si la vuelta 10 está en el array y agregarla al final si no está presente: 
Usamos includes para verificar si la vuelta 10 está en el array y push para agregarla al final si no está.*/
let verificarVuelta = vueltas.includes(10)
if (verificarVuelta == false) {
    vueltas.push(10)
}
console.log(`Punto 3: `, vueltas);

/*Eliminar la primera vuelta del array: Usamos shift para eliminar la primera vuelta del array y guardarla en la variable primeraVuelta.*/

let eliminarPrimer = vueltas.shift();
//console.log(eliminarPrimer);
console.log(`Punto 4: `, vueltas);

/*Verificar si la vuelta 15 está en el array y agregarla al principio si no está presente: 
Usamos includes para verificar si la vuelta 15 está en el array y unshift para agregarla al principio si no está.*/
let verificar = vueltas.includes(15)
if (verificar == false) {
    vueltas.unshift(15)// agregar al principio
}
console.log(`Punto 5: `, vueltas);


/*Calcular el nuevo total de vueltas usando reduce: Después de todas las operaciones, recalculamos el total de vueltas utilizando reduce.
 */

let totalVueltas = vueltas.reduce(function (acum, indice) {
    return acum + indice

})
console.log(`Punto 6: `, totalVueltas);
