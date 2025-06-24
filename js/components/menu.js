// ==================== MENU HAMBÚRGUER E PAINEL LATERAL ====================
document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const painelLateral = document.getElementById('painel-lateral');
    const overlay = document.getElementById('overlay');
    const fecharPainel = document.getElementById('botao-fechar-painel');

    // Função para abrir o painel
    function abrirPainel() {
        painelLateral.classList.add('aberto');
        overlay.classList.add('ativo');
        menuHamburguer.classList.add('ativo');
        document.body.style.overflow = 'hidden'; // Previne scroll
    }

    // Função para fechar o painel
    function fecharPainelLateral() {
        painelLateral.classList.remove('aberto');
        overlay.classList.remove('ativo');
        menuHamburguer.classList.remove('ativo');
        document.body.style.overflow = ''; // Restaura scroll
    }

    // Event listeners
    menuHamburguer.addEventListener('click', abrirPainel);
    fecharPainel.addEventListener('click', fecharPainelLateral);
    overlay.addEventListener('click', fecharPainelLateral);

    // Fechar com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && painelLateral.classList.contains('aberto')) {
            fecharPainelLateral();
        }
    });

    // Fechar ao clicar em links do menu
    const linksMenu = document.querySelectorAll('.menu-lateral a');
    linksMenu.forEach(link => {
        link.addEventListener('click', function() {
            fecharPainelLateral();
        });
    });
}); 