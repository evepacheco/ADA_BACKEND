
/*•	Ejercicio 2: filter() “Alumnos”
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. 
Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.
Además de hacer esto, deberemos realizar las siguientes operaciones:	
*/

let estudiante = [
    { nombre: 'John', promedio: 8.5, aprobado: true },
    { nombre: 'Jane', promedio: 7, aprobado: true },
    { nombre: 'June', promedio: 3, aprobado: false },
    { nombre: 'Jake', promedio: 4, aprobado: false },
    { nombre: 'Jill', promedio: 9, aprobado: true }
]

//1) lista de aprobados y desaprobados
let alumnAprobados = estudiante.filter((alumno) => alumno.aprobado === true)

let alumnDesaprobados = estudiante.filter((alumno => alumno.aprobado === false))

//console.log(alumnAprobados,alumnDesaprobados);

//2)Manipula la lista de aprobados agregando un estudiante al inicio y otro al final.

alumnAprobados.unshift();
alumnAprobados.push();

//3)Manipula la lista de desaprobados eliminando al primero y al último estudiante.
alumnDesaprobados.shift();
alumnDesaprobados.pop();

//4)Utiliza map junto con indexOf para buscar un estudiante específico en la lista de aprobados y muestra su índice si está presente.

let estudianteNombre = alumnAprobados.map(function (alumno) {

    return alumno.nombre// se guarda en la variable los nombres de los alumnos
})
console.log(estudianteNombre);

let posicion = estudianteNombre.indexOf('Jill');// busca la posicion en la lista de nombres aprobado
console.log(posicion);

if (posicion) {//
    console.log("Alumno se encuentra en la lista de aprobados y su indice es: ", posicion);

}

//5)Utiliza includes para verificar si un estudiante está en la lista de desaprobados y muestra un mensaje indicando su presencia.

let verificaciosDesapro= alumnDesaprobados.includes('June');
if (verificaciosDesapro=true) {
    console.log('El alumno se encuentra en la lista de Desaprobados');
    
}

console.log('Alumnos aprobados: ',alumnAprobados);
console.log('Alumnos desaprobado:',alumnDesaprobados);

