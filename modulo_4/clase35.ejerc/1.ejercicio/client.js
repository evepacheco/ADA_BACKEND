const net= require('net');
const readline = require('readline');

//configuracion conexion
const OPTIONS ={
    port: 720,
    hos: `127.0.0.1`
};

// Crear la
const rl= readline.createInterface({
    input: process.stdin,
    output: stdout
});

const UserName = process.argv[2].split('=')[1] || 'Unknow';

// Obtener elnombre del usuario desde los argumentos sino no se pone


// fx par maejar la entrada del usuario
const handleInput = () => {
    rl.question('Client -> ', (clientMsg) =>{
        clientTCP.write(clientMsg);
        handleInput();

    });
};

//Mnajear la conexion del cliente
clientTCP.on('connect', ()=> {
    console.log(`Conexion exitosa con el servidor`);
    handleInput();
})

//manejar la data
clientTCP.on('data', (serverData)=> {
    const serverData= serverData.toString();
    console.log(`Server -> `, serverData);
});

//manejar la desconexion al servidor

clientTCP.on(`end`, () => {
    console.log(`EL servidor ha cerrado la conexion`);
    rl.close();// cerrar la interfaz de rl
});

// manejar la conexion del cliente

clientTCP.on(`error`, (err)=>{
    console.log(`Error de conexio: `, err);
    rl.close();
});



