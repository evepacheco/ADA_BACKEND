//Metodos Array (Avanzados)

let notas = [10, 4, 5, 8, 9, 2, 7];

//1). MAP: Crea un nuevo array con los resultados de la fx aplicada a cada elementto


let notasHastaCien = notas.map(function (numeros) {
    return numeros*10;
})
//console.log(notasHastaCien);

//2). FILTER : Crea un nuevo array con los elementos ue pide la condicion.

let notasAprobados = notas.filter(function(numero) {
return numero >=7;

});
//console.log(notasAprobados);


//3) REDUCE: Reduce a un valor unico un array. Es el unico ue devuelve un unico valor. Function Acumuladora
let sumaNotas= notas.reduce(function(acum, numero){
    return acum+numero
})
//console.log(sumaNotas);

//4) FOREACHE: Iterar sobre un array( no retorna nada, solo lo recorre)

let arrayNotas = notas.forEach(function(valor, indice){
   // console.log("En la posiciòn: " + indice + " tengo el valor: ")+ valor;
});


//5). FIND : Encuentra el primer elemento pasado por callback, que cumpla la condicion 

let notasEncontrada = notas.find(function(numero){
return numero >= 8;
})
console.log("La primera nota encontrada mayor o igual a 8 es : "+ notasEncontrada);


