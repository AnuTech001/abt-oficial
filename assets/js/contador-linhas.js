document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/py/assets/data/linhas.json")
    .then((res) => res.json())
    .then((data) => {
      const linhas = document.getElementById("linhas");
      if (linhas) {
        linhas.innerText = `${data.total} linhas de código... cada uma escrita 
        com propósito, suor e algumas doses de café. ☕☕☕`;
      } else {
        console.warn("Elemento com id 'linhas' não encontrado.");
      }
    });
});
