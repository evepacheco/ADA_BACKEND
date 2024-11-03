//Simulacion de operacion bloqueante
//Lfx simula una tarea qe toma tiempo en este caso 3 segundo.Durante ese tiempo
//, el hilo principal se encuentra que no puiede realizar otra tarea ni responder a eventos
//Esto resulta en una exper de usuario poco fluida ya ue cualquier
//otra opera se detiene hasta que se complete la func

function operacionBloueante() {
    const inicio= Date.now()
    while(Date.now()- inicio<3000){

    }
    return 42;

}
console.log(`RESULTADO: `,operacionBloueante());

//ESPERA DE 3 SEGUNDO ANTES DE MOSTRAR EL RESULTAOD

