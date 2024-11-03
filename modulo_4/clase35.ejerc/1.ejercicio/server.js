const net =require('net');
const {v4: uuidv4 }=require('uuid')

// Crear el servidor TCP
const server = net.createServer();

// Manejar conexión con los clientes
server.on('connection', (socket) => {
    console.log("New client connected: " + socket.remoteAddress + ":" +socket.remotePort);

    // Manejar datos recibidos de los clientes
    socket.on('data', (data) => {
        const command = data.toString().trim();
   } 

)}
)
// Manejar desconexión de clientes
socket.on('end', () => {
    console.log('Client disconnected' + socket.remoteAddress + ":" +socket.remotePort); 
});

// Manejar error en el socket
socket.on('error', (err) => {
    console.error('Socket error:', err.message);
});


// Iniciar el servidor
server.listen(8080, () => {
console.log('TCP Server listening on port 8080');
});
