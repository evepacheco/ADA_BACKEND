/*Ejercicio 3: Encapsulamiento con Métodos Privados
Crea una clase Banco con un saldo inicial privado. 
El saldo solo puede ser modificado a través de un método depositar y otro retirar, los cuales deben validar que la cantidad no sea negativa. 
Implementa métodos públicos para consultar el saldo  */ 

export class Banco {
    private _saldo: number;
    constructor(_saldo: number) {
        this._saldo = _saldo;
    }
    public set depositar(value: number) {
        if (value > 0) {
            this._saldo += value;
        } else {
            console.log("El saldo debe ser mayor a 0");
        }
    }
    public set retirar(value: number) {
        if (value <= this._saldo) {
            this._saldo -= value;
        } else {
            console.log("Saldo insuficiente");
        }
    }
    public get consultarSaldo(): string {
        return `Su saldo actual es de: $${this._saldo}`;
    }
}
let cuenta = new Banco(100);
cuenta.depositar = 200;
console.log(cuenta.consultarSaldo);
cuenta.retirar = 50;
console.log(cuenta.consultarSaldo);
cuenta.retirar = 400;
console.log(cuenta.consultarSaldo);