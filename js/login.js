
function togglePopup(input, label) {
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");}

// ---------- VALIDAÇÃO EMAIL ---------- //
let usernameInput = document.getElementById("gmail");
let usernameLabel = document.querySelector('label[for="gmail"]');
let usernameHelper = document.getElementById("username-helper");


togglePopup(usernameInput, usernameLabel)

// Validar valor do input
const mensagemGmailInvalida = "Escreva um e-mail válido";
const mensagemSenhaInvalida = "Escreva uma senha válida";
usernameInput.addEventListener("change", (e)=> {
    let valor = e.target.value
    const regexGmail = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (regexGmail.test(valor)) {
    estilizarInputCorreto(usernameInput, usernameHelper);
    }
    else {
      estilizarInputIncorreto(usernameInput, usernameHelper)
    }
})
let senhaInput = document.getElementById("password");
let senhaLabel = document.querySelector('label[for="password"]');
let senhahelper = document.getElementById("password-helper");


togglePopup(senhaInput, senhaLabel)

// Defina uma variável para armazenar o texto da mensagem de erro

senhaInput.addEventListener("change", (e) => {
    let valor = e.target.value;

    if (valor.length < 3) {
        estilizarInputIncorreto(senhaInput, senhahelper);
    } else {
        estilizarInputCorreto(senhaInput, senhahelper);
    }
})
if (usernameInput && usernameHelper) {
  usernameInput.addEventListener("focus", function () {
      usernameHelper.innerHTML = `<span class="mensagem-erro-senha">${mensagemGmailInvalida}</span>`;
  });

  usernameInput.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      usernameHelper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
  });
} else {
  console.error("Elementos não encontrados. Verifique os IDs fornecidos.");
}
if (senhaInput && senhahelper) {
  senhaInput.addEventListener("focus", function () {
    senhahelper.innerHTML = `<span class="mensagem-erro-senha">${mensagemSenhaInvalida}</span>`;
  });

  senhaInput.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      senhahelper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
  });
} else {
  console.error("Elementos não encontrados. Verifique os IDs fornecidos.");
}
var elementosAcao = document.querySelectorAll('.acao');

elementosAcao.forEach(function(elemento) {
    elemento.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.transformOrigin = "center";
        this.style.cursor = "pointer";
        this.style.transform = "scale(30px)";
        this.style.transition= "0.75s";
    });

    elemento.addEventListener("mouseout", function () {
        this.style.transform = "";
    });
});

function adicionarEventoTransicao(input) {
  input.addEventListener("focus", function () {
      this.style.borderColor = "blue"; // ou qualquer cor desejada
      this.style.transition ="0.75s";
  });

  input.addEventListener("blur", function () {
      this.style.borderColor = ""; // redefinir para a cor padrão ou remova esta linha se não desejar redefinir
  });
}
