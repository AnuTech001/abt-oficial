function atualizarDimensoes() {
  const elemento = document.getElementById("dimensoes-tela");
  elemento.textContent = `Largura: ${window.innerWidth}px × Altura: ${window.innerHeight}px`;
}

window.addEventListener("resize", atualizarDimensoes);

atualizarDimensoes();

document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/py/assets/data/linhas.json")
    .then((res) => res.json())
    .then((data) => {
      const linhas = document.getElementById("linhas");
      if (linhas) {
        linhas.innerText = `${data.total} linhas de código`;
      } else {
        console.warn("Elemento com id 'linhas' não encontrado.");
      }
    });
});

document.getElementById("audio").addEventListener("click", () => {
  const audio = document.getElementById("audioDescricao");
  document.getElementById("tocar").onclick = () => audio.play();
  document.getElementById("pausar").onclick = () => audio.pause();
  document.getElementById("parar").onclick = () => {
    audio.pause();
    audio.currentTime = 0;
  };
  if (audio) audio.play();
});