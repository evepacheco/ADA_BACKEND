// Situación: pedido de fiambreria

const prompt = require('prompt-sync')({ sigint: true });

// Precio 
const quesoPrecio = 850;
const salamePrecio = 950;
const jamonPrecio = 1200;

let pedido= prompt(`Ingrese su pedido: `)


if (pedido === "queso") {
    let cantidad=prompt(`Ingrese la cantidad : `)
let cantidadSolicitada= cantidad*quesoPrecio
    console.log(`El total seria: ` +cantidadSolicitada);
} else if (pedido === "salame") {
    let cantidad=prompt(`Ingrese la cantidad : `)
    let cantidadSolicitada= cantidad*salamePrecio
        console.log(`El total seria: ` +cantidadSolicitada)

} else if (pedido === "jamon") {
    let cantidad=prompt(`Ingrese la cantidad : `)
let cantidadSolicitada= cantidad*jamonPrecio
    console.log(`El total seria: ` +cantidadSolicitada)
}else{
    console.log("No disponible");
}
console.log("Gracias por usar la aplicación");
