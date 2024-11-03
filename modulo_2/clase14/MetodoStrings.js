// Metodo de Strings
let mensaje = `Gran dia para practicar Javascript?`

//lenght: contabiliza la cantidad de caracteres

console.log(mensaje.length);//35

// IndexOf: me dice la posicion especifica 

console.log(mensaje.indexOf(`dia`));//5
console.log(mensaje.indexOf(`noche`));//-1

// slice: para hacer un recorte

console.log(mensaje.slice(0, 24));//

//trim
let mensaje2 = `   gran dia para practicar Javascript`

console.log(mensaje2.trim());

