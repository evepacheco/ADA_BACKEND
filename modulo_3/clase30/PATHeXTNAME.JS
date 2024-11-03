const path =require('path');

// Ejemplo 1 : Obtener  la extension de un archivo de una ruta ABSOLUTA

const filePath = '/home/user/docs/file.txt';

const extExample1 = path.extname(filePath);

console.log("Ejemplo 1: Extension del archivo: ", extExample1);//.txt


//Ejemplo 2: Mnaejo de archivos sin extension

const noExtPath = '/home/user/dosc/README';
const extName2 = path.extname(noExtPath)//vacio
console.log('Ejemplo 2 - Extension del archivo sin extension: ', extName2);

//Ejemplo 3: Rutas con multiples puntos en el nom,bre del archivo
const multPath = 'images/photo.large.jps';
const extName3 =path.extname(multPath);

console.log(extName3);

