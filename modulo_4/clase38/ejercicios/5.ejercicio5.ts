/*  Ejercicio 5: Datos nulos y diferenciados
Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena, 
y luego cambia su valor a null. Imprime ambos estados en la consola, explicando 
el significado de null en TypeScript.*/

let variableA: string | null = null;
variableA = "La variable A tiene valor de una cadena";
console.log(variableA);

variableA =null;
console.log(`Ahora la variable A tiene un valor null, que en TypeScript representa la ausencia de valor y en este caso, puede ser un tipo diferenciado del valor de esta variable.`);


