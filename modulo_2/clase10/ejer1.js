/* Ejercicio 1: Switch
Declará las variables vehiculo y litrosConsumidos. A continuación, 
realizá los cálculos para obtener el total a pagar, teniendo en cuenta las 
siguientes consideraciones:
✓ Si el vehículo es “coche”, el precio por litro es de $86.
✓ Si el vehículo es “moto”, el precio por litro es de $70.
✓ Si el vehículo es “autobús”, el precio por litro es de $55.
✓ Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al 
total a pagar.
✓ Si los litros consumidos son mayores a 25, se ha de añadir $25 al 
total a pagar.
Finalmente, imprimí en consola el total a pagar. */

let vehiculo = "coche";
let litrosConsumidos = 35;

switch (vehiculo) {
    case "coche":
        precioLitro = 86;
        break;
    case "moto":
        precioLitro = 70;
        break;
    case "autobús":
        precioLitro = 55;

        break;
}

totalPagar=precioLitro*litrosConsumidos

if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
    totalConRecargo= totalPagar + 50;


} else if (litrosConsumidos >= 25) {
   
    totalConRecargo = totalPagar + 25
}

console.log("El total con el recargo incluido es: "+totalConRecargo);