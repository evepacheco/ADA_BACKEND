/* Ejercicio 3: Uso de enum para días de la semana 
1. Declara un enum llamado DiasDeLaSemana con los valores: Lunes, Martes, 
Miercoles, Jueves, Viernes, Sabado, Domingo.
2. Crea una función que reciba un día de la semana y devuelva un mensaje 
indicando si es un día laborable o un día de descanso.
3. Usa el enum para invocar la función con el valor Sabado y muestra el 
resultado por consola*/


enum DiasDeLaSemana{
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
function esDiaLaborable(dia: DiasDeLaSemana): string {
    if (dia === DiasDeLaSemana.Sabado || dia===DiasDeLaSemana.Domingo) {
        return `Dia de descanso`
        } else {
            return `Dia laborable`
        }
}
console.log(esDiaLaborable(DiasDeLaSemana.Lunes));

