const loadHTML = (id, file) => {
  console.log(`Carregando: ${file}`);
  return fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
};

// Aguarda o carregamento de todos
document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    loadHTML("span", "components/span.html"),
    loadHTML("header", "components/header.html"),
    loadHTML("anuzita", "components/anuzita.html"),
    loadHTML("content", "components/content.html"),
    loadHTML("navegacao_rapida", "components/navegacao_rapida.html"),
    loadHTML("head_links", "components/includes/head_links.html"),
    loadHTML("sites", "components/sites.html"),
    loadHTML("projetos", "components/projetos.html"),
    loadHTML("computacao_quantica", "components/computacao_quantica.html"),
    loadHTML("area-dev", "components/area-dev.html"),
    loadHTML("manifesto", "components/manifesto.html"),
    loadHTML("rodape", "components/rodape.html"),
  ])
    .then(() => {
      console.log("Todos os componentes carregados!");
      mostrarCaixaTamanho();
      window.addEventListener("resize", mostrarCaixaTamanho);
    })
    .catch((error) => console.error("Erro ao carregar componentes:", error));
});
