// Gestión de Vehículos
// Se requiere implementar un sistema para gestionar diferentes tipos de vehículos 
// (coches, motocicletas, bicicletas). 
// Cada vehículo debe tener un identificador único, un tipo de combustible 
// (en caso de que lo use), y todos los vehículos deben poder moverse.
// Los vehículos motorizados como coches y motocicletas deben tener un método para arrancar.
// Las bicicletas solo necesitan poder moverse, ya que no usan combustible ni motor.
// Debes usar tuplas, alias (type) e interfaces para estructurar la solución.


type Coordenada = [number, number];
//funcion que acepte coordenadas con tupla y muestra la posicion

function mostrarPosicion(posicion: Coordenada): void {
    console.log(`Posicion actual : X = ${posicion[0]}, Y = ${posicion[1]}`);

}
//usa type(Definimosun alias para combustible )

type combustible = "gasolina"// │ "diesel" │ "electrico";

//alias para el id de un vehiculo (string o number).

type vehiculoId = number;

//alais para un objeto motor que contiene info del tipo de combudti
type Motor = {
    tipoCombustible: combustible
    encendido: boolean
}

//uso de interfaces
//definimos una interfaz vehic que describe las prop comnes de cualqier vehiculo

interface vehiculo {
    id: vehiculoId;
    posicion: Coordenada
    mover(nuevaPosicion: Coordenada): void //para movr le vehiculo
}

//interface para veh que tiebe motor

interface VehiculoMotorizado extends vehiculo {
    motor: Motor//info del motor
    arrancar(): void //metodo para arrancar el vehiculo

}

//clase coche que implementa la interface vehiculoMotoriza

export class Coche implements VehiculoMotorizado {
    id: vehiculoId;
    posicion: Coordenada;
    motor: Motor;

    constructor(id: vehiculoId, posicion: Coordenada, motor: Motor) {
        this.id = id;
        this.posicion = posicion;
        this.motor = {
            tipoCombustible,
            encendido:false
        }
    }

    mover(nuevaPosicion:Coordenada):void{
        this.posicion = nuevaPosicion;
        console.log(`el coche de ha movido a la nueva posicion`)
        mostrarPosicion(this.posicion);
        
    }
    arrancar():void {
        this.motor.encendido=true;
        console.log(`el coche ha arrancado con ${this.motor.tipoCombustible}`);
        
    }
   
}
//clase bicicleta que implementa la interface vehiculo

class bicicleta implements vehiculo {
    id:vehiculoId;
    posicion: Coordenada;

    constructor(id: vehiculoId, posicion: Coordenada){
        this.id = id,
        this.posicion= posicion
    }
    //implememtamos el metodo mover

    mover(nuevaPosicion:Coordenada):void{
        this.posicion =  nuevaPosicion;
        console.log(`la bciccleta se ha movido a a nueva posicion`);
        mostrarPosicion(this.posicion)
    }
}

//creamos la instancia cohe que id 1, posisioc 0 y combustible gasolina
let miCoche = new Coche(1,[0,0],"gasolina");
miCoche.arrancar();
miCoche.mover([10,20])