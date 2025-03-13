let valor1 = document.getElementById("numero1").value;
let valor2 = document.getElementById("numero2").value;
console.log("este valor",valor1)

function Suma(valor1, valor2 ){
	
	let suma = Number(valor1) + Number(valor2);
	console.log(valor1);
	console.log(suma);
	return suma;
}

function Resta(){
	let valor1 = document.getElementById("valor1").value;
	let valor2 = document.getElementById("valor2").value;

	let resta = Number(valor1) - Number(valor2);
	document.getElementById("change").innerHTML=resta;

}

