const imagenPrincipal = document.getElementById("portada_laboratorio");
const botonSalida = document.getElementsByClassName("salida_boton");
const botonPista = document.getElementsByClassName("boton_pista");
const botonX = document.getElementsByClassName("boton_X");
const opcionA = document.getElementsByClassName("opcion_a");
const opcionB = document.getElementsByClassName("opcion_b");
const opcionC = document.getElementsByClassName("opcion_c");
const opcionAincorrecto = document.getElementsByClassName("opcion_a_incorrecto");
const opcionBcorrecto = document.getElementsByClassName("opcion_b_correcto");
const opcionCbase = document.getElementsByClassName("opcion_c_base");
const cartelIncorrecto = document.getElementsByClassName("cartel_incorrecto");

// Inicialmente, el botón de pista y el cartel de incorrecto están ocultos
opcionAincorrecto[0].style.display = "none";
opcionBcorrecto[0].style.display = "none";
opcionCbase[0].style.display = "none";
botonX[0].style.display = "none";
cartelIncorrecto[0].style.display = "none";

// Evento para el botón de pista
botonPista[0].addEventListener("click", function() {
    imagenPrincipal.src = "Images/Pista_pregunta1.png";

    botonPista[0].style.display = "none";
    botonSalida[0].style.display = "none";
    opcionA[0].style.display = "none";
    opcionB[0].style.display = "none";
    opcionC[0].style.display = "none";
    opcionAincorrecto[0].style.display = "none";
    opcionBcorrecto[0].style.display = "none";
    opcionCbase[0].style.display = "none";
    cartelIncorrecto[0].style.display = "none";
    botonX[0].style.display = "block";
});

// Evento para el botón de cerrar pista
botonX[0].addEventListener("click", function() {
    imagenPrincipal.src = "Images/Laboratorio_pregunta1.png";
    
    botonPista[0].style.display = "block";
    botonSalida[0].style.display = "block";
    opcionA[0].style.display = "block";
    opcionB[0].style.display = "block";
    opcionC[0].style.display = "block";
    botonX[0].style.display = "none";
    cartelIncorrecto[0].style.display = "none";
});

//Opcion A incorrecto
opcionA[0].addEventListener("click", function() {
    console.log("Opción de transpiración seleccionada");
    
    botonX[0].style.display = "none";
    opcionA[0].style.display = "none"; // Ocultar la opción A después de seleccionarla
    opcionB[0].style.display = "none"; // Ocultar la opción B después de seleccionar la opción A
    opcionC[0].style.display = "none"; // Ocultar la opción C después de seleccionar la opción A
    opcionAincorrecto[0].style.display = "block"; // Mostrar la imagen de opción A incorrecta
    opcionBcorrecto[0].style.display = "block"; // Mostrar la imagen de opción B correcta
    opcionCbase[0].style.display = "block"; // Mostrar la imagen de opción C base
    cartelIncorrecto[0].style.display = "block"; // Mostrar el cartel de respuesta incorrecta
    opcionA.style.pointerEvents = "none"; // Deshabilitar clics en la opción A después de seleccionarla

})

//Opcion B
opcionB[0].addEventListener("click", function() {
    console.log("Opción de fotosíntesis seleccionada");
    botonX[0].style.display = "none";

});

//Opcion C
opcionC[0].addEventListener("click", function() {
    console.log("Opción de respiración celular seleccionada");
    botonX[0].style.display = "none";

});