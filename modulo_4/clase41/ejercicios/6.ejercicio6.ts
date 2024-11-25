/* Ejercicio 6: Uso de this 
1. Crea una clase llamada Mariposa con propiedades nombre y color, y un 
método volar() que use this para referirse a las propiedades de la 
instancia.
2. Crea una instancia de la clase y llama al método*/


export class Mariposa {
    public nombre:string
    public color:string

    constructor(nombre:string, color:string){
this.nombre=nombre
this.color=color
    }

    public volar():string {
        return `La Mariposa ${this.nombre} de color ${this.color} está volando`;
        
    }
}

const miMariposita = new Mariposa("Titi", "Celeste con rosa")

console.log(miMariposita.volar());
