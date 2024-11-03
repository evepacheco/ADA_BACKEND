// Importar los módulos necesarios para trabajar con archivos
const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON donde están almacenados los autores
const authorsPath = path.join(__dirname, '../data/authors.json');

// Función para leer el archivo authors.json
const readAuthors = () => {
    const data = fs.readFileSync(authorsPath, 'utf-8');
    return JSON.parse(data);
}

// Función para escribir el archivo authors.json
const writeAuthors = (authors) => {
    const jsonData = JSON.stringify(authors, null, 2);
    fs.writeFileSync(authorsPath, jsonData);
} 

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = { readAuthors, writeAuthors };