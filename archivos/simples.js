// let valor = document.querySelectorAll(".lista");
// valor.forEach(valida=>{
//     console.log(valida);
// });

const valor = document.querySelectorAll("li");
valor.forEach(function (e,i){
    valor[i]=`dato ${e}`;
    
});
console.log(valor);