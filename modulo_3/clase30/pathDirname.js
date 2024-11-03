
const path = require('path');

// Ejemplo 1: Obtener el directorio contenedor de un archivo desde una ruta ABSOLUTA

const filePath = '/home/user/docs/file.txt';
const dirName1 = path.dirname(filePath);
console.log('Ejemplo 1- Directorio contenedor de file.txt: ', dirName1);
