let listaDeAmigos = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
  let inputNombre = document.getElementById("amigo");
  let nombre = inputNombre.value.trim();

  if (nombre === "") {
    asignarTextoElemento("#resultado", "Por favor, inserte un nombre");
    return;
  }

  listaDeAmigos.push(nombre);

  actualizarListaAmigos();

  inputNombre.value = "";

  asignarTextoElemento("#resultado", `Amigo ${nombre} añadidado a la lista`);
}

function actualizarListaAmigos() {
  let listaHTML = document.getElementById("listaAmigos");
  listaHTML.innerHTML = "";

  for (let i = 0; i < listaDeAmigos.length; i++) {
    let item = document.createElement("li");

    item.textContent = listaDeAmigos[i];

    listaHTML.appendChild(item);
  }
}

function limpiarCaja() {
  document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    asignarTextoElemento("#resultado", "No hay amigos en la lista");
    return;
  }

  indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

  amigoSorteado = listaDeAmigos[indiceAleatorio];

  asignarTextoElemento("#resultado", `El amigo sorteado es: ${amigoSorteado}`);
}
