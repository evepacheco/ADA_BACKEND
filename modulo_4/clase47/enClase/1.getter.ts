
class Rectangle {
    private _width: number;//propiedad privada
    private _height: number;// prop privada

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }
    //Getter par el  area del rectangulo
    public get area(): number {
        return this._width * this._height;// devolvemos el area calculadfa
    }

   //Getter para obetenr la altura
    public get height(): number {
      return this.height;
    }

   // //Getter para obtener el ancho del rectangulo
   // public get width(): number {
    //    return this.width;
    //}


}

    // Usamos la clase rectangulo 
    const rect = new Rectangle(10, 5)

    // Accedemos a los valores usando getter

//    console.log(`Ancho ${rect.width}`);
   console.log(`Altura ${rect.height}`);
    console.log(`Area ${rect.area}`);
    
    //rect._width // no se puede acceder por q es privada 

