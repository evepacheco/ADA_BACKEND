/* Ejercicio 2: Switch
El objetivo de este ejercicio es imprimir en pantalla un texto que estará 
condicionado de la siguiente manera. Utilizando switch deberemos 
evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, 
debe imprimir el texto "tenés clases". Para cualquier otro caso debe 
imprimir "no tenés clases".  */

let dia = /*'miercoles'*/ 'martes'
switch (dia) {
    case 'lunes':
    case 'miercoles':
    case 'viernes':
        console.log("Tenés clases.");
        break;

    default:
        console.log("No tenes clases.");

}