const http=require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
fs.readFile('datos.json', 'utf-8',(err, data)=>{
    if(err){
        res.end('NO SE PUDO LEER EL ARCHIVO JSON');
        return
    }
    res.setHeader('Content-type', 'aplication/json');
    res.end(data);
})

})
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://`);
    
})