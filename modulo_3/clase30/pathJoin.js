
const path = require('path');

// Ejemplo 1: uniendo segmentos de rutas simples

const example1= path.join('/user', 'local', 'bin' );
console.log("ejemplo 1 : Ruta combinada " , example1);

//ejemplo 2: eliminacion de barras rebundantes

const example2 = path.join('/user/', '/local', 'bin/');
console.log(` Ejemplo 2 - Ruta normalizada sin rutas`, example2);

//Ejemplo 3: Normalizando rutas con '..'(subir directorio)

const example3 = path.join('/user/', 'local','..' ,'bin');
console.log(`Ejemplo3- ruta normalizada con '..': `,example3);

// Ejemplo4: Construccion de una ruta relativa multiplataforma
const example4=


// Ejemplo 5 


