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