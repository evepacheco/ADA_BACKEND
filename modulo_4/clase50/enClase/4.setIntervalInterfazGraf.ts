//actualizacion de un interfaz grafica

function actualizarReloj(){
    const ahora = new Date()
    const horas =ahora.getHours()
    const minutos = ahora.getMinutes()
    const segundos = ahora.getSeconds()
    console.log(`${horas}: ${minutos}: ${segundos}`);
    
}

// intervalo que llama cada 1000segundo 
let relojIntervalo = setInterval(actualizarReloj, 1000);
