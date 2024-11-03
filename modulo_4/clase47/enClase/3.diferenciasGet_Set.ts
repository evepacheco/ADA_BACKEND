class circle {
    private _radius: number;//prop privada del radio

    constructor (radius: number) {
      this._radius = radius;// asigna valor inical al radio
      }

      //Getter para el radio
      public get radius (): number {
        return this._radius; //DEvuelve el valor del radio
      }

      //Setter para el radio, con una validacion
      public set radius(value:number) {
        if (value > 0) {
            this._radius = value //asigna el nuevo radio
        }else {
            console.log(`eL Rdaio debe sr mayor a 0`);
            
        }
      }
      //Getter para calcular el area
      public get area(): number{
        return Math.PI * this._radius * this._radius// devuelve al area del circulo
      }
      //Getter para calcular la circuferencia
      public get circuferencia (): number {
        return 2 * Math.PI * this._radius// devuelve circuferencia
      }

}

//
//Uso de la clase circulo
const circulo = new circle(5)// CREAMOS UAN INSTANCIA NUEVA CON RADIO 5

//Usamos los getter para obtener los valore

console.log(` Radio :${circulo.radius}`);
console.log(`Area : ${circulo.area}`);
console.log(`Circuferencia:${circulo.circuferencia}`);


//Usamos setter para modificar el radio
circulo.radius = 10
console.log(`Nuevo radio : ${circulo.radius}`);
