//Ejemplo básico FOR IN con un objeto

let alumna ={
    nombre:'Lucia',
    edad:22,
    curso: 'Carrera Back'
};

for (let propiedad in alumna) {
    console.log(`Clave:${propiedad}, Valor: ${alumna [propiedad as keyof typeof alumna]}`);
    
}// le decimos al compilaodr que la variable propiedad es una clave valida de las propiedades del objeto alumno, es decir uande las
//Primer ejemplo se itera la spropi del objeto alumna que representa aun estudiante


//Ejemplo en un array
let lenjuages =['Javascript', ` Python`]

for (let indice in lenjuages) {
    console.log(`Indice :${indice}, Valor: ${lenjuages[indice]}`);
    
    };
    // Segundo ejemplo: El array contiene 2 lenguajes 
    //i lo recorre