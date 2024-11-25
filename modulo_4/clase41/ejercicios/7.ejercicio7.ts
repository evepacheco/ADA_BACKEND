/* Ejercicio 7: Modificadores de Acceso 
1. Define una clase Coche con propiedades marca, modelo (públicas) y 
precio (privada).
2. Implementa un método para mostrar la información del coche que acceda 
a las propiedades públicas y no a la privada directamente.*/

export class Coche {
    public marca:string
    public modelo:string
private precio:number

constructor ( marca:string,modelo:string,precio:number){
    this.marca=marca
this.modelo=modelo
this.precio=precio
}

infoCoche(): string {
return `Datos del Coche: marca: ${this.marca} y modelo: ${this.modelo} `

}
infoCompletaCoche(): string {
   return `Datos del Coche completo: marca: ${this.marca}, modelo: ${this.modelo} y precio de lista: $${this.precio}`
}

}

let miMovil= new Coche("Fiat","Falcon",3000000)
console.log(miMovil.infoCoche());
console.log(miMovil.infoCompletaCoche());

