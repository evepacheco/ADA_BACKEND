/*Ejercicio 5: Interfaz 
 
1. Define una interfaz llamada IPersona con propiedades nombre, edad y un 
método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y 
proporciona la implementación del método presentarse().
*/

interface IPersona {
    nombre:string
    edad:number
   presentarse(): void
}

// se usa implement para INTERFACE 
class Persona implements IPersona {
    constructor (public nombre:string, public edad:number) {} // toma los parametros del constructor

    public presentarse(): void {
       console.log(`Hola, me llamo ${this.nombre}, y tengo ${this.edad} años`)
        
    }
}

let personaA = new Persona("Melody", 3 )
console.log(personaA.presentarse());
