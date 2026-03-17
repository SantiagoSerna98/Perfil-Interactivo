let contadorLikes = 0;

function sumarLike() {
    contadorLikes++;
    document.getElementById('btn-like').innerText = `👍 ¡Me gusta este perfil! (${contadorLikes})`;
}