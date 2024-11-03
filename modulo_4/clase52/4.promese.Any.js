const promese1 =Promise.reject("Error en programa 1")
const promese2 = new Promise((resolve, reject) => {
    setTimeout(resolve,100,"Hola")
})

const promese3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 50, "Chicas back")
})

Promise.any([promese1,promese2, promese3])// depende del timepo se ejecuta la primera que resuelve. 
.then((resultados)=> {
console.log("Primera promesa resuelta: ", resultados);
})