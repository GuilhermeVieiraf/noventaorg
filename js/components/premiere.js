// Função para expandir a foto no modal
function expandirFoto(elemento) {
    const modal = document.getElementById('modal-foto');
    const fotoExpandida = document.getElementById('foto-expandida');
    const img = elemento.querySelector('img');
    
    // Define a fonte da imagem expandida
    fotoExpandida.src = img.src;
    fotoExpandida.alt = img.alt;
    
    // Mostra o modal
    modal.style.display = 'block';
    
    // Previne o scroll da página
    document.body.style.overflow = 'hidden';
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
        }
    });
}); 