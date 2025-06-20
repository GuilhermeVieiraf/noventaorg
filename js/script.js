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

// ==================== GALERIA DINÂMICA ====================
document.addEventListener('DOMContentLoaded', function() {
    // Função para gerar tamanhos dinamicamente baseado na quantidade de fotos
    function gerarTamanhosDinamicos(quantidadeFotos) {
        const tamanhos = [];
        const alturasBase = [600, 700, 800, 650, 750, 850, 680, 720, 780, 620];
        
        for (let i = 0; i < quantidadeFotos; i++) {
            // Usa os tamanhos base e adiciona variação
            const alturaBase = alturasBase[i % alturasBase.length];
            const variacao = Math.floor(Math.random() * 120) - 60; // ±60px de variação
            const alturaFinal = Math.max(550, alturaBase + variacao); // Mínimo 550px
            
            tamanhos.push({
                maxHeight: `${alturaFinal}px`,
                maxWidth: '100%'
            });
        }
        
        return tamanhos;
    }

    // Função para aplicar tamanhos às fotos
    function aplicarTamanhosFotos() {
        const fotos = document.querySelectorAll('.bloco-foto img');
        const tamanhos = gerarTamanhosDinamicos(fotos.length);
        
        fotos.forEach((foto, index) => {
            const tamanho = tamanhos[index];
            
            // Aplica os estilos
            foto.style.maxHeight = tamanho.maxHeight;
            foto.style.maxWidth = tamanho.maxWidth;
        });
    }

    // Função para reorganizar as fotos (embaralhar ordem)
    function reorganizarFotos() {
        const galeria = document.getElementById('fotos-home');
        const fotos = Array.from(document.querySelectorAll('.bloco-foto'));
        
        // Remove todas as fotos
        fotos.forEach(foto => foto.remove());
        
        // Embaralha a ordem das fotos
        for (let i = fotos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [fotos[i], fotos[j]] = [fotos[j], fotos[i]];
        }
        
        // Readiciona as fotos na nova ordem
        fotos.forEach(foto => galeria.appendChild(foto));
        
        // Reaplica os tamanhos
        aplicarTamanhosFotos();
    }

    // Função para misturar e espalhar as fotos
    function misturarFotos() {
        const galeria = document.getElementById('fotos-home');
        const fotos = Array.from(document.querySelectorAll('.bloco-foto'));
        
        // Remove todas as fotos
        fotos.forEach(foto => foto.remove());
        
        // Embaralha múltiplas vezes para melhor distribuição
        for (let embaralhamento = 0; embaralhamento < 3; embaralhamento++) {
            for (let i = fotos.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [fotos[i], fotos[j]] = [fotos[j], fotos[i]];
            }
        }
        
        // Readiciona as fotos na nova ordem
        fotos.forEach(foto => galeria.appendChild(foto));
        
        // Reaplica os tamanhos com variação adicional
        aplicarTamanhosFotos();
    }

    // Executa quando a página carrega
    misturarFotos(); // Aplica mistura inicial intensa
});

// ==================== FUNÇÕES ADICIONAIS ====================
// Função para mudar o layout (pode ser chamada por um botão)
function alternarLayout() {
    const galeria = document.getElementById('fotos-home');
    const fotos = document.querySelectorAll('.bloco-foto img');
    
    // Remove todos os estilos inline
    fotos.forEach(foto => {
        foto.style.maxHeight = '';
        foto.style.maxWidth = '';
    });
    
    // Alterna entre masonry e grid
    if (galeria.style.columnCount) {
        galeria.style.columnCount = '';
        galeria.style.display = 'grid';
        galeria.style.gridTemplateColumns = 'repeat(4, 1fr)';
        galeria.style.gap = '0.7rem';
    } else {
        galeria.style.display = '';
        galeria.style.columnCount = '4';
        galeria.style.columnGap = '0.7rem';
        aplicarTamanhosFotos();
    }
}
