//CLASE BASE

class animal{
    name: string

    constructor(name:string){
        this.name = name
    }
//METODO
makeSound():void {
    console.log(`${this.name} hace un sonido`);
    
}


}

//CLASE DERIVADA
class Dog extends animal {
    breed:string;// Nueva propiedad de la clase hija

    //Constructor
    constructor(name:string,breed:string) {
        super(name); //lla al constructor de la clase base
        this.breed = breed //Inicializa la propiedad breed
    }


//SOBREESCRITURA DEL METODO MAKESOUND

makeSound(): void {
    console.log(`${this.name} ladra`);
    
}
//nuevo metoo especifico del metodo makeSound




}