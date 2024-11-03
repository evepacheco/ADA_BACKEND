
function obtenerDatos(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
             resolve("Datos recibidos con exito")   
            }else{
                reject("No se recibieron datos")
            }
        }, 2000)
    })
}

async function consultarDatos() {
    try {
        console.log("Iniciando la consulta de datos...");
       //Pausa 
        const resultado = await obtenerDatos(false)// sino le pasas nada sale false, sino true pars que sea exito ejemplo
        console.log(resultado);
        } catch (error) {
        console.log("Ocurrio un error", error);
        
    }finally{
        console.log("Finalizada la consulta de datos");
        
    }
}

consultarDatos();