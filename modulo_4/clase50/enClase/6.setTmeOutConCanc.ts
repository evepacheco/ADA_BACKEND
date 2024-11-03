// con cancelacion


let temporizador = setTimeout(()=> {
    console.log("este no se mostrarar ");
    
}, 2000)

clearTimeout(temporizador)//cancelamos el temporixador de los 2 segundos
