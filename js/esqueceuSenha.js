
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
  
  let emailInput = document.getElementById("emailInput");
  let emailLabel = document.querySelector('label[for="emailInput"]');
  let emailHelper = document.getElementById("emailHelper");
  
  togglePopup(emailInput, emailLabel);
  

  emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.includes("@") && valor.includes(".com")) {

      estilizarInputCorreto(emailInput, emailHelper);
    } else {

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
        this.style.borderColor = "blue"; 
        this.style.transition ="1s";
    });
  
    input.addEventListener("blur", function () {
        this.style.borderColor = "";
    });
  }