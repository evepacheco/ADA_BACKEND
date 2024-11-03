
const net = require('net');
const readline = require('readline');

const PORT = 10000;

//CREAR SERVidor 
const server = net.createServer((socket) => {
    console.log(('CLIENTE CONECTADO/n'));

});

// enviar un men inicial a cliente

socket.write('Bienvenidp al servidor TPC. ENVIA')


//Manejar datos recibisdos del cliete

socket.on('data', (data) => {
    const message = data.toString().trim()
    console.log();

})


//Mnajear cierre de la conexion


socket.on('end', () => {
    console.log('Cliente desconectado/n');

});

//manejamos errores 
socket.on('error', (err) => {
    console.log(`ERROR en el sockett: ${err}/n`);

});

// errores del servidor
server.on('error', (err) => {
    console.log(`Error en el servidor: ${err}/n`);

})

//iniciar el servidor
server.listen(PORT, () => {
    console.log(`sERVIDRO ESCUCHANDO EN EL PUERTO ${PORT}/N`);

})

//FX PARA ENVIAR MENSAJE DESDE EL SERVIDOR
function sendMessageFromServer(socket) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    });
    rl.setPrompt('Mensaje para el cliente: ')
    rl.prompt();

    rl.on('line', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Servidor cerrado./n');
            rl.close();
            socket.end();
        } else {
            socket.write(input + '/n');
            rl.prompt();
        }
    })
}