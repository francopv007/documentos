// let casa ={
// 	color:"blanco",
// 	cuartos : 4,
// 	"sistemas inteligentes" : true,
// 	interiores : {
// 		baños:{
// 			"espejo" : true,
// 			regadera : {
// 				"version moderna" : false,
// 				"version tradicional" : true
// 			}
// 		}
// 	},

// 	alarmaPrendida:false,
// 	activarAlarma: function(){
// 		console.log("activo alarma")
// 		return this.alarmaPrendida = true
// 	}

// }

// // console.log(casa["sistemas inteligentes"])

// console.log(casa.interiores.baños.regadera["version tradicional"])
// console.log("este es la alarma apagada",casa.alarmaPrendida)
// console.log(casa.activarAlarma())

let computadora = {
	sistemaOperativo : "macOS",
	color : "gris"
}



for(let propiedad in computadora){
	console.log(`la propiedad es : ${propiedad} y su valor es : ${computadora[propiedad]}` )
}


// METODOS DE ARREGLO

// FILTER-> A PARTIR D EUN ARREGLO, ENCONTRAR CIERTOS ALEMENTOS QUE CUMPLAN CON UNA CONDICION 

const numeros = [2,4,6,8]
const nuevoNumeros = numeros.filter(function(e){
	// pasar la condicion como retorno 
	// expresion - un true o un false 
	return e <= 4;
} )

// REDUCE 
// un metodo de arreglo que nos permite acceder a cada elemento del arreglo y acumularlo combinarlo con el objetivo de retornar un solo elemento (puede ser un tipo de dato diferente)

const serieNumeros = [10,20,30,40]
const total = serieNumeros.reduce(function (acumulado, valorActual){
	console.log("valor actual: ", valorActual)
	console.log("acumulado",acumulado)
	return valorActual + acumulado
},0)
console.log(total)

