var fs = require('fs');//importa modulo fs

fs.readFile('archivo.txt','utf-8',function (err,data) {// data es el cntenido del archivo
    if (!err) {
        console.log(data);
        
    }else{
        throw err;//excepcion ue aneja javascript por si sale ese error, corta ejecucion
    }
})