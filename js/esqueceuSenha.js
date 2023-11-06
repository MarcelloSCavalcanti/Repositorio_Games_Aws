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
  
  let emailInput = document.getElementById("emailInput");
  let emailLabel = document.querySelector('label[for="emailInput"]');
  let emailHelper = document.getElementById("emailHelper");
  
  togglePopup(emailInput, emailLabel);
  
  // Validar valor do input
  emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.includes("@") && valor.includes(".com")) {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput, emailHelper);
    } else {
      // Adicionar estilos dinâmicos se o valor estiver incorreto
      emailHelper.innerHTML = '<span class="mensagem-erro">Precisa inserir um email válido</span>';
      estilizarInputIncorreto(emailInput, emailHelper);
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
function adicionarEventoTransicao(input) {
    input.addEventListener("focus", function () {
        this.style.borderColor = "blue"; // ou qualquer cor desejada
        this.style.transition ="1s";
    });
  
    input.addEventListener("blur", function () {
        this.style.borderColor = ""; // redefinir para a cor padrão ou remova esta linha se não desejar redefinir
    });
  }