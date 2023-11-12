/*usar array e for para pegar todas as legendas*/
const arrayLegendas = [
    {
        legenda: `Assassin's Creed Mirage
        Ubisoft`
    },
    {
        legenda: `Baldur's Gate III
        Larian Studios`
    },
    {
        legenda: `Battlefield 3
        Eletronic Arts`
    },
    {
        legenda: `Forza Horizon 3
        Microsoft`
    },
    {
        legenda: `Mario Golf: SuperRush
        Nintendo`
    },
    {
        legenda: `Super Mario Galaxy 2
        Nintendo`
    },
    {
        legenda: `Call of Duty: MWII
        Activision`
    },
    {
        legenda: `Mario Kart 8
        Nintendo`
    },
    {
        legenda: `Fifa 23
        Eletronic Arts`
    },
    {
        legenda: `Lies of P
        Neowiz Games`
    },
    {
        legenda: `F1 Manager 2023
        Frontier`
    },
    {
        legenda: `Marvel's Spider Man
        Sony`
    },
    {
        legenda: `Hitman III
        IO Interactive`
    },
    {
        legenda: `Mario Tennis
        Nintendo`
    },
    {
        legenda: `Starfield
        Microsoft`
    },
    {
        legenda: `Persona 5 Royal
        Sega`
    },
    {
        legenda: `Sekiro
        Activision`
    },
    {
        legenda: `NBA 2K23
        2K`
    },
    {
        legenda: `Rainbow Six Siege
        Ubisoft`
    },
    {
        legenda: `UFC 24
        Eletronic Arts`
    },
    {
        legenda: `Rocket League
        Psyonix`
    },
    {
        legenda: `Halo Infinite
        Microsoft`
    },
    {
        legenda: `Gran Turismo 7
        Sony`
    },
    {
        legenda: `Ori
        Microsoft`
    },
    {
        legenda: `Moto GP23
        Milestone`
    }
]

let navTop = document.querySelector('#navTop');
let menuHamburguer = document.getElementById('littleScreens');
let navMenuHamburguer = document.querySelector('#nav-menuHamburguer');
let legenda = document.querySelectorAll('#legenda');
let imgsComlegendas = document.querySelectorAll('#imgsComLegendas');
let imgs = document.querySelectorAll('img');
let navReview = document.querySelectorAll('#navReview');
let divSemGap = document.querySelectorAll('#divSemGap');
let linkReview = document.querySelectorAll('#linkReview');

//print das variáveis
console.log(navTop)
console.log(menuHamburguer)
console.log(navMenuHamburguer)
console.log(legenda)
console.log(imgsComlegendas)
console.log(imgs)
console.log(navReview)
console.log(divSemGap)
console.log(linkReview)

//evento para menu Hamburguer
menuHamburguer.addEventListener('click', ()=> {
    navMenuHamburguer.style.display = 'block';
})

navMenuHamburguer.addEventListener('mouseover', ()=> {
    navMenuHamburguer.style.display = 'block';
})

navTop.addEventListener('mouseout', ()=> {
    navMenuHamburguer.style.display = 'none';
})

//evento ao passar o mouse na Imagem
for (let i=0; i<imgsComlegendas.length;i++) {
    imgsComlegendas[i].addEventListener('mouseover', ()=> {
        legenda[i].innerText = `${arrayLegendas[i].legenda}`;
        imgsComlegendas[i].classList.add('visible2');
        legenda[i].classList.add('visible2');
        legenda[i].classList.remove('noVisible');
        legenda[i].style.position = 'absolute';
        legenda[i].style.color = 'orange';
        imgs[i + 2].classList.add('maxSizeImg');
        imgs[i + 2].classList.add('transition');
        imgs[i + 2].classList.add('dropShadowImg');
        divSemGap[i].classList.add('visible3');
        navReview[i].style.display = 'flex';
    })
}

//evento ao tirar o mouse da Imagem
for (let i=0; i<imgsComlegendas.length;i++) {
    imgsComlegendas[i].addEventListener('mouseout', ()=> {
        legenda[i].classList.remove('visible2');
        legenda[i].classList.add('noVisible');
        imgs[i + 2].classList.remove('maxSizeImg');
        imgs[i + 2].classList.add('transition');
        imgs[i + 2].classList.remove('dropShadowImg');
        navReview[i].style.display = '';
        
    })
}

//evento ao passar o mouse na Review
for (let i=0; i<imgsComlegendas.length;i++) {
    navReview[i].addEventListener('mouseover', ()=> {
        navReview[i].style.display = 'flex';
        imgs[i + 2].classList.add('maxSizeImg');
        imgs[i + 2].classList.add('transition');
        imgs[i + 2].classList.add('dropShadowImg');
    })
}

//evento ao tirar o mouse da Review
for (let i=0; i<imgsComlegendas.length;i++) {
    navReview[i].addEventListener('mouseout', ()=> {
        navReview[i].style.display = '';
        imgs[i + 2].classList.remove('maxSizeImg');
        imgs[i + 2].classList.add('transition');
        imgs[i + 2].classList.remove('dropShadowImg');
    })
}