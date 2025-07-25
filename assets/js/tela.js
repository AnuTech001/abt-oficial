function mostrarCaixaTamanho() {
  const largura = window.innerWidth;
  const altura = window.innerHeight;
  document.getElementById(
    "info-tela"
  ).textContent = `Dimesões de tela:\n${largura}px x ${altura}px`;
  document.getElementById("caixa-tela").style.display = "inline-block";
}

function fecharCaixa() {
  document.getElementById("caixa-tela").style.display = "none";
}
