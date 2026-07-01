/*
=====================================================
MENU RESPONSIVO
Landing Page Império das Peças
=====================================================

Este arquivo é responsável por controlar a abertura
e o fechamento do menu de navegação em dispositivos
móveis.

O JavaScript não altera a aparência do menu.

Sua única função é adicionar ou remover uma classe
que será interpretada pelo CSS.

=====================================================
*/


// ============================================
// Seleção dos elementos da página
// ============================================

// Botão responsável por abrir e fechar o menu
const menuToggle = document.querySelector(".menu-toggle");

// Menu de navegação
const menu = document.querySelector("header nav");


// ============================================
// Função responsável por abrir e fechar o menu
// ============================================

function toggleMenu() {

    // Adiciona ou remove a classe "active"
    menu.classList.toggle("active");

}


// ============================================
// Evento de clique
// ============================================

// Quando o usuário clicar no botão,
// executa a função toggleMenu()
menuToggle.addEventListener("click", toggleMenu);