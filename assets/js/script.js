document.addEventListener("DOMContentLoaded", function () {
  const loadHTML = (id, file) => {
    console.log(`Carregando: ${file}`);
    fetch(file)
      .then((response) => response.text())
      .then((data) => (document.getElementById(id).innerHTML = data))
      .catch((error) => console.error(`Erro ao carregar ${file}:`, error));
  };

  loadHTML("header", "components/header.html");
  loadHTML("span", "components/span.html");
  loadHTML("content", "components/content.html");
  loadHTML("navegacao_rapida", "components/navegacao_rapida.html");
  loadHTML("head_links", "components/includes/head_links.html");
  loadHTML("sites", "components/sites.html");
  loadHTML("projetos", "components/projetos.html");
  loadHTML("computacao_quantica", "components/computacao_quantica.html");
  loadHTML("manifesto", "components/manifesto.html");
  loadHTML("rodape", "components/rodape.html");
});
