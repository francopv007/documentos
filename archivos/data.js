function Ejecutar(valor1, valor2, dato){
	let suma = Number(valor1) + Number(valor2);	
	return suma;
}

function Changes(){
	let dato = document.getElementById("dato").value;

	let valor1 = document.getElementById("valor1").value;
	let valor2 = document.getElementById("valor2").value;
	
	document.getElementById("change").textContent=Ejecutar(valor1,valor2,dato);

 	
}

