/* 1). Creación y Manipulación de un Objeto JSON
1. Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada 
clase24.
2. En la carpeta clase24, crea un archivo JavaScript llamado actividad1.js.
3. En este archivo, crea un objeto JSON que represente un libro. El objeto 
debe tener las siguientes propiedades: titulo, autor, año, genero (puede 
ser un array de géneros).
Instrucciones: */


let libro = {
    "titulo" : "Harry Potter y la piedra filosofal",
    "autor": "JK Rowling",
    "anio": 1997,
    "genero": "Fantasia"
}

//• Muestra en la consola el título y el autor del libro.

//console.log(`NOMBRE DEL LIBRO: ${libro.titulo}`);
//console.log(`AUTOR DEL LIBRO: ${libro.autor}`);

//• Actualiza el año del libro a un valor más reciente.

libro.anio = 2023;
//console.log(`AÑO ACTUALIZADO DEL LIBRO: ${libro.anio}`);

//• Añade una nueva propiedad llamada páginas que indique el número 
//de páginas del libro.

libro.paginas = 350;
//console.log(`CANTIDAD DE PÁGINAS DEL LIBRO:${libro.paginas}`);

//• Muestra el objeto actualizado en la consola */

console.log(libro);


