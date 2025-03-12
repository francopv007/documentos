
function Suma( ){
	let valor1 = document.getElementById("valor1").value;
	let valor2 = document.getElementById("valor2").value;

	let suma = Number(valor1) + Number(valor2);
	console.log(suma);
	document.getElementById("change").innerHTML=suma;
}

function Resta(){
	let valor1 = document.getElementById("valor1").value;
	let valor2 = document.getElementById("valor2").value;

	let resta = Number(valor1) - Number(valor2);
		console.log(resta);

	document.getElementById("change").innerHTML=resta;

}

