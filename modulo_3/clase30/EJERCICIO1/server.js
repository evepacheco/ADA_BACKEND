const net = require('net');
const path = require('path');

const server = net.createServer(() => {
    console.log('Cliente conectado');
});

server.on('connection', (socket) => { //Evento connection
    
    socket.on('data', (data) => { //Evento data
        console.log('Mensaje del cliente: ' +  data.toString());
        const ruta = data.toString();
        const pathIsAbsolute = path.isAbsolute(ruta);
        if (!pathIsAbsolute) {
            socket.write('La ruta ingresada es relativa.');
        } else {
            socket.write('La ruta ingresada es absoluta.')
        }
    });


    socket.on('close', () => { //Evento cerrar
        console.log('Cliente desconectado.');
    });

    socket.on('error', (err) => { //Evento error 
        console.log('Error: ', err.message);
    });
});

server.listen(8080, () => {
    console.log('El servidor está escuchando en el puerto 8080.');
});