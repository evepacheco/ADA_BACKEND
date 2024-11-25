/* Ejercicio 10: Uso de enum para niveles de acceso 
1. Declara un enum llamado NivelesDeAcceso con los valores: Admin, 
Usuario, Invitado.
2. Crea una función que reciba un nivel de acceso y devuelva un mensaje 
indicando el tipo de permisos disponibles para ese nivel.
3. Usa el enum para llamar a la función con el nivel Usuario y muestra el 
resultado por consola.*/

enum NivelesDeAcceso {
    Admin,
    Usuario,
    Invitado
}

function permisos(nivel: NivelesDeAcceso): string {
    switch (nivel) {
        case NivelesDeAcceso.Admin:
            return "`TODOS LOS PERMISOS DISPONIBLES`";
        case NivelesDeAcceso.Usuario:
            return `PERMISOS LIMITADOS`;
        case NivelesDeAcceso.Invitado:
            return `SOLO ALGUNOS PERMISOS DISPONIBLES, REGISTARTE PARA ACCEDER`;
        default:
            return `Sin acceso`
    }
}

console.log(permisos(NivelesDeAcceso.Admin));
