function prepsraCafe(): void {
    console.log(`PREPARANDO CAFE`);
    for (let index = 0; index < 3; index++) {
        console.log("CAFE LISTO");
    }
}

function atenderCliet():void {
    console.log(`tomando pedido del cliente...`);
    prepsraCafe();
    console.log("entregando cafe al cliente");
    
}

atenderCliet()
atenderCliet()