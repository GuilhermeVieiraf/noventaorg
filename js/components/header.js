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
        
        // Carrega o script do menu após inserir o HTML
        this.loadMenuScript();
    }

    // Carrega o script do menu
    loadMenuScript() {
        const script = document.createElement('script');
        script.src = 'js/components/menu.js';
        script.onload = () => {
            console.log('Menu script carregado com sucesso');
        };
        document.head.appendChild(script);
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
