

const promese1 =Promise.reject("Error en programa 1")
const promese2 = new Promise((resolve, reject) => {
    setTimeout(resolve,100,"hola")
})

const promese3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Chicas back")
})

Promise.allSettled([promese1,promese2, promese3])
.then((resultados)=> {
console.log("Primera promesa resuelta", resultados);
})