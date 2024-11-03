/*1. Estructura de Datos
a) Crear un array de objetos llamado mascotas que contenga al menos 5
mascotas. Cada mascota debe tener las siguientes propiedades:
✓ id (número)
✓ nombre (string)
✓ especie (string)

✓ edad (número)
✓ disponible (booleano)
b) Crear un array de objetos llamado propietarios con al menos 3
propietarios. Cada propietario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ mascotasAdoptadas (array de ids de mascotas)*/


let mascotas=  [
    {id: 1,
         nombre: "Firulais",
          especie: "perro",
           edad:2, 
           disponible: true},
    {id: 2,
         nombre: "Pipo", 
         especie: "gato", 
         edad: 5, 
         disponible: false},
    {id: 3,
         nombre: "Lola",
          especie: "perro", 
          edad: 4, 
          disponible: false},
    {id: 4,
         nombre: "Negrito",
          especie: "perro",
           edad: 1,
            disponible: true},
    {id: 5,
         nombre: "Pancho", 
         especie: "gato", 
         edad: 2, 
         disponible: true}
];


let propietarios = [
    
        {id: 1,
             nombre: "Carlos",
              mail: "juan01@gmail",
              mascotaAdoptada:[1,2],
             },
        {id: 2,
             nombre: "Juan",
              email: "juan02@gmail",
              mascotaAdoptada:[3],
             },
        {id: 3, 
            nombre: "Daniel",
             mail: "daniel03@gmail",
             mascotaAdoptada:[4,5],
             },
        
    ];

    /*2. Funciones de Gestión de Mascotas
a) Implementar una función agregarMascota(id, nombre, especie, edad)
que agregue una nueva mascota al array mascotas.*/

/*function agregarMascota(id, nombre, especie, edad) {
    let id =
    
}






/*b) Crear una función buscarMascota(criterio, valor) que permita buscar
mascotas por nombre o especie.*/
function buscarMascota(criterio, valor) {
    return mascotas.filter(mascota => mascota[criterio] === valor);
  }
  console.log(buscarMascota('especie','perro'));
    


