

//Ejemplo de una Función Generica
function identidad <T> (valor: T) {
    return valor;
} 

//Ejemplo de uso
let numero = identidad <number> (10);// VALOR ES UN NUMERO
let texto = identidad <string >("Hola")// VALOR ES UN STRING
console.log(numero, texto);

//Cuando se llama identidad, le decimos a typecript cual es el tipo que va autilizar. 


console.log('-------------------------------------------------------------');

//Ejemplo calse generica

class Caja <T>{
    contenido: T;

    constructor(valor:T){
        this.contenido =valor;
    }

    obtenerContenid ( ): T{
        return this.contenido
    }
}

//Ejemplo de uso
let cajaNumeros =  new Caja<number> (100);
console.log(cajaNumeros.obtenerContenid());

let cajaTexto = new Caja<string>("Hola Chicas");

console.log(cajaTexto.obtenerContenid());

//Cja T define una clase que puede contener cualquier tipo, determinando en el momentode la creaon de la instancia


console.log(`---------------------------------------------------------------`);

//Ejemplo : Interface generico

interface Par<T,U>{
    primero: T;
    segundo: U;
}

//Ejemplo de usos

let miPar : Par<String,number> ={
    primero:"Edad",
    segundo:22
}
console.log(miPar);
    