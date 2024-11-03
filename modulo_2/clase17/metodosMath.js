// math.abs(x)  Valor absoluto- disancia entre 0 y el numero en la recta numerica

let num = -42
console.log(Math.abs(num)); //42

// Math.sqrt(x): raiz cuadrada

let num2 = -25
console.log(Math.sqrt(num2));//Nan numero negativos no lo toma

let num3= 25
console.log(Math.sqrt(num3));//5


//Matth.round(x) : redondeo

let num4= 4.3

console.log(Math.round(num4));// 4

//Math.floor(x): redndeo paa abajo

let num5= 4.3

console.log(Math.floor(num5));//4


//Math.ceil: redondea para arriba

let num6= 4.3

console.log(Math.ceil(num6));//5

//Math.max(a,b,...,r) : el max

let num7= (8,5,9,7,4,5,6,4); 

//console.log(Math.max(num7));
console.log(Math.min(num7));

//Math.random : enre 0 y 1 
let alearotorio = Math.random();
console.log(alearotorio);
