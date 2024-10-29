// Abrir e fechar o modal de cadastro
const modal = document.getElementById('modalCadastro');
const btn = document.getElementById('btnCadastro');
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Envio do formulário de cadastro (a ser implementado)
const cadastroForm = document.getElementById('cadastro-form');
cadastroForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Aqui você implementaria a lógica para enviar os dados do formulário para o seu backend
  // Exemplo:
  const formData = new FormData(cadastroForm);
  fetch('/cadastrar', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      // Exibir mensagem de sucesso ou erro para o usuário
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});
