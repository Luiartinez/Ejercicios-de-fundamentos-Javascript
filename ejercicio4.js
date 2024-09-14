const animal = {
    color: "azul",
    nombre: "torogoz",
    volando: true
}

//destructuring objetos lerales

const{color, nombre, volando} = animal;
console.log("El " + nombre + "es de color:" + color);

//arrays indexados
const frutas = ["pera", "manzana", "sandia"];

//destructuring array
const [pera, manzana, sandia] = frutas;
console.log("A mi megusta mucho la " + pera);