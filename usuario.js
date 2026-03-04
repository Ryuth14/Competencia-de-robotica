const imagenPrincipal = document.getElementById("portada_laboratorio");
const botonSalida = document.getElementsByClassName("salida_boton");
const botonPista = document.getElementsByClassName("boton_pista");
const botonX = document.getElementsByClassName("boton_X");

botonX[0].style.display = "none";

botonPista[0].addEventListener("click", function() {
    imagenPrincipal.src = "Images/Pista_pregunta1.png";

    botonPista[0].style.display = "none";
    botonSalida[0].style.display = "none";
    botonX[0].style.display = "block";
});

botonX[0].addEventListener("click", function() {
    imagenPrincipal.src = "Images/Laboratorio_pregunta1.png";
    
    botonPista[0].style.display = "block";
    botonSalida[0].style.display = "block";
    botonX[0].style.display = "none";
});