/*•Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la cantidad */

const prompt = require ("prompt-sync")({ sigint: true });

  let  cantidadProductos=parseFloat(`Ingrese la cantidad de productos: `);
   let precioProd[i]=parseFloat(prompt(`Ingrese el precio del producto ${cantidadProductos[i+1]}:`));
    suma+=precioProd[i]
}
let descuentoCant= cantidadProductos =>{
if (cantidadProductos.length>=3) {
    let totalaDesc=suma-500
    console.log("Tenes descuento de $500.- ");
    
} else{
    console.log("No tienes descuento");
    
}

}
descuentoCant(cantidadProductos(totalaDesc))
