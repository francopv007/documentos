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
// document.getElementById('formulario').addEventListener("submit",function(event){
// event.preventDefault();

// const usuario = {
//     nombre:document.getElementById("nombre").value,
//     edad:document.getElementById("edad").value,
// };
// console.log(usuario.nombre);
// document.getElementById('m_nombre').innerHTML=usuario.nombre;
// document.getElementById('m_edad').innerHTML=usuario.edad;
// this.reset();
// });

// otro ejemple -------------------------
// function informacion(){
//    let valor1 =parseInt(document.getElementById("valor1").value);
//    let valor2 = parseInt(document.getElementById("valor2").value);

//     document.getElementById("resuelto").innerHTML=myfunction(valor1,valor2);
//     let y = document.getElementById("sum").value;
//     let x = document.getElementById("res").value;
    
 
//     if(y == 'suma'){
//         console.log("este es suma --",y);
//     }else{
//         console.log("este es una resta ---",x);
//     }
// }


// function myfunction(p1,p2){
  
// return p1+p2;
    
// }

// function resta(p1,p2){
//     return p1-p2;
// }


// ejemplo de contructores 
//  function transporte(tipo){
//     this.tipo = tipo ;

//     this.acelerar = function (){
//         return "estoy acelerando";
//     }

//  }

//  const carro  = new transporte("terrestre");
//  console.log(carro);
//  console.log(carro.acelerar());

//  carro.acelerar = function (){
//     return "voy acelerando en una nueva funcion";
//  }
// console.log(carro.acelerar());

// transporte.prototype.frenar = function (){
//     return "estoy frenando";
// }
// console.log(carro.frenar()); 

// ejemplo de scope
// let valor_1 = document.getElementById("valor1").value;
// let valor_2 = document.getElementById("valor2").value;


// function saludar(){
//     console.log(valor_1);
//     document.getElementById("resuelto").innerHTML= valor_1;
//     console.log("esta llegando");
// }
// console.log(valor_1);
// saludar();

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p:even").css("color","yellow");
//     })
// });

// $(document).ready(function(){
//     $(".nuevo").mouseenter(function(){
//         $(".nuevo").css("background-color","green");
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#part1").fadeToggle();
//         $("#part2").fadeIn("slow");
//         $("#part3").fadeIn(3000);
//     });
// });

// const selecciona = document.querySelector("#seccion");
// console.log(selecciona);
// const h1 = document.createElement("h1");
// h1.textContent="hola que tal";
// h1.setAttribute("class","sec2");
// selecciona.appendChild(h1);

// const boton_crear = document.querySelector("#envio")
// const cambiar_color = document.querySelector("#cambiar")

// boton_crear.addEventListener("click",()=> {
//     // console.log("hola franco");
//     // boton_crear.remove();
//     boton_crear.setAttribute("class","btn btn-danger");
//     boton_crear.id="cambiar";

// });

// cambiar_color.addEventListener("click",()=>{
//     // cambiar_color.setAttribute("class","btn btn-info");
//   console.log("hola franco");
// });


let poblacion = [
{
    nombre: "franco",
    apellido: "panduro",
    dni:80524125
},
{
    nombre:"antony",
    apellido:"ramos",
    dni:85696325,
}
]
poblacion.forEach(persona=>{
console.log(`${persona.nombre} tiene ${persona.dni}`);
});
