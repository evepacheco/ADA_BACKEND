/* 2). EXTRA: Conversión de Objetos JavaScript a JSON
1. En la misma carpeta clase24, crea un nuevo archivo llamado 
actividad2.js.
2. Crea un objeto en JavaScript que represente a un estudiante con las 
siguientes propiedades: nombre, edad, curso, notas (un array de 
números).*/


let estudiante = {
    nombre:" Evelia",
    edad: 31,
    curso:" backend",
    notas: [8, 7, 5]
}

//Instrucciones:
//• Convierte este objeto a una cadena JSON usando JSON.stringify().

let estudianteJsn= JSON.stringify(estudiante);
console.log(estudianteJsn);

//• Muestra la cadena JSON en la consola.
//• Luego, convierte la cadena JSON de nuevo a un objeto utilizando 
//JSON.parse() y muestra el objeto en la consola. */


let estudianteJava = JSON.parse(estudianteJsn);
console.log(estudianteJava);
