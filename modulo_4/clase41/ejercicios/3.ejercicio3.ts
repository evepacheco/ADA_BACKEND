/* Ejercicio 3: Métodos en Objetos 
 
1. Modifica el objeto del ejercicio anterior para que incluya un método 
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.*/



export const Libro ={
    titulo:"Cien años de soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion:1967,
propiedadesObjeto: function () {
    return `Propiedades del libro: "${Libro.titulo}"
     Autor: ${Libro.autor} 
     Año de publicaxion : ${Libro.añoPublicacion}`
}
}

//uso del metodo
console.log(Libro.propiedadesObjeto())
