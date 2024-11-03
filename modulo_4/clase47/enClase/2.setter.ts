class Triangle {
    private _base: number;
    private _height: number

    constructor (){
        this._base =0;//inicializa en 0
        this._height=0;
    }

    // Setter para la base, con validacion
    public set base(value:number){
        if (value > 0) {
            this._base = value;
        }else {
            console.log("La base debe ser mayor a 0");
            
        }
    }
    //Setter para la altura, con validacion
    public set height (value: number){
        if (value >0) {
          this._height = value;
            
        }else {
            console.log("La altura debe ser mayor a 0");
        }
    }
    //Metodo para calcular el area 
public calcularArea(): number {
    return (this._base * this._height) / 2 //formula para calcular el area

}

}
//Uso de la clase
const triangle = new Triangle();

//uSAMOS LOS SETTER PARA ESTBLECER VALORES
triangle.base = 10;
triangle.height = 5;

// Claculamos y mostramos el area
console.log(`Area : ${triangle.calcularArea()}`);

//Intento con valores (no permitidos)
