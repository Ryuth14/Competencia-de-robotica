const imagenPrincipal = document.getElementById("portada_laboratorio");
const botonSalida = document.getElementsByClassName("salida_boton");
const botonPista = document.getElementsByClassName("boton_pista");
const botonX = document.getElementsByClassName("boton_X");
const botonSiguiente = document.getElementsByClassName("boton_siguiente");
const opcionA = document.getElementsByClassName("opcion_a");
const opcionB = document.getElementsByClassName("opcion_b");
const opcionC = document.getElementsByClassName("opcion_c");
const opcionAbase = document.getElementsByClassName("opcion_a_base");
const opcionBbase = document.getElementsByClassName("opcion_b_base");
const opcionCbase = document.getElementsByClassName("opcion_c_base");
const opcionAcorrecto = document.getElementsByClassName("opcion_a_correcto");
const opcionBcorrecto = document.getElementsByClassName("opcion_b_correcto");
const opcionCcorrecto = document.getElementsByClassName("opcion_c_correcto");
const opcionAincorrecto = document.getElementsByClassName("opcion_a_incorrecto");
const opcionBincorrecto = document.getElementsByClassName("opcion_b_incorrecto");
const opcionCincorrecto = document.getElementsByClassName("opcion_c_incorrecto");
const cartelCorrecto = document.getElementsByClassName("cartel_correcto");
const cartelIncorrecto = document.getElementsByClassName("cartel_incorrecto");

// Inicialmente, el botón de pista y el cartel de incorrecto están ocultos
botonSiguiente[0].style.display = "none";
botonX[0].style.display = "none";
cartelIncorrecto[0].style.display = "none";
cartelCorrecto[0].style.display = "none";
opcionAincorrecto[0].style.display = "none";
opcionAbase[0].style.display = "none";
opcionBcorrecto[0].style.display = "none";
opcionCbase[0].style.display = "none"
opcionCincorrecto[0].style.display = "none"


// Evento para el botón de pista
botonPista[0].addEventListener("click", function () {
    imagenPrincipal.src = "Images/pregunta1-opciones/carpeta-roja/Pista pregunta 1.png";

    botonPista[0].style.display = "none";
    botonSalida[0].style.display = "none";
    opcionA[0].style.display = "none";
    opcionB[0].style.display = "none";
    opcionC[0].style.display = "none";
    opcionAbase[0].style.display = "none";
    opcionAincorrecto[0].style.display = "none";
    opcionBcorrecto[0].style.display = "none";
    opcionCincorrecto[0].style.display = "none";
    opcionCbase[0].style.display = "none";
    cartelCorrecto[0].style.display = "none";
    cartelIncorrecto[0].style.display = "none";
    botonX[0].style.display = "block";
});

// Evento para el botón de cerrar pista
botonX[0].addEventListener("click", function () {
    imagenPrincipal.src = "Images/pregunta1-opciones/carpeta-roja/Pregunta 1.png";

    botonPista[0].style.display = "block";
    botonSalida[0].style.display = "block";
    opcionA[0].style.display = "block";
    opcionB[0].style.display = "block";
    opcionC[0].style.display = "block";
    botonX[0].style.display = "none";
    cartelIncorrecto[0].style.display = "none";
});

//Opcion A incorrecto
opcionA[0].addEventListener("click", function () {
    console.log("Opción de transpiración seleccionada");

    opcionA[0].style.display = "none";
    opcionB[0].style.display = "none";
    opcionC[0].style.display = "none";

    opcionAincorrecto[0].style.display = "block";
    opcionBcorrecto[0].style.display = "block";
    opcionCbase[0].style.display = "block";

    cartelIncorrecto[0].style.display = "block";
    botonSiguiente[0].style.display = "block";

    opcionA[0].style.pointerEvents = "none";
})

//Opcion B correcto
opcionB[0].addEventListener("click", function () {
    console.log("Opción de fotosíntesis seleccionada");

    opcionA[0].style.display = "none";
    opcionB[0].style.display = "none";
    opcionC[0].style.display = "none";

    opcionAbase[0].style.display = "block";
    opcionBcorrecto[0].style.display = "block";
    opcionCbase[0].style.display = "block";

    cartelCorrecto[0].style.display = "block";
    botonSiguiente[0].style.display = "block";

    opcionB[0].style.pointerEvents = "none";
});

//Opcion C incorrecto
opcionC[0].addEventListener("click", function () {
    console.log("Opción de respiración celular seleccionada");

    opcionA[0].style.display = "none";
    opcionB[0].style.display = "none";
    opcionC[0].style.display = "none";

    opcionAbase[0].style.display = "block";
    opcionBcorrecto[0].style.display = "block";
    opcionCincorrecto[0].style.display = "block";

    cartelIncorrecto[0].style.display = "block";
    botonSiguiente[0].style.display = "block";

    opcionC[0].style.pointerEvents = "none";
});


