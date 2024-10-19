// Elementos do DOM
const modalLogin = document.getElementById("modalLogin");
const btnAbrirModalLogin = document.getElementById("abrirModalLogin");
const btnAbrirModalCadastroApresentacao = document.getElementById("abrirModalCadastroApresentacao");
const modalCadastro = document.getElementById("modalCadastro");
const closeButtons = document.getElementsByClassName("close");

const btnBeneficiosEmpresas = document.getElementById("btnBeneficiosEmpresas");
const conteudoBeneficiosEmpresas = document.getElementById("conteudoBeneficiosEmpresas");
const btnBeneficiosMotoristas = document.getElementById("btnBeneficiosMotoristas");
const conteudoBeneficiosMotoristas = document.getElementById("conteudoBeneficiosMotoristas");

// Funções para abrir modais
const abrirModal = (modal) => {
  modal.style.display = "block";
}

const fecharModal = (modal) => {
  modal.style.display = "none";
}

// Eventos para abrir modais
btnAbrirModalLogin.addEventListener("click", () => abrirModal(modalLogin));
btnAbrirModalCadastroApresentacao.addEventListener("click", () => abrirModal(modalCadastro));

// Fechar modais ao clicar no 'x'
Array.from(closeButtons).forEach(button => {
  button.addEventListener("click", () => {
    fecharModal(modalLogin);
    fecharModal(modalCadastro);
  });
});

// Fechar modais ao clicar fora deles
window.addEventListener("click", (event) => {
  if (event.target === modalLogin) {
    fecharModal(modalLogin);
  }
  if (event.target === modalCadastro) {
    fecharModal(modalCadastro);
  }
});

// Alternar visibilidade dos conteúdos de benefícios
btnBeneficiosEmpresas.addEventListener("click", () => {
  conteudoBeneficiosEmpresas.style.display = conteudoBeneficiosEmpresas.style.display === "block" ? "none" : "block";
  conteudoBeneficiosMotoristas.style.display = "none";
});

btnBeneficiosMotoristas.addEventListener("click", () => {
  conteudoBeneficiosMotoristas.style.display = conteudoBeneficiosMotoristas.style.display === "block" ? "none" : "block";
  conteudoBeneficiosEmpresas.style.display = "none";
});