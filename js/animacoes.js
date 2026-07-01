/*
=====================================================
ANIMAÇÕES DAS SEÇÕES
Landing Page Império das Peças
=====================================================

Este arquivo é responsável por revelar os elementos
da página conforme o usuário realiza a rolagem.

O JavaScript apenas adiciona uma classe quando o
elemento entra na área visível da tela.

Toda a animação continua sendo responsabilidade do CSS.

=====================================================
*/


// ============================================
// Seleção dos elementos animados
// ============================================

// Todos os elementos que possuem a classe "animate"
const elementos = document.querySelectorAll(".animate");


// ============================================
// Configuração do Intersection Observer
// ============================================

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        // Se o elemento estiver visível...
        if(entry.isIntersecting){

            // Adiciona a classe responsável pela animação
            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});


// ============================================
// Observando todos os elementos
// ============================================

elementos.forEach(function(elemento){

    observer.observe(elemento);

});