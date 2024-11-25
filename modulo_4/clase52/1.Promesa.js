//Creamos una promesa



const miPromesa= new Promise((resolve, reject) => {
    console.log(`Estado: Pendiente. La operecion ha comenzado...`);
    

    //simulamos una operacion asicronica
    setTimeout(() => {
        const exito =Math.random() > 0.5
        //generamos un varlor boleano aleatorio, true es exito false es falso
        if (exito) {
            resolve ("oPERACION COMPLETADA CON EXITO")
        }else{
            reject("ERROR: NO SE PUDO COMPLETAR LA OPERACION")
        }
    }, 2000)
})

//MANEJO DE LA PROMESA 
miPromesa 
//ESTE BLOQUE SE EJEVUTA SI LA PROMESA se resuleve con exito
.then((resultado) => {
    console.log(`Exito:`, resultado);
    
})
//si la promesa es rechazada
.catch((error)=> {
    console.log(`Error`,error);
    
})

.finally(()=> {
    console.log('Finalizado');
    
}
)