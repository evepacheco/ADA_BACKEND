/*• Ejercicio 2: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✓ título: una cadena con el título del libro.
✓ autor: una cadena con el nombre del autor del libro.
✓ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado.*/


  let libro1={
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        anioPublicacion: 1954
    }

 let libro2 = {
        titulo: "Harry Potter",
        autor: "Joanne Rowling",
        anioPublicacion: 1997
    }


function mostrarLibros() {
   let libros = [libro1, libro2]
    console.log(`Informacion de los libros : `, libros);
    return libros
}
mostrarLibros()