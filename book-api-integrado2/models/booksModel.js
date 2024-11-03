// Importar los módulos necesarios para trabajar con archivos
const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON donde están almacenados los libros
const booksPath = path.join(__dirname, '../data/books.json');

// Función para leer el archivo books.json
const readBooks = () => {
    const data = fs.readFileSync(booksPath, 'utf-8');
    return JSON.parse(data);
}

// Función para escribir el archivo books.json
const writeBooks = (books) => {
    const jsonData = JSON.stringify(books, null, 2);
    fs.writeFileSync(booksPath, jsonData);
} 

// Exportar las funciones para que puedan ser usadas en otros archivos
module.exports = { readBooks, writeBooks };

