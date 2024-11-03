// Importar los módulos necesarios para trabajar con archivos
const booksModel = require('../models/booksModel');
const responseView = require('../views/responseView');

// Función para listar libros
const getBooks = () => {
    const books = booksModel.readBooks();
    return responseView.formatResponse(books);
}

// Función para añadir un nuevo libro
const addBook = (newBook) => {
    const books = booksModel.readBooks();
    books.push(newBook);
    booksModel.writeBooks(books);
    return responseView.formatResponse({ message: 'Libro añadido exitosamente' });
}

// Función para buscar un libro de acuerdo al criterio y valor solicitados al cliente
const findBook = (criterio, valor) => {
    const books = booksModel.readBooks();
    const libro = books.filter(book => book[criterio].toLowerCase() === valor.toLowerCase());
    if (libro.length === 0 ) {
        return responseView.formatResponse({ message: 'Libro no encontrado' });
    } else {
        return responseView.formatResponse(libro);
    }
}

// Función para eliminar un libro
const deleteBook = (id) => {
    const books = booksModel.readBooks();
    const libro = books.find(book => book.id === id);
    const index = books.indexOf(libro);
    if (index == -1) {
        return responseView.formatResponse({ message: 'Libro no encontrado' });
    } else {
        books.splice(index, 1);
        booksModel.writeBooks(books);
        return responseView.formatResponse({ message: 'Libro eliminado exitosamente' });
    }
}

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = { getBooks, addBook, findBook, deleteBook };

