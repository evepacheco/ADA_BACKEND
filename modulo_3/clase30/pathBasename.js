

const path= require('path');

// ejemplo1: Obtener el nombre del archivo desde una ruta absoluta

const fullPath = '/home/user/docs/file.txt'// ruta absoluta

const baseName1 = path.basename(fullPath);
console.log(`Ejemplo1 : Nombre del archivo: `, baseName1);

// Ejemplo2: obtener el nombre del archivo sin la extension
const baseName2 = path.basename(fullPath,'.txt');
console.log('Ejemplo 2: nombre del archivo sin extension', baseName2);



const relativePath = 'src/utils/helpers.js'// ruta relativa
// Ejemplo 3: uso con rutas relativas
const baseName3 = path.basename(relativePath); 
console.log("Ejemplo 3: Nombre del archivo desde una ruta relativa:", baseName3);

const dirPath = 'var/www/html/';
//Ejemplo 4  : para obtener el nombre de un directorio
const baseName4 = path.basename(dirPath)
console.log("Ejemplo 4: Nombre del directivo: ", baseName4);

//Ejemplo 5 : rutas con separadores de windows
