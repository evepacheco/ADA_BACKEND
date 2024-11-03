import { Empleado} from "./empleado";

//Array de empleados// le pasamo el nombre de la clase
const empleados:Empleado[]=[
new Empleado("Sofi","Back End", 5000),
new Empleado("Pau", "Front End", 4000),
new Empleado("Kaira","Phyton",2000 ),

];

//  Agregamos habilidades

empleados[0].agregarHabilidad("Javascript");
empleados[0].agregarHabilidad("NodeJs");

empleados[1].agregarHabilidad("Javascript");
empleados[1].agregarHabilidad("React");

empleados[2].agregarHabilidad("Github");
empleados[2].agregarHabilidad("Pruebas Unitarias");


function mostrarEmpleadosSalarioAlto(empleados: Empleado[]): void{
    //recorre array de empleados
    empleados.forEach(empleado => {
        if (empleado.obtenerSalarioAnual() > 50000) {
            empleado.mostrarInformacion(); // llamamos a mostrar info
        }
    })
}
mostrarEmpleadosSalarioAlto(empleados)