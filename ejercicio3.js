//objetos literales no indexados

const animal ={
    color: "naranja",
    nombre: "simba",
    refugiendo: true,
    favoritos:{
        dias:{
            ok: true,
        },
        noche:{
            ok: false
        } 
    } 
} 

const color = animal.color;
const nombre = animal.nombre;

console.log("color "+ color +", animal: " + nombre);