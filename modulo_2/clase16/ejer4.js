/* •	Ejercicio 4: forEach “Lista de supermercado”
Para este ejercicio, contamos con un array llamado listaDeSuperMercado que contiene una lista de ítems para comprar.
Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.
Ademas, debemos realizar las siguientes operaciones:*/


let listaDeSuperMercado=[
'Bife de chorizo',
'Coca Cola',
'Bananas',
'Lechuga',
'Chimichurri',
'Lata de tomates',
'Arvejas',
'Cereales',
'Pechuga de pollo',
'Leche'
]

listaDeSuperMercado.forEach(function(elem){
    console.log(elem)
    
});

//1)Agrega el artículo 'Papas' al final de la lista utilizando el método push.
let agregarUltim= listaDeSuperMercado.push(`Papas`);
console.log(`Punto 1: `,agregarUltim);
//console.log(listaDeSuperMercado);


//2)*Elimina el primer artículo de la lista utilizando el método shift.

let elimiPrime= listaDeSuperMercado.shift()
console.log(`Punto 2 : `,elimiPrime);
//console.log(listaDeSuperMercado);

//3)/*Utiliza el método forEach para recorrer el arreglo listaDeSuperMercado y mostrar cada ítem por consola.

listaDeSuperMercado.forEach(function(elem){
console.log(elem);
})

//4)Busca la posición del artículo 'Cereales' utilizando el método lastIndexOf y
// muestra su posición en la lista (considerando que los índices comienzan desde 1 en la lista mostrada al usuario),
// o indica que no se encontró si no está presente.

