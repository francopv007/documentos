function Ejecutar(valor1, valor2, dato,dato2){

	if(dato2=='-'){
		let resta = Number(valor1) - Number(valor2);	
		return resta;
	}
	if(dato=='+'){
		let suma = Number(valor1) + Number(valor2);	
		return suma;
	}
}

function Changes(){
	let dato = document.getElementById("suma").value;
	let dato2 = document.getElementById("resta").value;

	let valor1 = document.getElementById("valor1").value;
	let valor2 = document.getElementById("valor2").value;
	console.log(dato)
	console.log(dato2)
	document.getElementById("change").textContent=Ejecutar(valor1,valor2,dato,dato2);

 	
}

