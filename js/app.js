const  games = [
    thps = {
        id: 1,
        img: "./img/game-1.jpg",
        name: "Tony Hawk Pro Skater 2",
        yearReleased:  "2000",
        rate: "98",
        plataform: "ps1",
        sinopse: "À medida que os esforços de desenvolvimento da maioria dos grandes editores mudam para qualquer número de plataformas de próxima geração, Tony Hawk 2 provavelmente permanecerá como um dos últimos jogos verdadeiramente fantásticos a serem lançados no PlayStation."
    },
    soth = {
        id: 2,
        img: "./img/game-2.jpg",
        name: "Castlevania: Symphony of the Night",
        yearReleased:  "1997",
        rate: "93",
        plataform: "ps1",
        sinopse: "Lançado em 1997, este ainda é o jogo mais famoso da franquia Castlevania. O título abre mão de uma campanha linear e obriga o jogador a explorar todos os cantos de um castelo, que ganha novos caminhos conforme Alucard ganha novas habilidades. Não à toa, o game foi um dos responsáveis por criar um subgênero na indústria: o Metroidvânia, mistura de Metroid, da Nintendo, com Castlevania."
    },
    retwo = {
        id: 3,
        img: "./img/game-3.jpg",
        name: "Resident Evil 2",
        yearReleased:  "1998",
        rate: "89",
        plataform: "ps1",
        sinopse: "O jogo de 1998 apresentou dois personagens novos, considerados alguns dos mais queridos da franquia: Leon S. Kennedy e Claire Redfield. Por isso, o game é dividido em duas campanhas, cada uma com a mesma história, mas sob diferentes caminhos e pontos de vista. Foi nesse game que também conhecemos o Mr. X, que persegue o jogador, e o Licker, monstro linguarudo que anda pelas paredes." 
    },
    shone = {
        id: 4,
        img: "./img/game-4.jpg",
        name: "Silent Hill",
        yearReleased:  "1999",
        rate: "86",
        plataform: "ps1",
        sinopse: "Silent Hill, de 1999, foi um marco no gênero de terror psicológico. O game é ambientando em uma cidade isolada, coberta por uma névoa densa — que, na época, era usada para disfarçar as limitações técnicas do PS1. No primeiro jogo, controlamos Harry Mason, um homem comum que busca pela sua filha desaparecida após um acidente de carro. Chegando na cidade, ele descobre que há um culto religioso (e uma força sobrenatural) por trás do ocorrido."
    },
    oot = {
        id: 5,
        img: "./img/game-5.png",
        name: "The Legend Of Zelda: Ocarina Of Time",
        yearReleased:  "1998",
        rate: "99",
        plataform: "n64",
        sinopse: "Quando jovem, Link é enganado por Ganondorf, o Rei dos Ladrões de Gerudo. O humano maligno usa Link para obter acesso ao Reino Sagrado, onde ele coloca suas mãos contaminadas na Triforce e transforma a bela paisagem de Hyrulean em um deserto árido. Link está determinado a consertar os problemas que ajudou a criar, então com a ajuda de Rauru ele viaja no tempo reunindo os poderes dos Sete Sábios."
    }

]

//variável de controle

let index = 0;

// variáveis do objeto

const title = document.getElementById("title");
const image = document.getElementById("image");
const release = document.getElementById("release");
const rate = document.getElementById("rate");
const plataform = document.getElementById("plataform");
const description = document.getElementById("description");

// botões 

const btnBack = document.getElementById("back");
const btnNext = document.getElementById("next");

// adicionando evento aos botões

btnBack.addEventListener("click", returnItem);
btnNext.addEventListener("click", nextItem);

// função p/ atribuir as propriedades do objeto aos elementos 

function setProperty() {
    let gameIndex = games[index];
    title.textContent = gameIndex.name;
    image.src = gameIndex.img;
    release.textContent = gameIndex.yearReleased;
    rate.textContent = gameIndex.rate;
    plataform.textContent = gameIndex.plataform;
    description.textContent = gameIndex.sinopse;
}   

// funções para retornar e avançar item

function returnItem() {
    index--;
    if(index < 0) {
        index = games.length -1;
    }
    setProperty();
}

function nextItem() {
    index++;
    if(index > games.length -1 ) {
        index = 0;
    } 
    setProperty();
}