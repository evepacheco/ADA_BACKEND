/*• Ejercicio 3 - Calculadora Simple: Escribe un programa que pida al 
usuario dos números y una operación (suma, resta, multiplicación o 
división). Luego, realiza la operación indicada y muestra el resultado en 
la consola.
Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides 
usar “let” para definir variables.
Pista 2: Investiga que es parseFloat, ya que este ejercicio lo 
necesitaras.*/

const prompt = require('prompt-sync')({ sigint: true });
let numero1 = parseFloat(prompt(`Ingrese el primer numero:`));
let numero2 = parseFloat(prompt(`Ingrese el segundo numero:`));

let operaciónSolicitada = prompt(`Ingrese la operacion solicitada (suma,resta,multiplicacion o division):`);

if (operaciónSolicitada === "suma") {

    console.log(numero1 + numero2);
} else if
    (operaciónSolicitada === "resta") {
    console.log(numero1 - numero2);
} else if (operaciónSolicitada === "multiplicacion") {
    console.log(numero1 * numero2);
} else if (operaciónSolicitada === "division") {
    console.log(numero1 / numero2)

} else {
    console.log("Operación Inválida");
}





