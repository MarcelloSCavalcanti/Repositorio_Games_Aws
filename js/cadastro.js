// Função para mostrar/ocultar popup de campo obrigatório
function togglePopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

// Função para estilizar campo correto
function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

// Função para estilizar campo incorreto
function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //

let usernameInput = document.getElementById("name");
let usernameLabel = document.querySelector('label[for="name"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel);

const regexNome = /^(?=.*\d).{4,}$/;
const mensagemNomeInvalida = "Deve conter um número e ter mais do que 4 caracteres";

usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (regexNome.test(valor)) {
    estilizarInputCorreto(usernameInput, usernameHelper);
  } else {
    estilizarInputIncorreto(usernameInput, usernameHelper);
  }
});
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

if (usernameInput) {
    usernameInput.addEventListener("focus", function () {
        usernameHelper.innerHTML = `<span class="mensagem-erro-nome">${mensagemNomeInvalida}</span>`;
    });
  
    usernameInput.addEventListener("blur", function () {
        this.style.backgroundColor = "";
        usernameHelper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
    });
  } else {
    console.error("Elementos não encontrados. Verifique os IDs fornecidos.");
  }
function adicionarEventoTransicao(input) {
  input.addEventListener("click", function () {
      this.style.borderColor = "blue"; // ou qualquer cor desejada
      this.style.transition ="0.75s";
  });

  input.addEventListener("j", function () {
      this.style.borderColor = ""; // redefinir para a cor padrão ou remova esta linha se não desejar redefinir
  });
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
// Corrige este algoritmo:

  // Corrige este algoritmo:

  let gmailInput = document.getElementById("email");
  let gmailLabel = document.querySelector('label[for="email"]');
  let gmailHelper = document.getElementById("email-helper");
  const mensagemGmailInvalida = "Escreva um email válido";
  gmailInput.addEventListener("input", function (e) {
    let valor = e.target.value;
    const regexGmail = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (regexGmail.test(valor)){
      estilizarInputCorreto(gmailInput, gmailHelper);
    } else {
      estilizarInputIncorreto(gmailInput, gmailHelper);
    }
  });

  if (gmailInput) {
    gmailInput.addEventListener("focus", function () {
      gmailHelper.innerHTML = `<span class="mensagem-erro-gmail">${mensagemGmailInvalida}</span>`;
    });

    gmailInput.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      gmailHelper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
    });
  }

  let gmail2Input = document.getElementById("email2");
  let gmail2Label = document.querySelector('label[for="email2"]');
  let gmail2Helper = document.getElementById("email2-helper");
  gamil2Invalida="Os dois emails não são iguais"
gmail2Input.addEventListener("input", function (e) {
    let valor = e.target.value;
    const regexGmail = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  
    if (regexGmail.test(valor)) {
      if (valor === gmailInput.value) {
        estilizarInputCorreto(gmail2Input, gmail2Helper);
      } else {
        estilizarInputIncorreto(gmail2Input, gmail2Helper);
      }
    } else {
      estilizarInputIncorreto(gmail2Input, gmail2Helper);
    }
});
  

  if (gmail2Input) {
    gmail2Input.addEventListener("focus", function () {
      gmail2Helper.innerHTML = `<span class="mensagem-erro-gamil2">${gamil2Invalida}</span>`;
    });

    gmail2Input.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      gmail2Helper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
    });
  }
  let passwordInput = document.getElementById("password");
  let passwordLabel = document.querySelector('label[for="password"]');
  let passwordHelper = document.getElementById("password-helper");
  const passwordInvalida = "Deve conter um numero e ter no minimo 5 caracter";
  let regex = /^(?=.*\d).{5,}$/
  passwordInput.addEventListener("input", function (e) {
    let valor = e.target.value;
  
     {
      if (regex.test(valor)) {  // Corrigido aqui para verificar o tamanho usando length
        estilizarInputCorreto(passwordInput, passwordHelper);
      } else {
        estilizarInputIncorreto(passwordInput, passwordHelper);
      }
    }
  });
  
  
  if (passwordInput) {
    passwordInput.addEventListener("focus", function () {
      passwordHelper.innerHTML = `<span class="mensagem-erro-password">${passwordInvalida}</span>`;
    });
  
    passwordInput.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      passwordHelper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
    });
  }
  
  let password2Input = document.getElementById("password2");
  let password2Label = document.querySelector('label[for="password2"]');
  let password2Helper = document.getElementById("password2-helper");
  const password2Invalida = "As duas senhas não são iguais";
  password2Input.addEventListener("input", function (e) {
    let valor = e.target.value;
 {
  if (regex.test(valor)){
      if (valor === passwordInput.value) {  // Corrigido aqui para comparar com passwordInput.value
        estilizarInputCorreto(password2Input, password2Helper);
      } 
      else {
        estilizarInputIncorreto(password2Input, password2Helper);
      }
    }
    else {
      estilizarInputIncorreto(password2Input, password2Helper);
    }
  }});
  
  if (password2Input) {
    password2Input.addEventListener("focus", function () {
      password2Helper.innerHTML = `<span class="mensagem-erro-password2">${password2Invalida}</span>`;
    });
  
    password2Input.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      password2Helper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
    });
  }
let formulario = document.getElementById("seuFormulario");
let botaoCadastro = document.getElementById("botaoCadastro");

formulario.addEventListener("submit", function (event) {
  if (!validarCampos()) {
    event.preventDefault(); // Impede o envio do formulário se os campos não estiverem corretos
  }
});

botaoCadastro.addEventListener("click", function () {
  if (!validarCampos()) {
    // Impede a submissão do formulário se os campos não estiverem corretos
    alert("Por favor, corrija os campos antes de enviar o formulário.");
  } else {
    // Se todos os campos estiverem corretos, você pode executar outras ações aqui se necessário
  }
});
  function validarCampos() {
    // Validar o campo de nome de usuário
    let usernameValor = usernameInput.value;
    if (!regexNome.test(usernameValor)) {
      estilizarInputIncorreto(usernameInput, usernameHelper);
      return false;
    }
  
    // Validar o campo de email
    let gmailValor = gmailInput.value;
    if (!regexGmail.test(gmailValor)) {
      estilizarInputIncorreto(gmailInput, gmailHelper);
      return false;
    }
  
    // Validar o campo de confirmação de email
    let gmail2Valor = gmail2Input.value;
    if (!regexGmail.test(gmail2Valor) || gmail2Valor !== gmailValor) {
      estilizarInputIncorreto(gmail2Input, gmail2Helper);
      return false;
    }
  
    // Validar o campo de senha
    let passwordValor = passwordInput.value;
    if (!regex.test(passwordValor)) {
      estilizarInputIncorreto(passwordInput, passwordHelper);
      return false;
    }
  
    // Validar o campo de confirmação de senha
    let password2Valor = password2Input.value;
    if (!regex.test(password2Valor) || password2Valor !== passwordValor) {
      estilizarInputIncorreto(password2Input, password2Helper);
      return false;
    }
  
    // Todos os campos estão corretos
    return true;
  }
  
  // Adicionar um evento de validação no formulário ou botão de envio
  formulario.addEventListener("submit", function (event) {
    if (!validarCampos()) {
      event.preventDefault(); // Impede o envio do formulário se os campos não estiverem corretos
    }
    else {
      // Se todos os campos estiverem corretos, limpa o formulário
      formulario.reset();
    }
  });
  