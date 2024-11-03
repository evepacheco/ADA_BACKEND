/* • Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas. */

const prompt = require('prompt-sync')({ sigint: true });

let condicion1=prompt(`Cumpleaños en julio(true/false): `);
let condicion2=prompt(`Tiene pensado festejarlo(true/false): `);

if (condicion1=="true" && condicion2=="true") {
    console.log(`Feliz Cumpleaños, tenemos fiesta`);
    
}else if(condicion1=="true" && condicion2=="false"){
    console.log(`Feliz Cumpleaños`);

}else if (condicion1=="false" && condicion1=="false") {
    console.log('Indique mes de su cumpleaños en la base de datos');
}