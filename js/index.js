//Primeiro carrossel
const arrayCarrossel1 = [{
    nextPage: "./html/telasReview/assassinsCreedMirage.html",
    image:"/src/img/capaAssassinsCreedMirage.jpeg" ,
    descicaoImg:"capa do Assassins Creed Mirage",
    legenda:"Assassins Creed Mirage<br>Ubisoft"
},
{
    nextPage: "./html/telasReview/Starfield.html",
    image:"./src/img/capaStarfield.jpg" ,
    descicaoImg:"capa do jogo Starfield",
    legenda:"Starfield<br>Bethesda Softworks"
},
{
    nextPage: "./html/telasReview/baldusGateIII.html",
    image:"./src/img/capaBaldur'sGate3.jpg" ,
    descicaoImg:"capa do jogo Baldur's Gate 3",
    legenda:"Baldur's Gate 3<br>Larian Studios"
},
{
    nextPage: "./html/telasReview/assassinsCreedMirage.html",
    image:"./src/img/capaCallOfDutyMW2.jpg" ,
    descicaoImg:"capa do jogo Call Of Duty MW2",
    legenda:"Call Of Duty MW 2<br>Activision"
},
{
    nextPage: "./html/telasReview/assassinsCreedMirage.html",
    image:"./src/img/capaLiesOfP.jpg" ,
    descicaoImg:"capa do jogo Lies Of P",
    legenda:"Lies Of P<br>Neowiz Games"
},
{
    nextPage: ".html/telasReview/marioGolfSuperRush.html",
    image:"./src/img/capaMarioGolf.png" ,
    descicaoImg:"capa do jogo Mario Golf SuperRush",
    legenda:"Mario Golf Super Rush<br>Nintendo"
},
];

for(let i = 0; i < arrayCarrossel1.length; i++) {
    //Criar elemento
    
    let carrosselDiv1 = document.createElement("div");

    //Manipulando o elemento
    carrosselDiv1.innerHTML = `
    <div class="game-image item slide">
        <img src="${arrayCarrossel1[i].image}" alt="${arrayCarrossel1[i].descicaoImg}" class="image">
        <div class="legenda">
        <a href="${arrayCarrossel1[i].nextPage}">${arrayCarrossel1[i].legenda}</a>
        </div>
    </div>`;

    carrosselDiv1.id = 'array1';
    //capturar o elemento pai
    let divDadCarrossel = document.getElementsByClassName("slide-track")
    //atrelando o elemento filho ao pai
    divDadCarrossel[0].appendChild(carrosselDiv1)//necessário o [] a fim de especificar qual dos elementos pais iremos anexar o filho visto que vem de um htmlColection

}

//Segundo Carrossel
const arrayCarrossel2 = [{

    //nextPage do hale ainda não disponível
    nextPage: "./html/telasReview/assassinsCreedMirage.html",
    image:"/src/img/capaHaloInfinite.png" ,
    descicaoImg:"capa do jogo Halo Infinite",
    legenda:"Halo Infinite<br>Xbox Game Studios"
},
{
    nextPage: "./html/telasReview/battlefield3.html",
    image:"/src/img/capaBattlefield_3.png" ,
    descicaoImg:"capa do jogo Battlefield 3",
    legenda:"Battlefield 3<br>Electronic Arts"
},
{
    nextPage: "./html/telasReview/forzahorizon3.html",
    image:"/src/img/capaForzaHorizon3.jpg" ,
    descicaoImg:"capa do jogo Forza Horizon 3",
    legenda:"Forza Horizon 3<br>Xbox Game Studios"
},
{
    nextPage: "./html/telasReview/HITMAN.html",
    image:"/src/img/capaHitmanIII.jpg" ,
    descicaoImg:"capa do jogo Hitman 3",
    legenda:"Hitman III<br>IO Interactive"
},
{
    nextPage: "./html/telasReview/sekiro.html",
    image:"/src/img/capaSekiroShadowsDieTwice.png" ,
    descicaoImg:"capa do jogo Sekiro Shadows Die Twice",
    legenda:"Sekiro Shadows Die Twice<br>Activision"
},
{
    nextPage: "./html/telasReview/MarvelSpider-ManRemastered.html",
    image:"/src/img/capaSpiderMan.png" ,
    descicaoImg:"capa do jogo Spider Man Remestered",
    legenda:"Spider Man Remastered<br>Sony Interactive Entertainment"
},
];

for(let i = 0; i < arrayCarrossel2.length; i++) {
    //Criar elemento
    
    let carrosselDiv1 = document.createElement("div");

    //Manipulando o elemento
    carrosselDiv1.innerHTML = `
    <div class="game-image item slide">
        <a ><img src="${arrayCarrossel2[i].image}" alt="${arrayCarrossel2[i].descicaoImg}" class="image"></a>
        <div class="legenda">
            <a href="${arrayCarrossel2[i].nextPage}">${arrayCarrossel2[i].legenda}</a>
        </div>
    </div>`;

    //capturar o elemento pai
    let divDadCarrossel = document.getElementsByClassName("slide-track")
    console.log(divDadCarrossel[1])
    //atrelando o elemento filho ao pai
    divDadCarrossel[1].appendChild(carrosselDiv1)//necessário o [] a fim de especificar qual dos elementos pais iremos anexar o filho visto que vem de um htmlColection
}