// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let amigos = [];

//Funcion para capturar el valor del campo de entrada
function agregarAmigo(){
    let amigoIngresado = document.getElementById("amigo").value;

    if (amigoIngresado == "") {
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(amigoIngresado);
        document.getElementById("amigo").value = " ";
        console.log(amigos);
    }
}

