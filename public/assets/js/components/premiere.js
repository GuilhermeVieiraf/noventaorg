let fotosPremiere = [];
let fotoAtualIndex = 0;

function expandirFoto(elemento) {
    const modal = document.getElementById('modal-foto');
    const fotoExpandida = document.getElementById('foto-expandida');
    const img = elemento.querySelector('img');
    
    if (fotosPremiere.length === 0) {
        coletarFotosPremiere();
    }
    
    fotoAtualIndex = fotosPremiere.findIndex(foto => foto.src === img.src);
    
    fotoExpandida.src = img.src;
    fotoExpandida.alt = img.alt;
    
    modal.style.display = 'block';
    
    document.body.style.overflow = 'hidden';
}

function coletarFotosPremiere() {
    const blocosFoto = document.querySelectorAll('.fotos-grid .bloco-foto img');
    fotosPremiere = Array.from(blocosFoto);
}

function fotoAnterior() {
    if (fotosPremiere.length === 0) return;
    
    fotoAtualIndex = (fotoAtualIndex - 1 + fotosPremiere.length) % fotosPremiere.length;
    const fotoExpandida = document.getElementById('foto-expandida');
    const fotoAtual = fotosPremiere[fotoAtualIndex];
    
    fotoExpandida.src = fotoAtual.src;
    fotoExpandida.alt = fotoAtual.alt;
}

function proximaFoto() {
    if (fotosPremiere.length === 0) return;
    
    fotoAtualIndex = (fotoAtualIndex + 1) % fotosPremiere.length;
    const fotoExpandida = document.getElementById('foto-expandida');
    const fotoAtual = fotosPremiere[fotoAtualIndex];
    
    fotoExpandida.src = fotoAtual.src;
    fotoExpandida.alt = fotoAtual.alt;
}

function fecharModal() {
    const modal = document.getElementById('modal-foto');
    
    modal.style.display = 'none';
    
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-foto');
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
    
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