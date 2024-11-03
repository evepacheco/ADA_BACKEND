// Función para enviar la respuesta al cliente en formato JSON
const formatResponse = (data) => {
    return JSON.stringify(data, null, 2);
}

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = { formatResponse };