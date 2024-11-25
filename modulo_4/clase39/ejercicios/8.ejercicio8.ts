/* Ejercicio 8: Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura 
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada 
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La 
función debe retornar el área de la figura. Usa tipos específicos para cada caso*/


function calcularArea(figura: "circulo" | "rectangulo", ...valores: number[]): number {
    if (figura === "circulo") { //SI LA FIGURA ES U CIRCULO
      const radio = valores[0];//DECLARAMOS EL VALOR DEL RADIO
      return Math.PI * Math.pow(radio, 2);//CALCULA EL AREA DEL CIRCULO Y EVUELVE EL RESULTADO
    } else if (figura === "rectangulo") {//SI LA FIGURA ES UN RECTANGULO
      const largo = valores[0];//DECLARAMOS LOS VALORES DEL RECTANGULO
      const ancho = valores[1];
      return largo * ancho;//CALCULA EL AREA Y DEVUELVE EL RESULTADO
    } else {
      throw new Error("Figura no válida");
    }
  }
console.log(`El area del circulo es : ${calcularArea("circulo", 10)}`);
console.log(`El area del rectangulo es : ${calcularArea("rectangulo",5,5)}`);

