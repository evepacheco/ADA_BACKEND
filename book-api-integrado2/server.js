const net = require('net');
const { v4: uuidv4 } = require('uuid');
const booksController = require('./controllers/booksController');
const authorsController = require('./controllers/authorsController');
const publisherController = require('./controllers/publishersController');

// Crear el servidor TCP
const server = net.createServer();

// Manejar conexión con los clientes
server.on('connection', (socket) => {
    console.log("New client connected: " + socket.remoteAddress + ":" +socket.remotePort);

    // Manejar datos recibidos de los clientes
    socket.on('data', (data) => {
        const command = data.toString().trim();

        if (command === 'GET BOOKS') {
            const response = booksController.getBooks();
            socket.write(response);
        } else if (command.startsWith('ADD BOOK')) {
            const bookDataString = command.replace('ADD BOOK ', '');
            const bookData = JSON.parse(bookDataString);
            if (bookData.title === "" || bookData.author === "" || bookData.year==="") {
                socket.write('ERROR: No colocaste todos los datos requeridos');
            } else {
                const newBook = { id: uuidv4(), ...bookData };
                const response = booksController.addBook(newBook);
                socket.write(response);
            }
        } else if (command.startsWith('FIND BOOK')) {
            const bookDataString = command.replace('FIND BOOK ', '');
            const bookData = JSON.parse(bookDataString);
            if (bookData.criterio === "" || bookData.valor === "") {
                socket.write('ERROR: No colocaste todos los datos requeridos');
            } else {
                const criterio = bookData.criterio;
                let valor = bookData.valor;
                const response = booksController.findBook(criterio, valor);
                socket.write(response);
            }
        } else if (command.startsWith('DELETE BOOK')) {
            const bookDataString = command.replace('DELETE BOOK ', '');
            const bookData = JSON.parse(bookDataString);
            if (bookData.id === "" ) {
                socket.write('ERROR: No colocaste todos los datos requeridos');
            } else {
                const response = booksController.deleteBook(bookData.id);
                socket.write(response);
            }
        } else if (command === 'GET AUTHORS') {
            const response = authorsController.getAuthors();
            socket.write(response);
        } else if (command.startsWith('ADD AUTHOR')) {
            const authorDataString = command.replace('ADD AUTHOR ', '');
            const authorData = JSON.parse(authorDataString);
            if (authorData.name === "" || authorData.nationality === "" || authorData.genre.length === 0) {
                socket.write('ERROR: No colocaste todos los datos requeridos');
            } else {
                const newAuthor = { id: uuidv4(), ...authorData };
                const response = authorsController.addAuthor(newAuthor);
                socket.write(response);
            }
        } else if (command.startsWith('FIND AUTHOR')) {
            const authorDataString = command.replace('FIND AUTHOR ', '');
            const authorData = JSON.parse(authorDataString);
            if (authorData.criterio === "" || authorData.valor === "") {
                socket.write('ERROR: No colocaste todos los datos requeridos');
            } else {
                const criterio = authorData.criterio;
                const valor = authorData.valor;
                const response = authorsController.findAuthor(criterio, valor);
                socket.write(response);
            }
        } else if (command === 'GET PUBLISHERS') {
            const response = publisherController.getPublishers();
            socket.write(response);
        } else if (command.startsWith('ADD PUBLISHER')) {
            const publisherDataString = command.replace('ADD PUBLISHER ', '');
            const publisherData = JSON.parse(publisherDataString);
            if (publisherData.name === "" || publisherData.country === "") {
                socket.write('ERROR: No colocaste todos los datos requeridos');
            } else {
                const newPublisher = { id: uuidv4(), ...publisherData };
                const response = publisherController.addPublisher(newPublisher);
                socket.write(response);
            }
        }
    });

    // Manejar desconexión de clientes
    socket.on('end', () => {
        console.log('Client disconnected' + socket.remoteAddress + ":" +socket.remotePort); 
    });

    // Manejar error en el socket
    socket.on('error', (err) => {
        console.error('Socket error:', err.message);
    });
});

// Iniciar el servidor
server.listen(8080, () => {
    console.log('TCP Server listening on port 8080');
});
