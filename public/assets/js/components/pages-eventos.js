let fotosGaleria = [];
let fotoAtualIndex = 0;

function abrirFoto(elemento) {
    const modal = document.getElementById('modal-foto');
    const fotoExpandida = document.getElementById('foto-expandida');

    const galeria = elemento.closest('.fotos-grid');
    fotosGaleria = Array.from(galeria.querySelectorAll('img'));

    fotoAtualIndex = fotosGaleria.findIndex(foto => foto.src === elemento.querySelector('img').src);

    fotoExpandida.src = fotosGaleria[fotoAtualIndex].src;
    fotoExpandida.alt = fotosGaleria[fotoAtualIndex].alt;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function atualizarFoto() {
    const fotoExpandida = document.getElementById('foto-expandida');
    fotoExpandida.src = fotosGaleria[fotoAtualIndex].src;
    fotoExpandida.alt = fotosGaleria[fotoAtualIndex].alt;
}

function fotoAnterior() {
    if (!fotosGaleria.length) return;
    fotoAtualIndex = (fotoAtualIndex - 1 + fotosGaleria.length) % fotosGaleria.length;
    atualizarFoto();
}

function proximaFoto() {
    if (!fotosGaleria.length) return;
    fotoAtualIndex = (fotoAtualIndex + 1) % fotosGaleria.length;
    atualizarFoto();
}

function fecharModal() {
    const modal = document.getElementById('modal-foto');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-foto');
    modal.addEventListener('click', (event) => {
        if (event.target === modal) fecharModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') fecharModal();
        else if (event.key === 'ArrowLeft') fotoAnterior();
        else if (event.key === 'ArrowRight') proximaFoto();
    });

    document.querySelectorAll('.fotos-grid .bloco-foto').forEach(bloco => {
        bloco.addEventListener('click', () => abrirFoto(bloco));
    });
});
