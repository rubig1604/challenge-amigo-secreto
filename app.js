// Lista para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un nuevo amigo
const agregarAmigo = () => {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    actualizarListaAmigos();
};

// Función para mostrar la lista actualizada de amigos en el DOM
const actualizarListaAmigos = () => {
    const listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
};

// Función para realizar el sorteo de un amigo aleatorio
const sortearAmigo = () => {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const resultado = document.querySelector("#resultado");
    resultado.textContent = `🎁 El amigo secreto es: ${amigos[indiceAleatorio]} 🎉`;
};