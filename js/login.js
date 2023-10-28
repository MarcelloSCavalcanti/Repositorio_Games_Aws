
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
usernameInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.includes("@") && valor.includes(".com") && valor.includes("gmail")){
      estilizarInputCorreto(usernameInput, usernameHelper);
    } else {
      usernameHelper.innerText = "Escreva uma gmail valilido";
      estilizarInputIncorreto(usernameInput, usernameHelper)
    }
})
let senhaInput = document.getElementById("password");
let senhaLabel = document.querySelector('label[for="password"]');
let senhahelper = document.getElementById("password-helper");


togglePopup(senhaInput, senhaLabel)

// Validar valor do input
senhaInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.length < 3){
      senhahelper.innerText = "Escreva uma senha valilido";
      estilizarInputIncorreto(senhaInput, senhahelper);
    } else {
      estilizarInputCorreto(senhaInput, senhahelper)}
  })