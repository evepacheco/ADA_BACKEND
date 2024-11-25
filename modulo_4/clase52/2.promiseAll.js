

const promese1 = Promise.resolve(3);
//creamos una promesa que se resuelve inmediantamente con el valor 3.

const promese2 = new Promise((resolve, reject) => {
    //creamos una promesa que se resuelve desp de 100ms
    setTimeout(resolve, 100, "Hola!");
    //Despues de los 100ms, la promesa se resuelve con valor "Hola!"
});

const promese3 = new Promise((resolve, reject) => {
    //creamos una promesa que se resuelve desp de 500ms
    setTimeout(resolve, 500, "Chicas");
    //Despues de los 500ms, la promesa se resuelve con valor "Chicas"
});

//Usamos promise.all para esperar que todas las promesas se resuelvan
Promise.all([promese1, promese2, promese3]) //devuelve un array
    .then((resultados) => {
    console.log("Resultados de todas las promesas: ", resultados);

})
.catch((error) => {
    console.log("Error", error);
    
})