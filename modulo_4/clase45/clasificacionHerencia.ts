//CLASIFICACION - HERENCIA SIMPLE

class Vehicle {
    speed:number;

    constructor(speed:number){
        this.speed=speed
    }

move(){
    console.log(`El vehiculo se mueve a ${this.speed} km/h`);
    
}

}

class car extends Vehicle{
    model:string;

    constructor(speed: number, model:string) {
        super(speed)
        this.model =model
    }
horn() {//vocina
console.log(`${this.model} esta tocando la bocina`);

}


}

//INSTANCIAR

const myCar = new car(120, `Toyota`)

myCar.move();
myCar.horn();