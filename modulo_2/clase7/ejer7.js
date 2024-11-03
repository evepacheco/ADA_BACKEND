/* Ejercicio 7 - Intercambio de Valores: Declara dos variables con 
valores iniciales y luego intercambia sus valores. Muestra los valores 
antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una 
variable temporal, aritmética o asignación simultanea), eres libre de 
elegir el que desees, eso si, investiga sobre el que usaras.
 */

let valorInicial1=100;
let valorInicial2=50;
console.log(`Valores iniciales `+ valorInicial1,valorInicial2);
let temporal= valorInicial1
valorInicial1=valorInicial2;
valorInicial2=temporal
console.log(`Valores intercambiados `+ valorInicial1,valorInicial2);
