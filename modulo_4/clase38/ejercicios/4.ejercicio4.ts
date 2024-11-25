/* Ejercicio 4: Parámetros opcionales simulados
Declara dos variables, una para almacenar un nombre y otra para almacenar una 
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no 
proporcionada". Si se asigna la edad, imprímela junto al nombre.*/


let nombreNew: string ="Luciana"
let edadNew: number | undefined;

if (edadNew!== undefined) {
    console.log(`${nombreNew} tiene ${edadNew} de edad`);
    
}else{
    console.log(`${nombreNew} edad no proporcionada`);
    
}