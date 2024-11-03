// Importar los módulos necesarios para trabajar con archivos
const publishersModel = require('../models/publishersModel');
const responseView = require('../views/responseView');

// Función para listar editores
const getPublishers = () => {
    const publishers = publishersModel.readPublishers();
    return responseView.formatResponse(publishers);
}

// Función para añadir un nuevo editor
const addPublisher = (newPublisher) => {
    const publishers = publishersModel.readPublishers();
    publishers.push(newPublisher);
    publishersModel.writePublishers(publishers);
    return responseView.formatResponse({ message: 'Editorial añadida exitosamente' });
}

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = { getPublishers, addPublisher };