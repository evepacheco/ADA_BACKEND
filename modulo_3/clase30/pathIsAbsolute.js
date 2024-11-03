
const path = require('path');

//Ejemplo 1 : Verificacion de una ruta absoluta
const path1 = '/home/user/docs/file.txt'
const isAbs = path.isAbsolute(path1);
console.log("ES UNA RUTA ABSOLUTA :", isAbs);
