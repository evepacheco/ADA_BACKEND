//Comparacion entre for in y for of

import { FORMERR } from "dns";

//Ejemplo 1: Recorrer un array de autos con for in y con for of 

let auto = ['Toyota','Honda','Fiat'];

console.log('=====RECORRIDO DE UN ARRAY DE AUTOS=====');

//Uso de FOR IN recorre indices
console.log("Usando for in - Indice");

for (let indice in auto){
    console.log(`Indice: ${indice}, Auto: ${auto[indice]}`);
    
}


//Uso de FOR OF (Recorre valores),
console.log("Usando for of - Valores");
 for (let autos of auto) {
    console.log(`Auto: ${autos}`);
    
 };
 //For of recorre directamente los nombres de los autos , sin necesidad de recorres los indices

 console.log(`\n === RECORRIDO DE UN OBJETO AUTO ===`);
 
 //Ejemplo 2:Recorrer un obejto auto FOR IN

 let autito ={
    marca: 'Fiat',
    modulo: '1',
    anio: 1998
 };

 //Uso de FOR IN 

 console.log("Usndo FOR IN(claves de un objeto");
 for (let propiedad in autito){
    console.log(`Clave: ${propiedad}, Valor: ${autito[propiedad as keyof typeof autito]}`);
    
 };

 //Uso de FOR OF NO es posible co un objeto regular (ERROR)

// for (let valor of autito){
  //  console.log(valor);
    
 //};

 //Recorrido de un objeto autito no es posible ya que es un objeto regular
