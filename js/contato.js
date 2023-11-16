function estilizarInputCorreto(input) {;
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input) {
  input.classList.add("error");
  input.classList.remove("correct");
}

function ativAviso(helper) {
  helper.classList.add("visible");
  helper.innerHTML = `<span class="mensagem">${mensagemGmailInvalida}</span>`;
}
function ativAvisotexto(helper) {
  helper.classList.add("visible");
  helper.innerHTML = `<span class="mensagemTexto">${mensagemTexto}</span>`;
}


function RemAviso(helper) {
  helper.classList.remove("visible");
  helper.innerHTML = "";
}

let usernameInput = document.getElementById("email");
let usernameLabel = document.querySelector('label[for="email"]');
let usernameHelper = document.getElementById("email-helper");

const mensagemGmailInvalida = "Escreva um e-mail válido";

usernameInput.addEventListener("focus", function () {
  if (this.classList.contains("error")) {
    ativAviso(usernameHelper);
  }
});

usernameInput.addEventListener("blur", function () {
  let valor = this.value.trim();
  const regexGmail = /^[a-zA-Z0-9._-]+@gmail||@hotmail\.com$/;

  if (valor === "") {
    // Se o campo estiver vazio, reverter para o estado inicial
    RemAviso(usernameHelper);
    estilizarInputCorreto(usernameInput, usernameHelper);
  } else if (regexGmail.test(valor)) {
    estilizarInputCorreto(usernameInput, usernameHelper);
  } else {
    estilizarInputIncorreto(usernameInput, usernameHelper);
    // Adiciona eventos de aviso apenas quando necessário
    usernameInput.addEventListener("focus", function () {
      ativAviso(usernameHelper);
    });
    usernameInput.addEventListener("blur", function () {
      RemAviso(usernameHelper);
    });
  }
});

// Limpa o aviso quando o campo estiver vazio
usernameInput.addEventListener("blur", function () {
  if (this.value.trim() === "") {
    RemAviso(usernameHelper);
    estilizarInputCorreto(usernameInput, usernameHelper);
  }
});
let comentarioInput = document.getElementById("comentario");
let comentareHelper = document.getElementById("comentario-helper");
let mensagemTexto = "voce excedeu o limite maximo de 500"

comentarioInput.addEventListener("focus", function () {
  if (this.classList.contains("error")) {
    ativAvisotexto(comentareHelper);
  }
});

comentarioInput.addEventListener("blur", function () {
  let valor = this.value.trim();


  if (valor === "") {
    // Se o campo estiver vazio, reverter para o estado inicial
    RemAviso(comentareHelper);
  } else if (valor.length>5) {
    estilizarInputIncorreto(comentarioInput);
    comentarioInput.addEventListener("focus", function () {
      ativAvisotexto(comentareHelper);
    });
    comentarioInput.addEventListener("blur", function () {
      RemAviso(comentareHelper);
    });
  }
});

// Limpa o aviso quando o campo estiver vazio
comentarioInput.addEventListener("blur", function () {
  if (this.value.trim() === "") {
    RemAviso(comentareHelper);
    estilizarInputCorreto(comentarioInput);
  }
});

