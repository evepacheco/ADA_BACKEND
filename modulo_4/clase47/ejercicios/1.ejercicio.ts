/*1. Ejercicio de Coche 
Diseña una clase Coche que represente un vehículo.
 Esta clase debe tener propiedades privadas para marca, modelo, año, y kilometraje. 
Implementa métodos para encender el coche y realizar un viaje, que incrementen el kilometraje.
 Asegúrate de que el año no sea menor que 1886 (el año en que se inventó el coche) y que el kilometraje no pueda ser negativo.
 Si se intenta establecer un año o kilometraje no válido, imprime un mensaje indicando el error.*/

 class Coche {
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _km: number;

    constructor(marca:string, modelo:string, anio:number, km: number){
        this._marca=marca
        this._modelo=modelo
        this._anio=anio
        this._km=km
    }
 }