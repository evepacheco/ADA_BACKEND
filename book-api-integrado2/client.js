const net = require('net');
const readlineSync = require('readline-sync');

// Crear la conexión TCP al servidor
const client = new net.Socket();

// Configuración de conexión
client.connect({ port: 8080, host: 'localhost' });

// Manejar la conexión exitosa al servidor
client.on('connect', () => {
    console.log('Client: connection established with server');
    console.log('\nWELCOME TO ADA LIBRARY');
    menuPrincipal();
});

// Manejar datos recibidos del servidor
client.on('data', (data) => {
    console.log('\nData from server:\t' + data);
    continuar();
});

// Manejar la desconexión del servidor (cuando el socket de cierra)
client.on('close', () => {
    console.log('Client: connection with server closed');
    
})

// Manejar la desconexión del cliente
client.on('end', () => {
    console.log('Disconnected from server');
});

// Manejar errores de conexión
client.on('error', (err) =>{
    console.log('Error:', err.message);
});

// Función para manejar la entrada del usuario
function menuPrincipal() {
    console.log('----- MENU PRINCIPAL -----');
    const options = ['BOOKS', 'AUTHORS', 'PUBLISHERS'];
    const indexOptions = readlineSync.keyInSelect(options, `Seleccione el criterio para operar:`);

    switch (indexOptions) {
        case -1:
            continuar();
            break;
        case 0: // BOOKS
            const optionsBooks = ['GET BOOKS', 'ADD BOOK', 'FIND BOOK', 'DELETE BOOK'];
            const indexOptionsBooks = readlineSync.keyInSelect(optionsBooks, `Seleccione una opcion:`);
            switch (indexOptionsBooks) {
                case -1: 
                    menuPrincipal();
                    break;
                case 0: // GET BOOKS
                    client.write('GET BOOKS');
                    break;
                case 1: // ADD BOOK
                    console.log(`\nIngrese los datos del libro que desea agregar`);
                    const title = readlineSync.question('Titulo: ');
                    const author = readlineSync.question('Autor: ');
                    const year = readlineSync.question('Anio de publicacion: ');
                    client.write(`ADD BOOK {"title": "${title}", "author": "${author}", "year": "${year}"}`);
                    break;
                case 2: // FIND BOOK
                    const options = ['ID', 'TITULO', 'AUTOR', 'ANIO PUBLICACION'];
                    const indexOptions = readlineSync.keyInSelect(options, `Seleccione el criterio por el que desea buscar:`);
                    switch (indexOptions) {
                        case -1:
                            menuPrincipal();
                            break;
                        case 0:
                            const id = readlineSync.question('id: ');
                            client.write(`FIND BOOK {"criterio": "id", "valor": "${id}"}`);
                            break;
                        case 1: 
                            const title = readlineSync.question('Titulo: ');
                            client.write(`FIND BOOK {"criterio": "title", "valor": "${title}"}`);
                            break;
                        case 2:
                            const author = readlineSync.question('Autor: ');
                            client.write(`FIND BOOK {"criterio": "author", "valor": "${author}"}`);
                            break;
                        case 3:
                            const year = readlineSync.questionInt('Anio de publicacion: ');
                            client.write(`FIND BOOK {"criterio": "year", "valor": "${year}"}`);
                            break;
                    }
                    break;
                case 3: // DELETE BOOK
                    console.log(`\nIngrese los datos del libro que desea eliminar`);
                    const id = readlineSync.question('ID: ');
                    client.write(`DELETE BOOK {"id": "${id}"}`);
                    break;
            } 
            break;
        case 1: // AUTHORS
            const optionsAuthors = ['GET AUTHORS', 'ADD AUTHOR', 'FIND AUTHOR'];
            const indexOptionsAuthors = readlineSync.keyInSelect(optionsAuthors, `Seleccione una opcion:`);
            switch (indexOptionsAuthors) {
                case -1: 
                    menuPrincipal();
                    break;
                case 0: // GET AUTHORS
                    client.write('GET AUTHORS');
                    break;
                case 1: // ADD AUTHOR
                    console.log(`\nIngrese los datos del autor que desea agregar`);
                    const name = readlineSync.question('Nombre: ');
                    const born = readlineSync.questionInt('Anio de nacimiento: ');
                    const nationality = readlineSync.question('Nacionalidad: ');
                    const genre = readlineSync.question('Generos (Ej: ["short story", "poetry", "novel"]): ', {defaultInput: '[]'});
                    client.write(`ADD AUTHOR {"name": "${name}", "born": ${born}, "nationality": "${nationality}", "genre": ${genre}}`);
                    break;
                case 2: // FIND AUTHOR
                    const options = ['NOMBRE', 'NACIONALIDAD'];
                    const indexOptions = readlineSync.keyInSelect(options, `Seleccione el criterio por el que desea buscar:`);
                    switch (indexOptions) {
                        case -1:
                            menuPrincipal();
                            break;
                        case 0:
                            const name = readlineSync.question('Nombre: ');
                            client.write(`FIND AUTHOR {"criterio": "name", "valor": "${name}"}`);
                            break;
                        case 1: 
                            const nationality = readlineSync.question('Nacionalidad: ');
                            client.write(`FIND AUTHOR {"criterio": "nationality", "valor": "${nationality}"}`);
                            break;
                    }
                    break;
            } 
            break;
        case 2: // PUBLISHERS
            const optionsPublishers = ['GET PUBLISHERS', 'ADD PUBLISHER'];
            const indexOptionsPublishers = readlineSync.keyInSelect(optionsPublishers, `Seleccione una opcion:`);
            switch (indexOptionsPublishers) {
                case -1: 
                    menuPrincipal();
                    break;
                case 0: // GET PUBLISHERS
                    client.write('GET PUBLISHERS');
                    break;
                case 1: // ADD PUBLISHER
                    console.log(`\nIngrese los datos de la editorial que desea agregar`);
                    const name = readlineSync.question('Nombre: ');
                    const country = readlineSync.question('Pais: ');
                    const titles = readlineSync.questionInt('Cantidad de publicaciones: ');
                    client.write(`ADD PUBLISHER {"name": "${name}", "country": "${country}", "titles": ${titles}}`);
                    break;
            }
            break;
    }
    
}

// Función para manejar la entrada del usuario
function continuar() {
    const i = readlineSync.question('\nDesea realizar otra operacion? (si/no): ');
    if (i == 'si') {
        menuPrincipal();
    } else if (i == 'no') {
        console.log("\nSaliendo de la aplicacion");
        client.end();
        client.destroy();
    } else {
        console.log('Comando inválido');
        continuar();
    }
}


