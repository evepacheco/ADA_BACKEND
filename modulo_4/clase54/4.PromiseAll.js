
function procesoA() {
    return new Promise((resolve) => setTimeout(() => resolve("PROCESO A COMPLETADO"),2000))
}

function procesoB() {
    return new Promise((resolve) => setTimeout(() => resolve("PROCESO B COMPLETADO"),2000))
}

function procesoC() {
    return new Promise((resolve) => setTimeout(() => resolve("PROCESO C COMPLETADO"),2000))
}


async function ejecutarProcesos() {
    try {
        console.log("Iniciamos los procesos en paralelo...");
        const resultados = await Promise.all([procesoA(), procesoB(), procesoC()]);
        console.log("Resultados: ", resultados);
        console.log("Todos los procesos completados");
    
    } catch (error) {
        console.log("Error en uno de los procesos: ", error);
        
    }
}

ejecutarProcesos();