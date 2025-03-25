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

frutas.forEach(fruta=>{
	let li = document.createElement('li');
	li.textContent = fruta;
	lista.appendChild(li);
});

