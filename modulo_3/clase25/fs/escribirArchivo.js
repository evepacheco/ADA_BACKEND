var fs = require('fs');

datos = "ESCRIBE EN EL ARCHIVO, SI FUNCIONA";

fs.writeFile('archivo.txt', datos, function(err){
    if (!err) {
        console.log('LOS DATOS HAN SIDO ESCRITOS EN EL ARCHIVO.TXT');
        }else{
         throw err;// se encarga throw si sale un error 
        }
});