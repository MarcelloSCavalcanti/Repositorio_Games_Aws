// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
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
    input.classList.remove("correct");
  }
  
  // ---------- VALIDAÇÃO USERNAME ---------- //
  let usernameInput = document.getElementById("name");
  let usernameLabel = document.querySelector('label[for="name"]');
  let usernameHelper = document.getElementById("username-helper");
  
  togglePopup(usernameInput, usernameLabel)
  const 
  regexNome = /^[a-zA-Z\s]{2,}$/;
  // Validar valor do input
  const mensagemGmailInvalida = "Escreva um e-mail válido";
  const mensagemNomeInvalida = "Escreva um nome válido";
  usernameInput.addEventListener("change", (e)=> {
      let valor = e.target.value
      
      if (regexNome.test(valor) && valor.length>=6) {
      estilizarInputCorreto(usernameInput, usernameHelper);
      }
      else {
        estilizarInputIncorreto(usernameInput, usernameHelper)
      }
  })
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
        usernameHelper.innerHTML = `<span class="mensagem-erro-senha">${mensagemNomeInvalida}</span>`;
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
      gmailHelper.innerHTML = `<span class="mensagem-erro-senha">${mensagemNomeInvalida}</span>`;
    });

    gmailInput.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      gmailHelper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
    });
  }

  let gmail2Input = document.getElementById("email2");
  let gmail2Label = document.querySelector('label[for="email2"]');
  let gmail2Helper = document.getElementById("email2-helper");

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
      gmail2Helper.innerHTML = `<span class="mensagem-erro-senha">${mensagemNomeInvalida}</span>`;
    });

    gmail2Input.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      gmail2Helper.innerHTML = ""; // Limpar a mensagem ao sair do elemento.
    });
  }

  function validarEmail(email) {
    // Adicione aqui sua lógica de validação de e-mail, por exemplo, usando expressões regulares.
    return true; // Substitua por sua lógica real de validação.
  }