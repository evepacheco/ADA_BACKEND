

//simulacion de una operacion CPU-BOUND
// realiza el calculo intensivo qu utiliza la CPU. La ejecucion de este codigo
//puee hacer el programa se congle hasta el que el calculo termine, ya que consume
//los recursos edl Cpu
function operacionCpuBound() {
    let resultado =0;
    for (let index = 0; index < 1_000_000_000; index++) {
     resultado+= index;
        
    }
    return resultado
}

//Simulacion de I/O BOUND
//simula una operacion de entrada y salida como la lectura de un archivo utilizando
//setTimeOut. Esta operacion no depende del CPU, de la misma manera que las operaciones
//cpu-bound, ya que delega la tarea al sistema operativo y puede realizar otras tareas mientras espera
//que la operacion de I/O se complete.
function operacionIO(){
    console.log(`Simulando lectura de un archivo...`);
    setTimeout(() => {
        console.log(`Archivo leido con exito`);
        
    }, 2000)
}

//Funcion que ejcuta ambas operac

function ejecutarOperaciones() {
    console.log(`Ejecunatando operacio CPU-BOUND...`);
    const resultadoCpu = operacionCpuBound()
    console.log(`Resultado de la operacion CPU/BOUND : ${resultadoCpu}`);
    
    console.log(`Ejecuntando operacion I/O...`);
    operacionIO()
}
ejecutarOperaciones()