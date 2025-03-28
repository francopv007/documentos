 function EnviarDato(){
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let dni = document.getElementById("dni").value;
  let news = document.getElementById("new");
//   console.log(nombre,apellido,dni);


  document.getElementById("mostrarNombre").innerHTML=nombre;
  document.getElementById("mostrarApellido").innerHTML=apellido;

  let datos = document.querySelectorAll("span");

// datos.forEach(e => {

//     console.log(e);
// });


datos.forEach(function(e,i){

    datos[i] = `dato ${e} - ${i}`;
    console.log(datos[i]);
    // let li = document.createElement('li');
    // li.textContent = data;
    // news.appendChild(li);
    // console.log(data);
    news.innerHTML=datos[i];
});

 }

