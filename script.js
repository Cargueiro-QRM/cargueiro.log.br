// Script para abrir e fechar os modais
const modalLogin = document.getElementById("modalLogin");
const modalCadastro = document.getElementById("modalCadastro");
const btnAbrirModalLogin = document.getElementById("abrirModalLogin");
const btnAbrirModalCadastro = document.getElementById("abrirModalCadastro");
const spans = document.getElementsByClassName("close");

btnAbrirModalLogin.onclick = function() {
  modalLogin.style.display = "block";
}

btnAbrirModalCadastro.onclick = function() {
  modalCadastro.style.display = "block";
}

for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    modalLogin.style.display = "none";
    modalCadastro.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modalLogin || event.target == modalCadastro) {
    modalLogin.style.display = "none";
    modalCadastro.style.display = "none";
  }
}

// Desabilitar o clique com o botão direito
document.addEventListener('contextmenu', event => event.preventDefault());

// Desabilitar atalhos de teclado
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}