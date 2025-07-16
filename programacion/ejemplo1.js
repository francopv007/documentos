
// function goes(){
// 	let valor = document.getElementById("valor2").value
// 	// console.log(valor)
// 	if(valor === "morning"){

		 
// 	// console.log(document.getElementById("mostrar").innerHTML="good morning")
// 	}else if(valor === "afternoon"){

// 		document.getElementById("mostrar").innerHTML="good afternoon"
// 	}else if(valor === "night"){
		
// 		document.getElementById("mostrar").innerHTML="good night"
// 	}else{

// 	document.getElementById("mostrar").innerHTML="no existe esa definicion"
// 	}

// }
let valorA = parseInt(document.getElementById("dato1").value)
let valorB = parseInt(document.getElementById("dato2").value)
// console.log(valorA)

function suma(valorA, valorB){
	// console.log(valorA)
	// console.log(valorB)
	let sumando = valorA + valorB
	// console.log("Este es de la consola",document.getElementById("resultado").value=sumando)

 	return sumando
}


// console.log(suma(valorA,valorB))
let cuento = document.getElementById("resultado").value=suma(valorA,valorB)
console.log("prueba",cuento)