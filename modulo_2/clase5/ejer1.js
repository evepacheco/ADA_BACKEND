
//1.Declaración de variables
let edad = 31;            //number
let nombre = 'Evelia';    // cadena de texto(string)
let estaEstudiando = true;//booleano


//2. declaraccio de constantes

const Pi= 3.14; 	    // number
const Pais = 'Argentina'; // srtrin

//3. tipos de datos

let cantidadDeLibros= 10;   //number
let tituloLibro = "El Principito";// cadena de texto(string)
let esInteresante = true;           //booleano
let temas = ["Aventura", "Fantasia", "Filosofia"];// Array
let autor ={                                        // Objeto
    nombre: "Antonie de Saint-Exupéry",
    nacionalidad: "Francesa"
};

//4. Operaciones Logicas
let esMayorDeEdad = edad >= 18;  //Comparacion
let puedeVotar = esMayorDeEdad && estaEstudiando;// AND logica

//5. Imprimir resultado en consola

console.log("Nombre: ", nombre);
console.log("Edad: ",edad);
console.log("¿Esta estudiando?: ",estaEstudiando);
console.log("Costantte Pi: ", Pi);
console.log("Constane pais: ", Pais);
console.log("Cantidad de libros: ", cantidadDeLibros);
console.log("Titulo de libro: ", tituloLibro);
console.log("¿Es ineresante?: ", esInteresante);
console.log("Temas del libro: ",temas);
console.log("Autor del libro: ",autor);
console.log("¿Es mayor de edad?: ",esMayorDeEdad);
console.log("¿Puede votar?: ",puedeVotar);
