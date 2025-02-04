// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let amigos = [];

//Funcion para capturar el valor del campo de entrada
function agregarAmigo(){
    let amigoIngresado = document.getElementById("amigo").value;

    //Valido que el campo no este vacio
    if (amigoIngresado == "") {
        alert("Por favor, inserte un nombre.");

    // Agrego el elemento al Array y vacio el campo
    }else{
        amigos.push(amigoIngresado);
        document.getElementById("amigo").value = " ";
        console.log(amigos);

        // Agregamos la funcion de agregar en el onclick
        actualizarLista();
    }
}

// Funcion para agregar amigos a la lista
function actualizarLista() {
    // Obtengo la el elemento de la lista y lo vacio
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = " ";

    // Recorro el Array con los nombres y los sumo a la lista.
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li")

        li.textContent = amigos[i];

        lista.appendChild(li);
        
    }
}