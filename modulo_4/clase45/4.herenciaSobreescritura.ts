

class Empleado {
    nombre: string;

constructor(nombre: string){
    this.nombre = nombre
}
 trabajar():void {
    console.log(`${this.nombre} esta trabajando`);
    
 }
}

class Programador extends Empleado{
    lenguaje: string

    constructor(nombre:string, lenguaje:string){
super(nombre)
this.lenguaje = lenguaje
}

}