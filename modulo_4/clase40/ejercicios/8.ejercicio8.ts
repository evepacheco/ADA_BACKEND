/*  Ejercicio 8: Uso de métodos de arrays 
1. Declara un array que contenga los nombres de 5 países.
2. Ordena el array en orden alfabético.
3. Usa un método para agregar otro país al inicio del array.
4. Elimina el último país del array.
5. Recorre el array y muestra cada país por consola.*/


let countries: string[]= ["Brasil", "Argentina", "Canadá", "EE.UU", "Chile"]

let alphabeticOrder = countries.sort().join(", ")
console.log(`${alphabeticOrder}`);


countries.unshift("Bolivia")
console.log(countries);

let ultimoEliminado= countries.pop()
console.log(countries);

countries.forEach(countries => console.log(countries));
