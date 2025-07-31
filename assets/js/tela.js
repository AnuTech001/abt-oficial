function mostrarCaixaTamanho() {
  const largura = window.innerWidth;
  const altura = window.innerHeight;
  document.getElementById(
    "dimesoes-tela"
  ).textContent = `Essas são as suas dimensões de tela: ${largura}px x 
  ${altura}px. Legal né?! 🤔🤩`;
  /* document.getElementById("caixa-tela").style.display = "inline-block"; */
}

function fecharCaixa() {
  document.getElementById("caixa-tela").style.display = "none";
}
