/*
=====================================================
SCROLL SUAVE
Landing Page Império das Peças
=====================================================

Este arquivo é responsável por realizar a navegação
suave entre as seções da Landing Page.

Sempre que o usuário clicar em um link interno do menu,
a página fará uma rolagem suave até a seção desejada.

=====================================================
*/


// ============================================
// Seleção dos links do menu
// ============================================

// Seleciona todos os links cujo href começa com "#"
const menuLinks = document.querySelectorAll('header nav a[href^="#"]');


// ============================================
// Função responsável pelo scroll suave
// ============================================

function scrollSuave(event) {

    // Impede o comportamento padrão do navegador
    event.preventDefault();

    // Obtém o destino informado no href
    const destino = event.currentTarget.getAttribute("href");

    // Procura a seção correspondente
    const secao = document.querySelector(destino);

    // Caso a seção exista...
    if (secao) {

        // Realiza uma rolagem suave até ela
        secao.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    }

}


// ============================================
// Eventos
// ============================================

// Adiciona o evento de clique em cada link do menu
menuLinks.forEach(function(link){

    link.addEventListener("click", scrollSuave);

});