/*• Ejercicio 5:
Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/


const prompt = require ("prompt-sync")({ sigint: true });

let sueldoMensual = parseFloat(prompt("Ingrese su sueldo mensual: "))

function ValorPorHora(sueldoMensual) {
    PorHora = sueldoMensual/40
    return PorHora + " por hora"
    
}
console.log("El valor por hora es :"+ValorPorHora(sueldoMensual));
