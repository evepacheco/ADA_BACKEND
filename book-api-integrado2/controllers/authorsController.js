// Importar los módulos necesarios para trabajar con archivos
const authorsModel = require('../models/authorsModel');
const responseView = require('../views/responseView');

// Función para listar autores
const getAuthors = () => {
    const authors = authorsModel.readAuthors();
    return responseView.formatResponse(authors);
}

// Función para añadir un nuevo autor
const addAuthor = (newAuthor) => {
    const authors = authorsModel.readAuthors();
    authors.push(newAuthor);
    authorsModel.writeAuthors(authors);
    return responseView.formatResponse({ message: 'Autor añadido exitosamente' });
}

// Función para buscar autores de acuerdo al criterio y valor solicitados al cliente
const findAuthor = (criterio, valor) => {
    const authors = authorsModel.readAuthors();
    const autor = authors.filter(author => author[criterio].toLowerCase() === valor.toLowerCase());
    if (autor.length === 0 ) {
        return responseView.formatResponse({ message: 'Autor no encontrado' });
    } else {
        return responseView.formatResponse(autor);
    }
}

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = { getAuthors, addAuthor, findAuthor };