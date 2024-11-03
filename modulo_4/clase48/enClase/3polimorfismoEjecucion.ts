//clase base: personaje

class Personaje {
    //metodo que sera sobreecrita por la subclases para atacar
    atacar(): void {
        console.log(`El personaje ataca`);

    }

    //metodo que sra sobreescrito para mover el personaje
    mover(): void {
        console.log(`El personaje se mueve`);
    }

}
// subclases : enemigo
class Enemigo extends Personaje {
    //sobreescribimos el metoo para que el enemigo ataque
    atacar(): void {
        console.log(`El enemigo ataca ferozmente`);

    }

    //sobreescribimos el metodo para ue el enemigo se mueva
    mover(): void {
        console.log(`El enemigo se mueve sigilosamente`);

    }
}

//subclase aliada

class Aliado extends Personaje {
    //sobreescribimos el metoo para que el aliado ataque
    atacar(): void {
        console.log(`El aliado ataca ferozmente`);

    }

    //sobreescribimos el metodo para ue el aliado se mueva
    mover(): void {
        console.log(`El aliado se mueve sigilosamente`);

    }

}

//Funcion que ejecuta las acciones de un personaje

function ejecutarAcciones(personaje:Personaje) {
    personaje.atacar();//llamamos al metodo sobreescrito atacar
    personaje.mover();// 
}

//creamos instancia de enemigo y alaido

let enemigo: Personaje =new Enemigo();
let aliado:Personaje = new Aliado();

//Ejecutamos las acciones 