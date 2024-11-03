//Ejercicio 1: Sistema de Gestión de Empleados Desarrolla un sistema para gestionar empleados en una empresa. Cada empleado tendrá un nombre, un cargo, un salario y una lista de habilidades. Usa una clase Empleado que contenga estos atributos, y un array que gestione a varios empleados. Requerimientos: • Implementa métodos en la clase Empleado para agregar nuevas habilidades y para obtener el salario anual. • Crea una función que reciba un array de empleados y muestre la información de aquellos que tengan un salario mayor a $50,000. • Modulariza el código en al menos dos módulos: uno que defina la clase Empleado y otro para la lógica principal. Pistas: • El salario anual es simplemente el salario mensual multiplicado por 12. • Las habilidades se pueden almacenar como un array de strings dentro del empleado.



//
export class Empleado {
    nombre: string;
    cargo: string;
    salarioMensual: number;

    habilidades: string[];
// nose pasa habilidades, se pasa abajo porque es depende de cada empleado, se inicializa abajo.
    constructor(nombre: string, cargo: string, salarioMensual:number ) {
        this.nombre =nombre;
        this.cargo = cargo;
        this.salarioMensual=salarioMensual;
        this.habilidades=[];//Inicizlizacion habilidades de un array vacio

    }
agregarHabilidad(habilidad:string) :void {
    this.habilidades.push(habilidad)// agrega la habilidad

}
obtenerSalarioAnual():number{
    return this.salarioMensual * 12;
}

mostrarInformacion(): void {
console.log(`Empleado${this.nombre}, cargo:${this.cargo}, salario anual: ${this.obtenerSalarioAnual()}`);
console.log(`Habilidades:${this.habilidades.join(", ")}`);

}

}