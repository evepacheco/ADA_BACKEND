function tareaAsync1() {
    return new Promise((resolve) => setTimeout(() => resolve("TAREA 1 COMPLETADO"),2000))
}

function tareaAsync2() {
    return new Promise((resolve) => setTimeout(() => resolve("TAREA B COMPLETADO"),2000))
}

function tareaAsync3() {
    return new Promise((resolve) => setTimeout(() => resolve("TAREA C COMPLETADO"),2000))
}

async function ejecutarConcurrente() {
    try {
        const promesa1=tareaAsync1();
        const promesa2 =tareaAsync2();
        const promesa3 = tareaAsync3();

        const resultado = await Promise.all([promesa1, promesa2,promesa3]);
        console.log("Resultados: ", resultado);
        
    } catch (error) {
        console.log("ERROR EN ALGUN DE LOS PROCESOS DE LAS TAREAS");
        
    }
}

ejecutarConcurrente();