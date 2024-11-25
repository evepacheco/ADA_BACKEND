//Simulacionde una opera no-bloqueante utilizando un callback
function operacionNoBloqueante(callback) {
    setTimeout(() => {
        callback(42); // Simula respuesta de 3 segundos
    }, 3000)
}

console.log("Iniciando operacion no-bloquente...");
operacionNoBloqueante((resultado) => {
    console.log("Resultado: ", resultado);
})