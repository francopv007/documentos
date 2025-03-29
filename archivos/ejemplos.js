// forEach
// no devuelve NamedNodeMap, devuelve un undefine

const nombres = ['FRANCO','ANTONY','PEDRO']

nombres.forEach(function (e,i){
//    e -> obtener el elemento en el cual estamos situados en ese momento dentro del ciclo 
// i es el indice (0,1,2,...)
nombres[i] = `Hola ${e} - ${i}`;
})

// console.log(nombres)

// .map -> debe retornar el cambio de cada elemento

const paises = ["MEXICO","PERU","COLOMBIA"]
const nuevosPaises = paises.map(function(e){
    return `yo soy de ${e}`;
})
// console.log(nuevosPaises)

let frutas = ['MANZANAS','BANANA','NARANJA','UVA']
let lista = document.getElementById('lista');

function mostrarLista(){
	lista.innerHTML = " ";
frutas.forEach(fruta=>{
	let li = document.createElement('li');
	li.textContent = fruta;
	lista.appendChild(li);
});
}

// let items = document.querySelectorAll("li");
// items.forEach((item,taj)=>{
// 	item.style.backgroundColor=taj%2 === 0 ? "blue" : "red";
// 	console.log(taj);
// });

// let botones = document.querySelectorAll('button');
// botones.forEach((boton,index)=>{
// 	boton.addEventListener("click",()=>{
// 	alert(`hiciste click en el boton  ${index+1} - ${boton.index}`);

// 	console.log(boton);
// 	});

// 	console.log(botones);
// });

function AgregarFruta(){
	let nuevafruta = document.getElementById("nuevaFruta").value
	if(nuevafruta){
		frutas.push(nuevafruta);
		document.getElementById("nuevaFruta").value="";
		mostrarLista();
	}
}

function EliminarFruta(){
	frutas.pop();
	mostrarLista();
}
mostrarLista();
function searching(){
	let buscar = document.getElementById("search").value;
	frutas.filter(function(e){
		if(e==buscar){
			// return document.getElementById("vistaElemento").textContent='Existen la fruta';
			console.log(e,"es correcto",buscar);
		}else{
			// return "no esta correcto";
			// return document.getElementById("vistaElemento").textContent='no Existen la fruta';
			console.log(e,"NO es correcto",buscar);
		}
	
	})
}
