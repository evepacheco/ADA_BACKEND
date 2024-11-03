class Person {
    private _id: number;
    private _name: string;
    protected _age: number

    constructor(id: number, name: string, age: number) {
        this._id = id;
        this._name = name
        this._age = age
    }

    //Getter para obtener nombre 
    public get name(): string {
        return this._name
    }
    // Setter para establecer el nombre
    public set name(value: string) {
        if (value.length > 0) {
            this._name = value
        } else {
            console.log(`El nombre no puede estar avcio`);

        }
    }
    //Getter para la edad
    public get age(): number {
        return this._age
    }
    //Setter para establecer la edad 
    public set age(value: number) {
        if (value >= 0) {
            this._age = value
        } else {
            console.log(`LA EDAD NO PEDE SER NEGATIVA`);

        }
    }
    //Metodo publico para obtenr el id
    public getId ():number{
        return this._id
    }
}