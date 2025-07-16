let usuario ={

	nombre:"mike",
	apellido : "nieve",
	cleinte:false,
	edad : 33,
	redes:{
		facebook:"/franco.com",
		instagram:null
	},
	saludad: function(){
		let dato = "hola franco antony"
		return dato
	}
}

console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.redes.facebook)
console.log(usuario["redes"]["facebook"])
// console.log(usuario.saludad())
