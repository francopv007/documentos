const Persona = {
    nombre:'franco',
    dni:72569854,
    apellido : 'panduro',
}
// const Personita = new Object()
// Personita.nombre='raul';
// Personita.dni=98565874;
// console.log(Personita);
// console.log(Persona);

function Animal(nombre, especie){
    this.nombre = nombre;
    this.especie = especie;
}
const perro = new Animal("max","canino");
console.log(perro);

const paloma = new Animal("cri","ave");
console.log(paloma);

console.log(Animal);