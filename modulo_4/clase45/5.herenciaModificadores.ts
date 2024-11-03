
class Persona {
    protected name: string;

    constructor(name: string) {
        this.name = name
    }
    public saludo() {
        console.log(`Hola me llamo ${this.name}`);

    }
}

export class Empleado extends Persona {
    private titulo: string;

    constructor(name: string, titulo: string) {
        super(name)
        this.titulo = titulo
    }

    public trabajo() {
        console.log(`${this.name} esta trabajando ${this.titulo}`);

    }
}
const empleaod1 = new Empleado('Vicki', 'Back End')
empleaod1.saludo()
empleaod1.trabajo()
