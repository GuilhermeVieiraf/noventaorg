// Variáveis globais para navegação
let fotosPremiere = [];
let fotoAtualIndex = 0;

// Função para expandir a foto no modal
function expandirFoto(elemento) {
    const modal = document.getElementById('modal-foto');
    const fotoExpandida = document.getElementById('foto-expandida');
    const img = elemento.querySelector('img');
    
    // Coleta todas as fotos do premiere se ainda não foi feito
    if (fotosPremiere.length === 0) {
        coletarFotosPremiere();
    }
    
    // Encontra o índice da foto atual
    fotoAtualIndex = fotosPremiere.findIndex(foto => foto.src === img.src);
    
    // Define a fonte da imagem expandida
    fotoExpandida.src = img.src;
    fotoExpandida.alt = img.alt;
    
    // Mostra o modal
    modal.style.display = 'block';
    
    // Previne o scroll da página
    document.body.style.overflow = 'hidden';
}

// Função para coletar todas as fotos do premiere
function coletarFotosPremiere() {
    const blocosFoto = document.querySelectorAll('.fotos-grid .bloco-foto img');
    fotosPremiere = Array.from(blocosFoto);
}

// Função para ir para a foto anterior
function fotoAnterior() {
    if (fotosPremiere.length === 0) return;
    
    fotoAtualIndex = (fotoAtualIndex - 1 + fotosPremiere.length) % fotosPremiere.length;
    const fotoExpandida = document.getElementById('foto-expandida');
    const fotoAtual = fotosPremiere[fotoAtualIndex];
    
    fotoExpandida.src = fotoAtual.src;
    fotoExpandida.alt = fotoAtual.alt;
}

// Função para ir para a próxima foto
function proximaFoto() {
    if (fotosPremiere.length === 0) return;
    
    fotoAtualIndex = (fotoAtualIndex + 1) % fotosPremiere.length;
    const fotoExpandida = document.getElementById('foto-expandida');
    const fotoAtual = fotosPremiere[fotoAtualIndex];
    
    fotoExpandida.src = fotoAtual.src;
    fotoExpandida.alt = fotoAtual.alt;
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal-foto');
    
    // Esconde o modal
    modal.style.display = 'none';
    
    // Restaura o scroll da página
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora da imagem
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-foto');
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            fecharModal();
        } else if (event.key === 'ArrowLeft') {
            fotoAnterior();
        } else if (event.key === 'ArrowRight') {
            proximaFoto();
        }
    });
}); 