/*  Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
titulo (string), autor (string) y paginas (number). La función debe devolver un 
objeto con esas propiedades. Luego, crea dos libros utilizando la función y 
muestra sus detalles en la consola. */


function createBook(titulo:string, autor: string, paginas:number) {
    return {titulo,autor,paginas}
}

let firstBook = createBook( "La Tia Cósima", "Florencia Bonelli", 576);

let secondBook = createBook( "El Segundo Sexo", "Simone de Beauvoir", 832)

console.log(firstBook);

console.log(secondBook);

