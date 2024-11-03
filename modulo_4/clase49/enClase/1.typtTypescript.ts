//DEnicion: alias de tipos en typescript



//1. alias de tipo primitivos: Ejemplo:String, number, etc

type ID = number;// alias 
type Nombre = string;
type Activo = boolean;

//Usamos las alias para declarar variable

let usuarioId: ID = 123;
let nombreUsuario: Nombre = `Sofia`;
let cuentaActiva: Activo = true;

console.log(`Usuario ID:${usuarioId}, Nombre del Usuario : ${nombreUsuario} y cuenta Activa : ${cuentaActiva}`);


//2 alias para objetos
type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: number
}

//usamos el alias `direccion`

let miDireccion: Direccion = {
    calle: `olazabal`,
    ciudad: `buenos aires `,
    codigoPostal: 1824

}

console.log(`Vivo en ${miDireccion.calle}, e la ciudad ${miDireccion.ciudad} con codigo postal ${miDireccion.codigoPostal}`);

//3.alias para uniones de tipos

type Resultado ="exito"│ "error"
type IdUsuario = string  │ number;

//usamos alais para definir variables
let estadoOperacion : Resultado =`exito`;
let IdUsuario1: IdUsuario = 456;
let IdUsuario2: IdUsuario = `1234abc`

console.log(`Estado ${estadoOperacion}, usuario 1 ${IdUsuario1}, usuario 2 : ${IdUsuario2}`);

//4.alias para funciones

// alais para fx que se toman 2 numeros como argumneto y devuelve un numero
//esto se usa para definir la firma de fx que deben cumplir con cierto formato

type OperacionMatematica = (a:number, b:number) => number;

//implementacon de dos fx que sigen el ormato de operacmatem

const sumar :OperacionMatematica=(a,b)=> a+b;
const restar : OperacionMatematica =(a,b)=> a-b;

console.log(`suma ${sumar(5,3)} , resta :${restar(4,2)} `);

// alias para array

type ListaDeNumero = number[];
type ListaDeCadenas= string[];

let numero :ListaDeNumero =[1,2,3,4];
let cadenas :ListaDeCadenas =["uno", "dos","tres"]

console.log(`Numeros :${numero.join(", ")}`);
console.log(`cadenas :${numero.join(", ")}`);


//6.alias para obejtos complejos

type Producto = {
    id:ID;
    nombre:string;
    precio:number;
    disponible:boolean;
    categoria:ListaDeCadenas;
    direccionEnvio: Direccion;
}
//creamos el objeto "PRODUCTO"

let pruducto : Producto ={
    id:123,
    nombre:"computadora laptop",
    precio:800,
    disponible: true,
    categoria: ["Electronica", "computacion"],
    direccionEnvio : {
        calle: "peru",
        ciudad:"lanus",
        codigoPostal: 1234
    }
}

console.log(`Producto ${pruducto.nombre} id: ${pruducto.id}, precio: ${pruducto.precio}`);
console.log(`Disponibl: ${pruducto.disponible}, direc envio : ${pruducto.direccionEnvio.calle.join(", ")}`);//coregir



