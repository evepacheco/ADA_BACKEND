const net = require('net'); //Importacion del modulo net
const server = net.createServer();// crea un servidor TCP;

server.on('connection', (socket) => {// evento connection cuando un cliente se  conecta al servidor
    socket.on('data', (data) => {
      //MUESTRA EN CONSOLA LA DIRECCION Y PUERTO DEL CLIENTE JUNTO CON LOS DATOS RECIBIOS
        console.log('/n El cliente '+ socket.remoteAddress + ':' + socket.remotePort + 'dice : '+ data);
       // ENVIA UNA RESPUESTA AL CLIENTE CONFIRMADO LA RECEPCION DE LOS DATOS
        socket.write('Recibido');
    })

    //MANEJO EL EVENTO CLOSE , QUE SE EMITE CUANOD LA CONEXION CON EL CLIENTE SE CIERRA
  socket.on('close', () => {
    // Muestra un mesnj en la consola indicando que la comunicacion con el cliente ha termanida
    console.log('Comunicación finalizada');
    
  })
// manejo del evento error , que se emite cuando ocurre un error en la conexion con el cliente


socket.on('error', (err) => {
  //muestra el mensaje de error en la consola
    console.log(err.message);
    
})

})
// indica el servidor en el puerto 4000;
server.listen(4000, ()=> {
  //muestra en consola el mesnj indicando que el servidor 
  //esta escuchando en el puerto especifico
  console.log('Servidor esta escuchando en ele puerto',
  server.address().port)
    
});