
function Suma( ){
	let valor1 = document.getElementById("numero1").value;
	let valor2 = document.getElementById("numero2").value;

	let suma = Number(valor1) + Number(valor2);
	document.getElementById("change").innerHTML=suma;

}

function Resta(){
	let valor1 = document.getElementById("numero1").value;
	let valor2 = document.getElementById("numero2").value;

	let resta = Number(valor1) - Number(valor2);
	document.getElementById("change").innerHTML=resta;

}

	// let a = document.getElementById("numero1").value;
	// let b = document.getElementById("numero2").value;
	// 	console.log(a)
let a = 10;
let b = 20;

function Multi(a,b){
	
	console.log(a)
	let resta = Number(a) * Number(b);
	console.log(resta);
	return document.getElementById("change").innerHTML=resta;

}