/* Ejercicio 3: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros. La 
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo 
en cuenta los siguientes criterios:
✓ Si el número a imprimir es múltiplo del primer parámetro que se 
ingresó, deberá mostrar el string “Back” en lugar del número.
✓ Si el número a imprimir es múltiplo del segundo parámetro ingresado, 
deberá mostrar el string “End” en su lugar del número.
✓ Si el número a imprimir es múltiplo de ambos parámetros, deberá 
mostrar el string “Back End” en lugar del número */

function backEnd(numero1,numero2) {
    for (let i = 1; i <= 100; i++) {
       if (i%numero1===0) {//Si el número a imprimir es múltiplo del primer parámetro que se ingresó
        
        console.log("Back");
        }else if (i%numero2===0) {///Si el número a imprimir es múltiplo del segundo parámetro que se ingresó
            console.log("End");
        }else if (i%numero1===0 && i%numero2===0) {//Si el número a imprimir es múltiplo de ambos parámetros
            console.log("Back end");
           }else{
            console.log(i);
          }}
   
}backEnd(3,5)