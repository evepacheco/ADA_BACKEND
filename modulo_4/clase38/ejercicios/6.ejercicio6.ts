/* Ejercicio 6: Uso de unknown
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los 
valores*/

let unknowValor: unknown = 13;

if (typeof unknowValor === "string") {
    console.log("Es un valor string");
} else if (typeof unknowValor === "number") {
    console.log("Es un valor number");
} else if (typeof unknowValor === "boolean") {
    console.log("Es un valor booleano");
} else {
    console.log("Valor no identificado");

}