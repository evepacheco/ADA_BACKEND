/* Ejercicio 6: Tipos de parámetros y funciones que retornan objetos
Consigna: Crea una función llamada crearPersona que acepte tres parámetros: 
nombre (string), edad (number), y pais (string). La función debe devolver un 
objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la 
consola.*/

function createPerson(nombre:string, edad: number, pais:string){
    return {nombre, edad, pais}
}
console.log(createPerson("Melody",2,"Argentina"));

//let personaA = createPerson("Melody",23,"Argentina");
//console.log(`Persona: ${personaA.nombre} creado con exito`);
