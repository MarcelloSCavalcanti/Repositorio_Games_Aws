//capturando a lista nav e o hamburger image
const mediaQuery = window.matchMedia("(max-width: 1160px)")
const linkLittleScreens = document.getElementById("littleScreens")
const navBarTop = document.getElementById("nav-bar-top")
const areaConteudo = document.getElementById("areaConteudo")
//Capturando páginas para a navegação
const topPage = document.getElementById("topPage")
const jogosPage = document.getElementById("jogosPage")
const loginPage = document.getElementById("loginPage")


if (mediaQuery.matches) {
    linkLittleScreens.addEventListener("mouseover",()=> {
        navBarTop.style.display = "flex"
    })
    areaConteudo.addEventListener("mouseover",()=>{
        navBarTop.style.display = "none"
    })
}

console.log("Teste")