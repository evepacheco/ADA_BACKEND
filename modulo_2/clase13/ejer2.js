/*• Ejercicio 2: Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una 
función flecha para verificar y mostrar su estado de vacunación.*/

const prompt = require('prompt-sync')()
 
const verificarVacunacion = (nombre, vacunado) => {
    if (vacunado === "si") {
        return `${nombre} esta vacunado`
    } else if (vacunado === "no") {
        return `${nombre}  no esta vacunado`
        
    } else {
        return  `${nombre} no esta registrado`
    }
}

let nombreMascota = prompt("Ingrese nombre de su mascota : ");

let estadoVacunacion = prompt("Esta vacunado?, responda si o no : ")

let resultado = verificarVacunacion(nombreMascota, estadoVacunacion);
console.log(resultado);