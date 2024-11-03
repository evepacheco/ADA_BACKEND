//ASERCIONES
//Permite decirle al compilador qur tipo de datos debe asumir cuando no puede inferir automaticamnete, o
//cuando queremos especificar un tipo mas preciso

//Ejempl1: Asercion basica de tipo "any" a "string"

let valoresGenericos: any ="Typescript es buenisimo"; //al ser any el valor generico no podemos calcular la longitug

let longitugString: number = (valoresGenericos as string).length; 
console.log(`La longitud del string es:${longitugString}`);

//Ejemplo 2: asercion de tipos de union
//Imaginemos que tenemos una fx que pueda recibir uhn nombre o valor nulo

function obtenerNombresEnMayuscula(nombre:string │ null ): void {
    //el compilador no sabe si nombre es un string o null, por lo tano debemos hacer una verificaion
    if (nombre) {
        return(nombre as string).toUpperCase();

    }else{

        return "Nombre no proporcionado"
    }
}
//Pruebas

console.log(obtenerNombresEnMayuscula("sofi"));
console.log(obtenerNombresEnMayuscula(null));
console.log(`------------------------------------------------------------------`);

//Ejemplo 3: uso asercion con unknow
//unknom es similar a any. pero mas seguro. DEBEMOS ASEURARNOS DEL TIPOANTES DE USAR


let valorDesconocido: unknown =`Este es un valor desconocido`

//No podemos acceder directamente a las propiedades de ValorDesconocido, porque ts no sabe su tipo, 
//por eso uasamos aserciones de tipo(una vez que verificaos su tipo)

if(typeof valorDesconocido === "string");
let longitud: number =(valorDesconocido as string).length;
console.log(`La longitud del string desconocido es: ${longitud} `);
