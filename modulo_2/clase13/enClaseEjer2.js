/* Ejercio en clase 2 : 
Calculo de descunto por edad
solicita al usuario su edad y usa funcion flecha
para aplicar un desc dependiendo de la edad. 
uedes tomar punto de partida los siguientes datos:
 ✓ 65 anos = 15% de descuento
 ✓ Menor a 65 = No hay descuento*/


 const prompt = require('prompt-sync')()

 let edadUsuario= parseInt(prompt("Ingrese su edad : "))

 const descuentoPorEdad = (edad) => {
let descuento = (edad >= 65) ? 0.15 : 0;
return descuento

 }
  let descuento = descuentoPorEdad(edadUsuario);
  if (descuento > 0) {
    console.log(`Tenes un descuento de ${descuento * 100} % por ser adulto mayor ` );
} else { 
    console.log(`No tenes descuento`);
}
  