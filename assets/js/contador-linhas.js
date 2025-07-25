document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/py/assets/data/linhas.json")
    .then((res) => res.json())
    .then((data) => {
      const linhas = document.getElementById("linhas");
      if (linhas) {
        linhas.innerText = `Número de linhas nesse projeto:\n${data.total}`;
      } else {
        console.warn("Elemento com id 'linhas' não encontrado.");
      }
    });
});
