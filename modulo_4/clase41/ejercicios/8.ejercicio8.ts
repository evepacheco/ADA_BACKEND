/* Ejercicio 8: Integramos contenidos - Animales 
1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
Animal, Mascota, y MascotaExotica.
o La clase Animal debe tener propiedades como nombre y tipo.
o La clase Mascota debe extender Animal e incluir una propiedad para 
dueño.
o La clase MascotaExotica debe extender Animal e incluir una 
propiedad para habitat.
2. Implementa métodos para mostrar información sobre cada tipo de animal 
y agrega ejemplos de instanciación*/



class Animal {
   public nombre:string
   public tipo:string

    constructor(nombre:string, tipo:string){
        this.nombre=nombre
        this.tipo=tipo
        }

        infoAnimal(): void{
            console.log(`INFORMACION SOBRE EL ANIMAL: nombre: ${this.nombre}, tipo: ${this.tipo}`);
            
    }

}
//la subclasees fuera de la clase base

class Mascota extends Animal{
    public dueño:string

    constructor(nombre:string,tipo:string,dueño:string){//incluimos las prop de la clase base
        super(nombre,tipo)// llama al constructo de la clase base con la palabra clave SUPER
        this.dueño=dueño
      }
   infoAnimal():void{
    super.infoAnimal()//LLAMAMOS A L METODO DE LA CLASE BASE
    console.log(`Pertenece a: ${this.dueño}`);
    }
}

class MascotaExotica extends Animal{
    public habitat:string

    constructor(nombre:string,tipo:string,habitat:string){
        super(nombre,tipo)
        this.habitat=habitat
    }
    infoAnimal():void{
        super.infoAnimal()
        console.log(`Habitat: ${this.habitat}`);
    
    }
}
//instancia creadas especificando la subclase
const miPerro = new Mascota("Rex", "Perro", "Juan");
miPerro.infoAnimal();

const miTigre = new MascotaExotica("Tigre", "Felino", "Selva");
miTigre.infoAnimal();
