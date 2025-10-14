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
