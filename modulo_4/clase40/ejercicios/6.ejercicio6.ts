/* Ejercicio 6: Combinando Arrays, Tuplas y Enum 
1. Declara un enum llamado Colores con los valores Rojo, Verde, Azul.
2. Crea un array de tuplas donde cada tupla tenga el nombre de un color 
(string) y el valor correspondiente del enum.
3. Añade una tupla más con otro color y su valor del enum.
4. Muestra por consola todo el array de tupla*/



// Declarar el enum
export enum Colores {
    Rojo,     // El valor 'Rojo' tiene el valor numérico 0
    Verde,    // El valor 'Verde' tiene el valor numérico 1
    Azul      // El valor 'Azul' tiene el valor numérico 2
    // Los valores por defecto del enum son asignados automáticamente comenzando en 0
  }
  
  //2- Crear un array de tuplas
  // Este array llamado 'tupaArrayColores' está compuesto por tuplas. Cada tupla contiene:
  // - Un string (nombre del color).
  // - Un valor del enum 'Colores', que representa uno de los valores enumerados (Rojo, Verde o Azul).
  let tupaArrayColores: [string, Colores][] = [
    ["Rojo", Colores.Rojo],   // Tupla con el string "Rojo" y su valor correspondiente en el enum (0)
    ["Verde", Colores.Verde], // Tupla con el string "Verde" y su valor correspondiente en el enum (1)
    ["Azul", Colores.Azul]    // Tupla con el string "Azul" y su valor correspondiente en el enum (2)
  ];
  
  // Añadir una tupla más al array
  // Usamos el método 'push' para agregar otra tupla. En este caso agregamos:
  // - El string "Amarillo".
  // - El valor del enum 'Colores.Rojo' que tiene asociado el valor 0.
  // Esto se hace aunque "Amarillo" no sea originalmente parte del enum.
  tupaArrayColores.push(["Amarillo", Colores.Rojo]);
  
  // Mostrar el array de tuplas en la consola
  // Aquí se muestra todo el contenido del array 'arrayColores' en la consola.
  // Cada elemento del array es una tupla que contiene el nombre de un color y su valor correspondiente del enum.
  console.log(tupaArrayColores);//[ [ 'Rojo', 0 ], [ 'Verde', 1 ], [ 'Azul', 2 ], [ 'Amarillo', 0 ] ]