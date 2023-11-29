
function togglePopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

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
  input.classList.remove("correct");
}


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
        usernameHelper.innerHTML = ""; 
    });
  } else {
    console.error("Elementos não encontrados. Verifique os IDs fornecidos.");
  }
function adicionarEventoTransicao(input) {
  input.addEventListener("click", function () {
      this.style.borderColor = "blue"; 
      this.style.transition ="0.75s";
  });

  input.addEventListener("j", function () {
      this.style.borderColor = ""; 
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
      this.style.borderColor = "blue"; 
      this.style.transition ="0.75s";
  });

  input.addEventListener("blur", function () {
      this.style.borderColor = ""; 
  });
}

  let gmailInput = document.getElementById("email");
  let gmailLabel = document.querySelector('label[for="email"]');
  let gmailHelper = document.getElementById("email-helper");
  const mensagemGmailInvalida = "Escreva um email válido";
  gmailInput.addEventListener("input", function (e) {
    let valor = e.target.value;
    const regexGmail = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook)\.com$/;
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
      gmailHelper.innerHTML = ""; 
    });
  }

  let gmail2Input = document.getElementById("email2");
  let gmail2Label = document.querySelector('label[for="email2"]');
  let gmail2Helper = document.getElementById("email2-helper");
  gamil2Invalida="Os dois emails não são iguais"
gmail2Input.addEventListener("input", function (e) {
    let valor = e.target.value;
    const regexGmail = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook)\.com$/;
  
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
      gmail2Helper.innerHTML = ""; 
    });
  }
  let passwordInput = document.getElementById("password");
  let passwordLabel = document.querySelector('label[for="password"]');
  let passwordHelper = document.getElementById("password-helper");
  const passwordInvalida = "Deve conter um numero, 5 caracter e uma letra maiúscula";
  let regex = /^(?=.*\d).{6,}$/;
  passwordInput.addEventListener("input", function (e) {
    let valor = e.target.value;
  
     {
      if (regex.test(valor)) { 
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
      passwordHelper.innerHTML = ""; 
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
      if (valor === passwordInput.value) { 
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
      password2Helper.innerHTML = ""; 
    });
  }
let formulario = document.getElementById("seuFormulario");
let botaoCadastro = document.getElementById("botaoCadastro");

formulario.addEventListener("submit", function (event) {
  if (!validarCampos()) {
    event.preventDefault();
  }
});

botaoCadastro.addEventListener("click", function () {
  if (!validarCampos()) {

    alert("Por favor, corrija os campos antes de enviar o formulário.");
  } else {
  
  }
});
  function validarCampos() {

    let usernameValor = usernameInput.value;
    if (!regexNome.test(usernameValor)) {
      estilizarInputIncorreto(usernameInput, usernameHelper);
      return false;
    }

    let gmailValor = gmailInput.value;
    if (!regexGmail.test(gmailValor)) {
      estilizarInputIncorreto(gmailInput, gmailHelper);
      return false;
    }
  

    let gmail2Valor = gmail2Input.value;
    if (!regexGmail.test(gmail2Valor) || gmail2Valor !== gmailValor) {
      estilizarInputIncorreto(gmail2Input, gmail2Helper);
      return false;
    }
  

    let passwordValor = passwordInput.value;
    if (!regex.test(passwordValor)) {
      estilizarInputIncorreto(passwordInput, passwordHelper);
      return false;
    }
  

    let password2Valor = password2Input.value;
    if (!regex.test(password2Valor) || password2Valor !== passwordValor) {
      estilizarInputIncorreto(password2Input, password2Helper);
      return false;
    }
  
    // Todos os campos estão corretos
    return true;
  }
  

  formulario.addEventListener("submit", function (event) {
    if (!validarCampos()) {
      event.preventDefault(); 
    }
    else {
      formulario.reset();
    }
  });
  