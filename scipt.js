// Elementos do DOM
const modalLogin = document.getElementById("modalLogin");
const modalCadastro = document.getElementById("modalCadastro");
const btnAbrirModalLogin = document.getElementById("abrirModalLogin");
const btnAbrirModalCadastroApresentacao = document.getElementById("abrirModalCadastroApresentacao");
const closeButtons = document.querySelectorAll(".close");

const btnBeneficiosEmpresas = document.getElementById("btnBeneficiosEmpresas");
const conteudoBeneficiosEmpresas = document.getElementById("conteudoBeneficiosEmpresas");
const btnBeneficiosMotoristas = document.getElementById("btnBeneficiosMotoristas");
const conteudoBeneficiosMotoristas = document.getElementById("conteudoBeneficiosMotoristas");

// Funções para abrir e fechar modais
const toggleModalVisibility = (modal, isVisible) => {
  modal.style.display = isVisible ? "block" : "none";
}

// Eventos para abrir modais
btnAbrirModalLogin.addEventListener("click", () => toggleModalVisibility(modalLogin, true));
btnAbrirModalCadastroApresentacao.addEventListener("click", () => toggleModalVisibility(modalCadastro, true));

// Fechar modais ao clicar no 'x'
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    toggleModalVisibility(modalLogin, false);
    toggleModalVisibility(modalCadastro, false);
  });
});

// Fechar modais ao clicar fora deles
window.addEventListener("click", (event) => {
  if (event.target === modalLogin || event.target === modalCadastro) {
    toggleModalVisibility(event.target, false);
  }
});

// Alternar visibilidade dos conteúdos de benefícios
const toggleContentVisibility = (contentToShow, contentToHide) => {
  contentToShow.style.display = contentToShow.style.display === "block" ? "none" : "block";
  contentToHide.style.display = "none";
};

btnBeneficiosEmpresas.addEventListener("click", () => 
  toggleContentVisibility(conteudoBeneficiosEmpresas, conteudoBeneficiosMotoristas)
);

btnBeneficiosMotoristas.addEventListener("click", () => 
  toggleContentVisibility(conteudoBeneficiosMotoristas, conteudoBeneficiosEmpresas)
);
