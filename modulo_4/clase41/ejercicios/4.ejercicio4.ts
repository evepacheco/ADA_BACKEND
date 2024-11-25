/*/ Ejercicio 4: Clases y Objetos 
1. Define una clase llamada Animal con propiedades nombre y tipo, y un 
método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método */

export class Animal {
    
    public nombre: string;
    public edad: number;
    public sonido:boolean;
   

    //Constructor
    constructor(nombre: string, edad: number,sonido: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.sonido=sonido
       }

public  obtenerInfo():string {
    return `Nombre :${this.nombre}, tiene ${this.edad} de edad, hace sonido?:${this.sonido}`
}
   }

   const perro = new Animal("Thor", 8, true)

   console.log(perro.obtenerInfo());
   