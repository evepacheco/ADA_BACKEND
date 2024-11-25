/* Ejercicio 9: Operaciones con tuplas de estudiantes 
1. Declara una tupla que almacene el nombre de un estudiante (string), su 
promedio (número), y si ha aprobado (booleano).
2. Inicializa la tupla con los valores "Ana", 8.5, true.
3. Crea una segunda tupla con los valores "Pedro", 6.2, true.
4. Modifica la nota de Pedro a 4.9 y actualiza el valor de aprobado a false.
5. Muestra por consola la información de ambos estudiantes.*/

let studient1:[ string, number, boolean] =["Ana", 8.5, true]

let studient2 :[ string, number, boolean] = ["Pedro", 6.2, true]

studient2[2]=false

console.log(`Estudiantes actualizados:
   -Estudiante ${studient1[0]}, nota: ${studient1[1]}, estado:${studient1[2]}
   -Estudiante ${studient2[0]}, nota: ${studient2[1]}, estado:${studient2[2]}`);
