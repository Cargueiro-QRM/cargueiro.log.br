// Script para abrir e fechar os modais
const modalLogin = document.getElementById("modalLogin");
const btnAbrirModalLogin = document.getElementById("abrirModalLogin");
const btnAbrirModalCadastroApresentacao = document.getElementById("abrirModalCadastroApresentacao");
const modalCadastro = document.getElementById("modalCadastro");
const spans = document.getElementsByClassName("close");

// Função para abrir o modal de login
btnAbrirModalLogin.onclick = function() {
  modalLogin.style.display = "block";
}

// Função para abrir o modal de cadastro
btnAbrirModalCadastroApresentacao.onclick = function() {
  modalCadastro.style.display = "block";
}

// Fechar os modais quando o usuário clica no 'x'
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    modalLogin.style.display = "none";
    modalCadastro.style.display = "none";
  }
}

// Fechar os modais quando o usuário clica fora deles
window.onclick = function(event) {
  if (event.target == modalLogin || event.target == modalCadastro) {
    modalLogin.style.display = "none";
    modalCadastro.style.display = "none";
  }
}

// Script para os botões de benefícios
const btnBeneficiosEmpresas = document.getElementById("btnBeneficiosEmpresas");
const conteudoBeneficiosEmpresas = document.getElementById("conteudoBeneficiosEmpresas");
const btnBeneficiosMotoristas = document.getElementById("btnBeneficiosMotoristas");
const conteudoBeneficiosMotoristas = document.getElementById("conteudoBeneficiosMotoristas");

btnBeneficiosEmpresas.addEventListener("click", () => {
  if (conteudoBeneficiosEmpresas.style.display === "none" || conteudoBeneficiosEmpresas.style.display === "") {
    conteudoBeneficiosEmpresas.style.display = "block";
    conteudoBeneficiosMotoristas.style.display = "none"; // Esconde os motoristas
  } else {
    conteudoBeneficiosEmpresas.style.display = "none";
  }
});

btnBeneficiosMotoristas.addEventListener("click", () => {
  if (conteudoBeneficiosMotoristas.style.display === "none" || conteudoBeneficiosMotoristas.style.display === "") {
    conteudoBeneficiosMotoristas.style.display = "block";
    conteudoBeneficiosEmpresas.style.display = "none"; // Esconde as empresas
  } else {
    conteudoBeneficiosMotoristas.style.display = "none";
  }
});