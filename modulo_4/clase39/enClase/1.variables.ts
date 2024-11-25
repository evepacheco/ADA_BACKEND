

//Ejemplo de var:alcance y hosting
function exampleVar() {
    //  @ts-ignore
    console.log(variableVar);//indefenico por elevacion
    var variableVar = "SOY UNA VARIABLE VAR";
    console.log(variableVar);//soy una variable var
}
exampleVar();

//ejemplo de let: alcance de bloqe y sin hosting

function exampleLet() {
    //  console.log(variableLet);//ERRO: NO SE PUEDE ACCEDER ANTES DE LA INICIALIZACION
    let variableLet = "SOY UNA VARIABLE LET";
    console.log(variableLet);

}
exampleLet()

//Ejemplo de const: valor constante y alcance de bloque

function exampleConst() {
    const variableConst = "SOY UNA VARIABLE CONSTANTE";
    console.log(variableConst);

    // variableConst = "Otro valor"//error:asignacion a variable constante
}
exampleConst();

// Con @ts-ignore, TypeScript ignorará ese error en particular y te permitirá demostrar
// el concepto de hoisting. Este tipo de anotaciones son útiles cuando quieres mostrar
// un comportamiento específico de JavaScript en TypeScript, que normalmente lo bloquearía
// para proteger el código.

