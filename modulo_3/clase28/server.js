const net = require('net');
const readline = require('readline');
const path = require('path');

const PORT = 7200;
const HISTORY_FILE = path.join(__dirname, 'history.json');

//arrgelo para almacenar los cllientes conectados
let clients = [];

// creae el servidor

const server = net.createServer((socket) => {
    console.log('Cliente conectado: ', socket.remoteAddress);
    clients.push(socket);

    // manejar datos del cliente
    socket.on('data', (data) => {
        const messaje = data.toString().trim();
        console.log('Mensaje recibido: ', messaje);

    })
    if (messaje === '--history') {
        const history = loadHistory();
        socket.write(JSON.stringify(history, null, 2));
    } else if (messaje === '--eraseMessages') {
        saveHistory([{}])
        socket.write('HISTTTORIAL FUE BORRADO.')
    } else {
        clients.forEach(client => {
            if (client !== socket) {
                client.write(messaje)
            }
        });


        const timeStamp = getFormatteData();
        const UserName = process.argv[2]?.split('=')[1] || 'Unknow';

        const messajeObject = {
            messaje,
            sentby: UserName,
            date: timeStamp

        }
        const history = loadHistory();
        history.push(messajeObject);
        saveHistory(history)

    }
});

//manejar la desc del cliete
socket.on ('end', () => {
    console.log('cliente desconectado: ', socket.remoteAddress);
    clients.filter(client => client!==socket)
})