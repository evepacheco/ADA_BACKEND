const readlineSync = require('readline-sync');
const deseacontinuar =readlineSync.keyInYN('Desear continuar?');
if (deseacontinuar) {
    console.log('continuando');
    
}else{
    console.log('Cancelado');
    
}