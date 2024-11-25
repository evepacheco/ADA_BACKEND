/* Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto 
empleado con las propiedades nombre (string) y salario (number), y un número 
que represente el porcentaje de aumento. La función debe aumentar el salario 
del empleado y devolver el nuevo salario. Muestra en la consola el resultado.*/

let empleado ={name: "Juna", salario: 50000} ;

function aumentarSalario(empleado:{name:string, salario: number}, porcentaje:number) {
   empleado.salario += empleado.salario * (porcentaje / 100);
   return empleado.salario
}

let newSalario = aumentarSalario(empleado, 100);
console.log(newSalario);
