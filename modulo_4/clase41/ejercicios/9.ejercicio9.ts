/* Ejercicio 9: Sistema de Gestión de Vehículos 
1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
o Vehiculo: Clase base con propiedades como marca, modelo y un 
método para mostrar información del vehículo.
o Coche: Clase que extiende Vehiculo e incluye una propiedad para 
tipoCombustible y un método para mostrar la información completa 
del coche.
o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad 
para cilindrada y un método para mostrar la información completa 
de la motocicleta*/


export class Vehiculo{
    marca:string
    modelo:string

    constructor(marca:string, modelo:string){
        this.marca=marca
        this.modelo=modelo
    }
infoVehiculo():void {
    console.log(
     `-------INFORMACION-------
    -----*Marca: ${this.marca}-------
    -----*Modelo: ${this.modelo}------`)
      
}
}
class Coche extends Vehiculo{
    tipoCombustible:string

    constructor(marca:string, modelo:string,tipoCombustible:string){
        super(marca,modelo)
        this.tipoCombustible=tipoCombustible
    }
infoVehiculo(): string {
    super.infoVehiculo()
    return `-----*Tipo de Combustible: ${this.tipoCombustible}------`
    
}
}

class Motocicleta extends Vehiculo{
    cilindradas:number

    constructor(marca:string, modelo:string,cilindradas:number){
        super(marca,modelo)
    this.cilindradas=cilindradas
    }
    infoVehiculo(): string {
        super.infoVehiculo()
        return `----*Cilindradas: ${this.cilindradas} cc------`
        
    }
}

let corsa= new Coche("Chevrolet","Corsa","Nafta")
console.log(corsa.infoVehiculo());
let ducati= new Motocicleta("Ducati","DesertX",1079)
console.log(ducati.infoVehiculo());


