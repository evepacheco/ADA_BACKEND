

const net = require('net');
const readline = require('readline-sync');

//Define las opciones de conexion para el cliente TCO: puerto 4000 y direcc IP localhost
const options ={
    port: 4000,
    host: '127.0.0.1'
}

//Crea una conexion TCP con el servidor utilizando las opciones definidas

const client = net.createConnection(options);

//Maneja el evento'connect' que se emoite cuando el cliente se conecta exitosamente al servidor

client.on('connect', () => {
console.log('Conexion satisfactoria!!!');// muestra un mesnj indicando que la conexion se ha establecido
sendLine();//Llama a la funcion sendLine()para que el usuario pueda ingresar un mensj
});

//Maneja ele neto 'data', que se emite cuando el cliente recibe datos del servidor
client.on('data', (data)=>{
    console.log('El servidor dice:'+ data);//Muestra los datos recibidos del servidor en la consola
    sendLine();//Llama a la funcion sendLine()para que el usuario pueda ingresar otor menjs
    
});


// Manjea el evento 'error', que se emite cuanod ocurre un erro em la conexion
client.on('error',(err)=>{
    console.log(err.message);// muestra el m nsj error en la consola
});

//DFEfine la funcion sendLine() que permite al usuario ingresar un mesnj y decide que hacer con el
function sendLine() {
    var line =readline.question('/ndigite alguna cosa/t');// Muestra un promp y lee la entrada del usuario de manera sincronica
    if (line =="0"){//verifica si el usuario ingresa "0"
client.end();// cierra la conexion con el servidor si el usuario ingreso "0"
    }else{
        client.write(line);//envia el mensj ingresando por el usuario al servidor si no es "0"
    }
}
