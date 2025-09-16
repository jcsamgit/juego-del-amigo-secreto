// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos= [];


function agregarAmigo(){
    let inputAmigo= document.querySelector("#amigo");
    let amigo = inputAmigo.value;
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    
    if(amigo===""){
        alert("Por favor, inserte un nombre");
        return
    }
    if (!regex.test(amigo)) {
        alert("No se permite numeros y/o simbolos. Por favor escriba un nombre como la gente!");
        return;
    }
    amigos.push(amigo);
    inputAmigo.value="";
    console.log(amigos);
}