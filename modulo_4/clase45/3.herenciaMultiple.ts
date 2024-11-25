//INTERFAZ

interface Flying {
    fly():void //metodo que implementamos para volar
}

//INTERFAZ
interface Swimming {
    swim(): void// metodo que implemneta para nadar
}

class Duck implements Flying , Swimming {
    fly(){
        console.log(`EL PATO ESTA VOLANDO`);
        
    }
    swim(): void {
        console.log(`EL PATO ESTA NADANDO`);
        
    }
}

//INSTANCIAMOS
const duck = new Duck()
duck.fly();
duck.swim();