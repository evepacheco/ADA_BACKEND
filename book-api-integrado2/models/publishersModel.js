// Importar los módulos necesarios para trabajar con archivos
const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON donde están almacenados las editoriales
const publishersPath = path.join(__dirname, '../data/publishers.json');

// Función para leer el archivo publishers.json
const readPublishers = () => {
    const data = fs.readFileSync(publishersPath, 'utf-8');
    return JSON.parse(data);
}

// Función para escribir el archivo publishers.json
const writePublishers = (publishers) => {
    const jsonData = JSON.stringify(publishers, null, 2);
    fs.writeFileSync(publishersPath, jsonData);
} 

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = { readPublishers, writePublishers };