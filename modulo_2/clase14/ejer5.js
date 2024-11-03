/* Ejercicio 5: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario 
menciona sus flores favoritas. Utiliza un array para almacenar las flores 
favoritas y realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array (aquí usa un método de los vistos en Arrays)
3. Pregunta al usuario por una flor específica y verifica si está entre sus 
favoritas (aquí usa un método de los vistos en Arrays)
4. Muestra por consola cuántas de las flores favoritas se mencionaron.
Pista: Se utiliza el método includes */
const prompt=require('prompt-sync')({ sigint: true });
let floresFavoritas=[];
for (let i =0; i < 3; i++) {// para que pida las 3 flores
   let flor=prompt(`Ingrese sus 3 flores favorita ${i+1}:`)
floresFavoritas.push(flor)//guarda en el array
}
//console.log(floresFavoritas);

let florEspeci= prompt(`Que flor estas buscando?: `)
let florEncontrada=floresFavoritas.includes(florEspeci);//devuelve booleano true o false
//console.log(florEncontrada);

if (florEncontrada) {
 console.log(`La ${florEspeci} se encuentra en la lista de favoritas`);
    }else{
    console.log(`La flor buscada no se encuentra en la lista`);
    }




