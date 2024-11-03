// Ejercicio: Gestión de Estudiantes
// Consigna: Crea un sistema de gestión de estudiantes que permita realizar 
// las siguientes tareas:
// Añadir un nuevo estudiante.
// Modificar la información de un estudiante existente.
// Mostrar la lista de estudiantes con sus detalles.
// Obtener el promedio de las calificaciones de un estudiante.
// Destructurar la información de un estudiante.
// Especificaciones:
// Cada estudiante debe tener un nombre, edad, estado activo, y una lista 
// de calificaciones.
// Utiliza tuplas para almacenar la información del estudiante y sus calificaciones.
// Implementa funciones para realizar las tareas mencionadas.


//1.DEFINIMOS LA TUPLA PARA EL ESTUDIANTE

type Estudiante =[string,number, boolean, ...number[]];

//2. CREAR UNA LISTA DE ESTUDIANTES

let estudiantes:Estudiante[]= []

//3. funcion para añdir un nuevo estudiante

function agregarEstudiante(nombre:string,edad:number, activo:boolean,...calificaciones:number[]) {
    const nuevoEstudiante:Estudiante=[nombre,edad,activo,...calificaciones]
estudiantes.push(nuevoEstudiante)//se va agregando al array de Estudiante
console.log(`Estudinte: ${nombre} agregado con exito!`);

}

//4.FNCION PARA MODIFICAR ESTUDIANTE

function modfificarEstudiante(indice: number, nombre?:string,edad?:number,activo?:boolean) {
  if (estudiantes[indice]) {//verificamos si existe el estudiante con el indice uqe  pasamos
    if (nombre!== undefined)estudiantes[indice][0] = nombre 
    if (edad!== undefined)estudiantes[indice][1] = edad
    if (activo!== undefined)estudiantes[indice][2] = activo
    console.log(`Estudiante en indice ${indice} modificado con exito`);
    
  } else{
    console.log(`Estudiante no encontrado`);
    
  } 
}

//5.FUNCION PARA MOSTRAR LA LISTA DE ESTUDIANTE 
function mostarEstudiantes() {
    console.log(`Lista de estudiante: `);
    estudiantes.forEach((estudiantes ,indice) => {// desestructurar para poder mostar
        const [nombre, edad, actico,...calificaciones] = estudiantes
   console.log(`${indice},Nombre: ${nombre},Edad: ${edad}, Activo: ${actico? "si":"no"}, calififica:${calificaciones.join(" ,")}`);
   
    })
}
// 6 funcION PAR OBTENER EL PROMEDIO DE LA CALIFICACIONES

function obtenerPromedio(indice:number): number | null {
    const estudiante=estudiantes[indice]
    if (estudiante) {
        const calificaciones = estudiante.slice(3) as number[] //obeter califica a partir de 3er elemento de la tupla, un array de numeros
        const total = calificaciones.reduce ((sum, calificaciones)=> sum + typeof calificaciones ==='number'? calificaciones:0, 0)
   return total/calificaciones.length
    }
    console.log(`Estudinte no encontrado`);
    return null
}

//7.Usos

agregarEstudiante("PAU",24,true,8,9,10)
mostarEstudiantes();
modfificarEstudiante(1,"sofi",22,true);

const promedio=obtenerPromedio