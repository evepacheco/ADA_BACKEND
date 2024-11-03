//2) Imprimir los números entre 5 y el 20, saltando de tres en tres

let numerosSiguientes = [];

function valor() {
    for(i = 5; i <=20 ; i+=3){// hace qque salte de 3 en 3
        numerosSiguientes.push(i);// que empieze por el indice este caso el 5
    }
    return numerosSiguientes
};

console.log(valor());