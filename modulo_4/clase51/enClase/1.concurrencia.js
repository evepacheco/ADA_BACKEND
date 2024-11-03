

//simulacionde concurrencia
function tareaConcurrencia(tarea,tiempo){
    setTimeout(() => {
        console.log(`tarea:${tarea} completada en ${tiempo}ms`);
        
    }, tiempo)
}

//ejecu
function ejecutarTarea(){
    tareaConcurrencia("tarea 1 ", 1000)
    tareaConcurrencia("tarea 2 ", 500)
    tareaConcurrencia("tarea 3 ", 1500)
}
ejecutarTarea()