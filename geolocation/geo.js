const botao = document.getElementById("localizar");
const coordenadas = document.getElementById("coordenadas");
const iframeMapa = document.getElementById("mapa");

botao.addEventListener("click", () => {
    coordenadas.textContent = "";

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            mostrarLocalizacao,
            erroLocalizacao,
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        coordenadas.textContent = "Geolocalização não suportada pelo navegador.";
    }
});

function mostrarLocalizacao(posicao) {
    const lat = posicao.coords.latitude;
    const lon = posicao.coords.longitude;

    coordenadas.innerText = `Latitude: ${lat} | Longitude: ${lon}`;
    iframeMapa.src = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
}

function erroLocalizacao(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            coordenadas.textContent = "Permissão de localização negada pelo usuário.";
            break;
        case error.POSITION_UNAVAILABLE:
            coordenadas.textContent = "Informações de localização indisponíveis.";
            break;
        case error.TIMEOUT:
            coordenadas.textContent = "Tempo limite esgotado ao tentar obter a localização.";
            break;
        default:
            coordenadas.textContent = "Erro desconhecido ao tentar obter a localização.";
            break;
    }
}
