// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos= [];


function agregarAmigo(){
    let inputAmigo= document.querySelector("#amigo");
    let amigo = inputAmigo.value.trim();
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    
    if(amigo===""){
        alert("Por favor, inserte un nombre");
        return
    }
    if (!regex.test(amigo)) {
        alert("No se permite numeros y/o simbolos. Por favor escriba un nombre como la gente!");//tal vez suene algo rudo pero es mas gracioso que rudo... quizas mas adelante lo modifique :)
        inputAmigo.value="";
        return;
    }
    amigos.push(amigo);
    inputAmigo.value="";
    console.log(amigos);

    mostrarAmigos()
}

    function mostrarAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega amigos primero.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indiceAleatorio];

    let resultado = document.querySelector("#resultado");
    resultado.textContent = "El amigo secreto sorteado es: " + elegido;
}