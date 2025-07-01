document.addEventListener("DOMContentLoaded", function () {
  const loadHTML = (id, file) => {
    console.log(`Carregando: ${file}`); // <- move pra cá
    fetch(file)
      .then((response) => response.text())
      .then((data) => (document.getElementById(id).innerHTML = data))
      .catch((error) => console.error(`Erro ao carregar ${file}:`, error));
  };

  loadHTML("header", "components/header.html");
  loadHTML("content", "components/content.html");
  loadHTML("footer", "components/footer.html");
  loadHTML("head_links", "components/includes/head_links.html");
});
