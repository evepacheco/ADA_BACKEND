const net = require('net');
const readline = require('readline');
const PORT = 10000;
const HOST = '127.0.0.1';

//CREAR INTERFAZ DE ENTRADA PARA EL CLIENTE
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// crear el client
const client = new net.socket();

// conectar con el servidor

client.connect(PORT,HOST, () => {
    console.log('Conectando al servidor /n');
    promptUser();
    
})
// maaneja r daos 
client.on('data', (data) => {
    console.log(`Respuesta del servidor: ${data.toString().trim()}/n`);
    promptUser();
    
})




//manjear eventos
client.on('close', () => {
    console.log( 'conexion cerrada');
    rl.close();
    
})


//fx para solicitar input del usuario


