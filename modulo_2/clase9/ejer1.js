/*Ejercicio 1: Switch
El objetivo de este ejercicio es imprimir en consola un texto que irá 
variando según el día que contenga la variable dia. Para esto, ya 
presentamos un código hecho con if/else que tendremos que modificar 
y convertirlo a un switch, manteniendo el mismo resultado  */

let dia = 'jueves'
switch (dia) {
    case 'lunes':
        console.log("Hoy es lunes,empieza la semana con energia.");
        break;
    case 'martes':
        console.log("Hoy es martes,sigue adelante.");
        break;
    case 'miercoles':
        console.log("Hoy es miercoles,mitad de semana.");
        break;
    case 'jueves':
        console.log("Hoy es jueves, casi viernes.")
        break;
    case 'viernes':
        console.log("Hoy es viernes, el fin de semana esta cerca.")
        break;
    case 'sabado':
        console.log("Hoy es sabado, disfruta tu dia.")
        break;
    case 'domingo':
        console.log("Hoy es domingo, di de descanso")
        break;
    default:
        console.log("Dia no válido");
}