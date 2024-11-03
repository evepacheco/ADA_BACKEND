/* Ejercicio 4 
• Ejercicio 4: Numero pares
Escribí un programa que imprima los números pares del 0 al 100. No es 
necesario pedirle al usuario, solo imprimir el resultado. Agreguen los 
números pares a un array.
Pista: Usa un ciclo  */




//Bucle para recorrer del 0 al 100

let numerosPares = []
for ( let i = 0 ; i <= 100; i++){
    //verificar si el numero es par 
    if(i % 2 === 0 ) {
        // imprimir
        numerosPares [i/2 ]= i 
    }

}

 
 console.log( "NumerosPares :  ", numerosPares);
    

