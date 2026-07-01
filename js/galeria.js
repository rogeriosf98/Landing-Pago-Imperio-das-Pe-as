/*
=====================================================
GALERIA DE IMAGENS
Landing Page Império das Peças
=====================================================

Este arquivo controla o funcionamento do slider.

Funcionalidades:

✔ Navegação pelos botões
✔ Slider responsivo
✔ Auto Play
✔ Pausa ao passar o mouse
✔ Continua automaticamente
✔ Recalcula ao redimensionar a tela

=====================================================
*/


// ============================================
// Seleção dos elementos
// ============================================

const track = document.querySelector(".galeria-track");

const itens = document.querySelectorAll(".galeria-item");

const btnPrev = document.querySelector(".slider-btn.prev");

const btnNext = document.querySelector(".slider-btn.next");

const slider = document.querySelector(".galeria-slider");


// ============================================
// Variáveis
// ============================================

// Índice da primeira imagem visível
let indice = 0;

// Tempo do Auto Play (5 segundos)
const tempoAutoPlay = 5000;

// Armazena o intervalo do Auto Play
let autoPlay;

// Quantidade de imagens visíveis
let imagensVisiveis = calcularImagensVisiveis();


// ============================================
// Calcula quantas imagens aparecem na tela
// ============================================

function calcularImagensVisiveis() {

    if (window.innerWidth <= 768) {

        return 1;

    }

    if (window.innerWidth <= 992) {

        return 2;

    }

    return 3;

}


// ============================================
// Atualiza posição do slider
// ============================================

function atualizarSlider() {

    imagensVisiveis = calcularImagensVisiveis();

    const largura = itens[0].offsetWidth;

    const gap = parseFloat(getComputedStyle(track).gap);

    const deslocamento = indice * (largura + gap);

    track.style.transform = `translateX(-${deslocamento}px)`;

}


// ============================================
// Próxima imagem
// ============================================

function proximaImagem() {

    indice++;

    if (indice > itens.length - imagensVisiveis) {

        indice = 0;

    }

    atualizarSlider();

}


// ============================================
// Imagem anterior
// ============================================

function imagemAnterior() {

    indice--;

    if (indice < 0) {

        indice = itens.length - imagensVisiveis;

    }

    atualizarSlider();

}


// ============================================
// Auto Play
// ============================================

function iniciarAutoPlay() {

    autoPlay = setInterval(proximaImagem, tempoAutoPlay);

}

function pararAutoPlay() {

    clearInterval(autoPlay);

}


// ============================================
// Eventos dos botões
// ============================================

btnNext.addEventListener("click", function () {

    proximaImagem();

});

btnPrev.addEventListener("click", function () {

    imagemAnterior();

});


// ============================================
// Pausa o Auto Play quando o mouse estiver
// sobre a galeria
// ============================================

slider.addEventListener("mouseenter", pararAutoPlay);


// ============================================
// Continua o Auto Play quando o mouse sair
// ============================================

slider.addEventListener("mouseleave", iniciarAutoPlay);


// ============================================
// Atualiza ao redimensionar a janela
// ============================================

window.addEventListener("resize", function () {

    imagensVisiveis = calcularImagensVisiveis();

    if (indice > itens.length - imagensVisiveis) {

        indice = itens.length - imagensVisiveis;

    }

    atualizarSlider();

});


// ============================================
// Inicialização
// ============================================

atualizarSlider();

iniciarAutoPlay();