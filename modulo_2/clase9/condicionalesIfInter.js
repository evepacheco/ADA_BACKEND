//If internario: Es una linea de còdigo resumido para hacer evaluciones, siempre tiene que tenr una segunda expresion , sino se pone un string vacio sino que
//queremos que haga nada

let resultado = 4 > 10 ? 'El 4 es mas grande' : 'El 10 es mas grande'
console.log(resultado);// 'El 10 es mas grande'


//Switch: sintaxis mas legible para los casos que queremos evaluar muchas posibilidades con 
//el mismo valor. Se pueden agrupar los casos y lo ue se puede ejecutar, con en break para que no ejecute el proximo codigo.
//DEFAULT:Ningun caso sea verdadero , ue debe ejecutar. Se pone al final del codigo.

let fruta = /*'manzana';*/ 'uva'
switch (fruta) {
    case 'pera':
        console.log("Que rica pera");
        break;
    case 'banana':
        console.log("Que rica banana");
        break;
    case 'manzana':
        console.log("Que rica manzana");
        break;
    default:
        console.log(" Que fruta es?");
}

//For: ciclo que inica con un contador, luego la condicion que le pasamo es t o f
//para seguir o detener el ciclo. Y por ultimo el modidficador que puede aumentar o disminuir

//for (vuelta = 1; vuelta <= 5; vuelta++) {
  //  console.log('Dando vuelta numero ' + vuelta);
//}

//While: Reevalúa la condcion varias veces y ejecuta su bloque de codigo hasta que deje der true la cndicion

//let vuelta=1;// declara siempre en contador
//while (vuelta<=5) {//condicion
  //  console.log('Dando vuelta numero ' + vuelta);
    //vuelta++//Siempre generarlo sino entramos en un loop infinito
//}

//Do while: msma funcionalidad que el while con la diferencia que sin importar la cond,
//se ejecuta aunque sea una sola vez. La condicion se verifica al final.

let vuelta=1;
do {console.log('Dando la vuelta numero '+vuelta);
    vuelta++;
} while (vuelta<=5);

