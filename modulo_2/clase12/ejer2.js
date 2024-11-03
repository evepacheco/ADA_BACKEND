/*• Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio. */

const prompt = require("prompt-sync")({ sigint: true });

// aca se ingresa las notas y l
let notas = []
for (let index = 0; index < 5; index++) {
      notas[index] = parseFloat(prompt(`Ingrese la calificacion ${index + 1}: `));

}
// aca se calcula el promedio
const promedioNotas = (notas) => {
      let suma = 0
      for (let index = 0; index < notas.length; index++) {
            suma += notas[index];
      }
      return suma / notas.length;
}




let promedio = promedioNotas(notas)
console.log(`El promedio de las calificaciones es: ${promedio}`)