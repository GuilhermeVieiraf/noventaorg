class HeaderComponent {
    constructor() {
        this.init();
    }

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
                        <li><a href="contato.html">Contato</a></li>
                        <li><a href="noticias.html">Notícias</a></li>
                    </ul>
                </nav>
            </aside>
            <div class="overlay" id="overlay"></div>
        `;
    }

    init() {
        const isHomePage = document.title === 'noventaorg' ||
            window.location.pathname === '/' ||
            window.location.pathname.endsWith('index.html');

        const headerHTML = this.generateHeaderHTML(isHomePage);
        const sidebarHTML = this.generateSidebarHTML();

        document.body.insertAdjacentHTML('afterbegin', headerHTML + sidebarHTML);

        this.initializeMenuEvents();
    }

    initializeMenuEvents() {
        const menuHamburguer = document.getElementById('menu-hamburguer');
        const painelLateral = document.getElementById('painel-lateral');
        const botaoFecharPainel = document.getElementById('botao-fechar-painel');
        const overlay = document.getElementById('overlay');

        function abrirPainel() {
            painelLateral.classList.add('aberto');
            overlay.classList.add('ativo');
            menuHamburguer.classList.add('ativo');
            document.body.style.overflow = 'hidden';
        }

        function fecharPainelLateral() {
            painelLateral.classList.remove('aberto');
            overlay.classList.remove('ativo');
            menuHamburguer.classList.remove('ativo');
            document.body.style.overflow = '';
        }

        menuHamburguer.addEventListener('click', abrirPainel);
        botaoFecharPainel.addEventListener('click', fecharPainelLateral);
        overlay.addEventListener('click', fecharPainelLateral);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && painelLateral.classList.contains('aberto')) {
                fecharPainelLateral();
            }
        });

        const linksMenu = document.querySelectorAll('.menu-lateral a');
        linksMenu.forEach(link => {
            link.addEventListener('click', function () {
                fecharPainelLateral();
            });
        });
    }
}

window.HeaderComponent = HeaderComponent;


document.addEventListener('DOMContentLoaded', () => {

    if (!document.querySelector('header.cabecalho')) {
        new HeaderComponent();
    }
});
