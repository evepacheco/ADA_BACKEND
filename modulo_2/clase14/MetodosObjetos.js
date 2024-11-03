//Metods de Objettos
//son acciones que realiza 

/*let curso = {
    cantdAlumnas: 32,
    docentes : ["Berni", "Mariana"],
    horario: "de 19 a 22hs.",
    notificaciones : function () {
        return "El horario de la cursada es "
    }
}
console.log(curso.notificaciones());
*/

// Cunado ya tenemos definida la prop
/*let curso = {
    cantdAlumnas: 32,
    docentes : ["Berni", "Mariana"],
    horario: "de 19 a 22hs.",
    notificaciones : function () {
        return "El horario de la cursada es " + curso.horario
    }
    }
    console.log(curso.notificaciones());// no olvidar de los parentesis*/


    // Palabra reservda this: Buena practica
    let curso = {
        cantdAlumnas: 32,
        docentes : ["Berni", "Mariana"],
        horario: "de 19 a 22hs.",
        notificaciones : function () {
            return "El horario de la cursada es " + this.horario
        }
        }
        console.log(curso.notificaciones());

