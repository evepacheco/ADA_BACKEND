/* Ejercicio 10: Registro de Estudiantes 
1. Crea un sistema para registrar Estudiantes con las siguientes clases:
o Estudiante: Clase que incluye propiedades como nombre, edad y 
curso, además de un método que muestre la información del 
estudiante.
o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
métodos para agregar un estudiante y mostrar todos los estudiantes 
registrados.*/


export class Estudiante{
    nombre:string
    edad: number
    curso:string

constructor (nombre:string, edad: number,curso:string){
    this.nombre=nombre
    this.edad= edad
    this.curso= curso
}
infoEstudiante():void {
    console.log(`   INFO SOBRE ESTUDIANTE
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Curso: ${this.curso}`);
    
}
}
//class que contiene el metodo para agrgar estudiante
class RegistroEstudiantes {
    estudiantes: Estudiante[]=[]// creamos el array de estudiantes

    agregarEstudiante(estudiante:Estudiante):void{//metodo
this.estudiantes.push(estudiante)// agregarmos a esa lista el alumno nuevo
    }
    public mostrarEstudiantes(): void {
        console.log("Lista de Estudiantes:");
        this.estudiantes.forEach(estudiante => estudiante.infoEstudiante());
      }

}
 
  // Ejemplo de uso
  const registro = new RegistroEstudiantes();
  export const estudiante1 = new Estudiante("Ana", 20, "Matemáticas");
  const estudiante2 = new Estudiante("Luis", 22, "Física");
  
  registro.agregarEstudiante(estudiante1);
  registro.agregarEstudiante(estudiante2);
  registro.mostrarEstudiantes();