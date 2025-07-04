// Header template component
class HeaderComponent {
    constructor() {
        this.init();
    }

    // Gera o HTML do header
    generateHeaderHTML(isHomePage = false) {
        const headerClass = isHomePage ? 'cabecalho header-home' : 'cabecalho';
        const logoClass = isHomePage ? 'logo-titulo' : 'logo-titulo premiere';
        
        return `
            <header class="${headerClass}">
                <div class="container-cabecalho">
                    <div class="espacador-esquerdo"></div>
                    <a href="index.html" class="${logoClass}"></a>
                    <div class="menu-hamburguer" id="menu-hamburguer">
                        <div class="ponto"></div>
                        <div class="ponto"></div>
                        <div class="ponto"></div>
                    </div>
                </div>
            </header>
        `;
    }

    // Gera o HTML do painel lateral
    generateSidebarHTML() {
        return `
            <aside class="painel-lateral" id="painel-lateral">
                <div class="painel-cabecalho">
                    <h3>Menu</h3>
                    <button class="botao-fechar-painel" id="botao-fechar-painel">×</button>
                </div>
                <nav class="menu-lateral">
                    <ul>
                        <li><a href="index.html">Início</a></li>
                        <li><a href="gallery.html">Galeria</a></li>
                        <li><a href="about.html">Sobre</a></li>
                        <li><a href="shop.html">Loja</a></li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>
                </nav>
            </aside>
            <div class="overlay" id="overlay"></div>
        `;
    }

    // Inicializa o componente
    init() {
        // Detecta se é a página inicial baseada no título ou URL
        const isHomePage = document.title === 'noventaorg' || 
                          window.location.pathname === '/' || 
                          window.location.pathname.endsWith('index.html');

        // Insere o header no início do body
        const headerHTML = this.generateHeaderHTML(isHomePage);
        const sidebarHTML = this.generateSidebarHTML();
        
        // Adiciona ao DOM
        document.body.insertAdjacentHTML('afterbegin', headerHTML + sidebarHTML);
        
        // Inicializa os eventos do menu
        this.initializeMenuEvents();
    }

    // Inicializa os eventos do menu
    initializeMenuEvents() {
        const menuHamburguer = document.getElementById('menu-hamburguer');
        const painelLateral = document.getElementById('painel-lateral');
        const botaoFecharPainel = document.getElementById('botao-fechar-painel');
        const overlay = document.getElementById('overlay');

        // Função para abrir o painel
        function abrirPainel() {
            painelLateral.classList.add('aberto');
            overlay.classList.add('ativo');
            menuHamburguer.classList.add('ativo');
            document.body.style.overflow = 'hidden';
        }

        // Função para fechar o painel
        function fecharPainelLateral() {
            painelLateral.classList.remove('aberto');
            overlay.classList.remove('ativo');
            menuHamburguer.classList.remove('ativo');
            document.body.style.overflow = '';
        }

        // Event listeners
        menuHamburguer.addEventListener('click', abrirPainel);
        botaoFecharPainel.addEventListener('click', fecharPainelLateral);
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
    }
}

// Exporta para uso global
window.HeaderComponent = HeaderComponent;

// Auto-inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Só inicializa se não houver header já presente
    if (!document.querySelector('header.cabecalho')) {
        new HeaderComponent();
    }
});
