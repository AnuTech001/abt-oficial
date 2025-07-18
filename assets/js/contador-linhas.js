document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/py/assets/data/linhas.json")
    .then((res) => res.json())
    .then((data) => {
      const linhas = document.getElementById("linhas");
      if (linhas) {
        linhas.innerText = `Este projeto conta com incríveis ${data.total} linhas!`;
      } else {
        console.warn("Elemento com id 'linhas' não encontrado.");
      }
    });
});
