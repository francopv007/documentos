// const Persona = {
//     nombre:'franco',
//     dni:72569854,
//     apellido : 'panduro',
// }
// const Personita = new Object()
// Personita.nombre='raul';
// Personita.dni=98565874;
// console.log(Personita);
// console.log(Persona);

// function Animal(nombre, especie){
//     this.nombre = nombre;
//     this.especie = especie;
// }
// const perro = new Animal("max","canino");
// console.log(perro);

// const paloma = new Animal("cri","ave"); 
// console.log(paloma);

// console.log(Animal['nombre']);
// function envio(){ 

//------------- estes es el ejemplo 02
const calculadora = {
    sumar(a,b){
        return a+b;
    },
    restar(a,b){
        return a-b;
    },
    info(){
        return 'este es una prueba para probar';
    }
};
// console.log(a,b);

// }

function Suma(){
    let a = parseInt(document.getElementById('valor1').value);
    let b = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=calculadora.sumar(a,b);
    document.getElementById('muestra').innerHTML=calculadora.info();
    // console.log(calculadora.sumar(a,b));
}
function restar(){
    let a = parseInt(document.getElementById('valor1').value);
    let b = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=calculadora.restar(a,b);
    document.getElementById('muestra').innerHTML='';
    // console.log(calculadora.restar(a,b));
}
// ------------ este es el ejemplo 03
document.getElementById('formulario').addEventListener("submit",function(event){
event.preventDefault();

const usuario = {
    nombre:document.getElementById("nombre").value,
    edad:document.getElementById("edad").value,
};
// console.log(usuario.nombre);
document.getElementById('m_nombre').innerHTML=usuario.nombre;
document.getElementById('m_edad').innerHTML=usuario.edad;
this.reset();
});
