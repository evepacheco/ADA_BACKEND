/* •	Ejercicio 1: map() “Hagamos lío...”
Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de travesura, queremos adelantar una hora cada partida. 
Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.
Además de hacer esto, deberemos realizar las siguientes operaciones: */

let horarioPartidas = [ 12, 14, 18, 21]

let horarioAtrasados= horarioPartidas.map(function(hora){
return hora+1;
})
console.log("punto 1 : ",  horarioAtrasados);

/*	Añadir un nuevo horario al principio de la lista: Usamos unshift para agregar el horario 10 al principio.*/

horarioAtrasados.unshift(10)
console.log(`punto1: `,horarioAtrasados);

/*2 Eliminar el último horario de la lista: Usamos pop para eliminar el último horario y lo guardamos en ultimoHorario.*/

let ultimoHorario= horarioAtrasados.pop()

console.log(ultimoHorario);
console.log(" punto 2 : ",  horarioAtrasados);

/*3 Verificar si el horario 14 está en la lista y agregarlo al final si no está presente: Usamos includes para verificar si 14 está en la lista y push para agregarlo si no está.*/

let verificarHora=horarioAtrasados.includes(14)
console.log(`Punto 3: El horario 14 esta en la lista? : `,verificarHora);

let agregarHora= horarioAtrasados.push(14);
console.log(`punto 3: Se agrego a la lista el horario 14`);

console.log(horarioAtrasados);

/*Encontrar la posición del horario 18 y eliminarlo si está presente: Usamos indexOf para encontrar la posición de 18 y splice para eliminarlo si está presente.*/

let posicion= horarioAtrasados.indexOf(18);
console.log(posicion);

let eliminarHora= horarioAtrasados.splice(18);

/*Añadir el horario eliminado en el paso 2 al final de la nueva lista de horarios atrasados: Usamos push para agregar el ultimoHorario (adelantado una hora) al final de horariosAtrasados.*/
let agregarUltimaHora= horarioAtrasados.push(ultimoHorario);

console.log(`Se agrego el ultimo horario, ${ultimoHorario}`);
/*Mostrar la lista final de horarios atrasados: Mostramos la lista por consola.*/

console.log(`Horarios atrasados: `+horarioAtrasados);

/*Eliminar el primer elemento de la lista de horarios atrasados: Usamos shift para eliminar el primer elemento.*/
let elIminarPrimerHorario= horarioAtrasados.shift();
console.log(`Horario eliminado primero: `+ elIminarPrimerHorario);
console.log(horarioAtrasados);
/*Verificar si el horario 9 está en la lista y agregarlo al principio si no está presente: Usamos includes para verificar si 9 está en la lista y unshift para agregarlo si no está.
	Por último, mostrar la lista final después de todas las operaciones
 */
verificarHora=horarioAtrasados.includes(9),
console.log(`El horario 9 esta en la lista? : `+ verificarHora);

let agregarPrincHora= horarioAtrasados.unshift(9);

console.log(`Se agrego el horario 9`)
console.log(`Lista final de: `+horarioAtrasados);
