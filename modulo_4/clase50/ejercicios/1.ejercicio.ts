import { log } from "console";



let muebles : [string,number, number][]=[]

function agregarMueble(nombre:string, precio: number, id:number){
    muebles.push([nombre,precio,id]);
    console.log(`Mueble: ${nombre} agregado con exito`);
    
}

function actualizarPrecio (indice:number, precio: number){
    if(muebles[indice]){
        setTimeout(()=>{
            muebles[indice][1] = precio;
            console.log(`Se actualizo el precio de ${muebles[indice][0]}`);  
        
                    
        }, 3000)
    }else{
        console.log(`No hay mueble con el indice proporcionado.`);
        
    }
}
agregarMueble("sillon", 100, 1)
agregarMueble("cama", 200, 2)
actualizarPrecio(0, 3000)

function mostrarInventario(){
    muebles.forEach(mueble =>{
        console.log(`mueble: ${mueble[0]}, precio: ${mueble[1]}, ID: ${mueble[2]}`);
        
    })
}