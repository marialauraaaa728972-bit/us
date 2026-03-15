// Data de início do namoro: 06/12/2025
const dataInicio = new Date(2025, 11, 6, 0, 0, 0); // dezembro = 11

const contador = document.getElementById("contador");

function atualizarContador() {
    const agora = new Date();
    let diff = Math.floor((agora - dataInicio) / 1000); // diferença em segundos

    if (diff < 0) {
        contador.textContent = "Ainda não começamos 😅";
        return;
    }

    const dias = Math.floor(diff / (24 * 3600));
    diff %= 24 * 3600;

    const horas = Math.floor(diff / 3600);
    diff %= 3600;

    const minutos = Math.floor(diff / 60);
    const segundos = diff % 60;

    contador.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);

// Inicializa imediatamente
atualizarContador();