function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

let usernameInput = document.getElementById("email");
let usernameLabel = document.querySelector('label[for="email"]');
let usernameHelper = document.getElementById("email-helper");

const mensagemGmailInvalida = "Escreva um e-mail válido";

usernameInput.addEventListener("blur", function () {
  let valor = this.value; // Use 'this.value' para obter o valor do input
  const regexGmail = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  
  if (valor.trim() === "") {
      // Se o campo estiver vazio, reverter para o estado inicial
      usernameHelper.innerHTML = "";
      estilizarInputCorreto(usernameInput, usernameHelper);
  } else if (regexGmail.test(valor)) {
      estilizarInputCorreto(usernameInput, usernameHelper);
  } else {
      estilizarInputIncorreto(usernameInput, usernameHelper);
      usernameHelper.innerHTML = `<span class="mensagem">${mensagemGmailInvalida}</span>`;
  }
});

usernameInput.addEventListener("blur", function () {
  if (this.value.trim() === "") {
      usernameHelper.innerHTML = "";
      usernameHelper.classList.remove("visible");
      usernameInput.classList.remove("error");
      usernameInput.classList.remove("correct");
  }
});
