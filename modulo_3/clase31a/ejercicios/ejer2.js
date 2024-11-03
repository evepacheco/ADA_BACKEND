/*Ejercicio 2: Menú Interactivo con readline-sync
Crea un script de Node.js que muestre un menú de opciones usando 
readline-sync. El menú debe permitir al usuario elegir entre tres 
acciones: ver un mensaje de bienvenida, generar un hash de un texto, o 
salir.  */

const readlineSync = require('readline-sync');
const opcions= ['ver un mensaje de bienvenida', 'generar un hash de un texto',`salir`]



const options = ['Ver un mensaje de bienvenida', 'Generar un hash de un texto', 'Salir'];
const indexOptions = readlineSync.keyInSelect(options, `Elija la opcion que desea:`);




switch (indexOptions) {
    case 0: 
        console.log(`Haz seleccionado: ${options[indexOptions]}`);
        console.log(`Bienvenida al sistema`);
        break;
    case 1: 
        console.log(`Haz seleccionado: ${options[indexOptions]}`);
        const data = readlineSync.question('Ingrese el mensaje que desee encriptar:');
        const hash = crypto.createHash('sha256');
        hash.update(data);
        const hashOutput = hash.digest('hex');
        console.log(`El texto encriptado es: ${hashOutput}`);
        break;
    case 2:
        console.log(`Haz seleccionado: ${options[indexOptions]}`);
        console.log(`Nos vemos pronto`);
        break;
    case -1:
        console.log('No seleccionaste ninguna opción');
        break;
    default:
        console.log('No seleccionaste ninguna opción');
};