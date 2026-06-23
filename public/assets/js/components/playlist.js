document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('iframe-principal');
    const itensPlaylist = document.querySelectorAll('.item-playlist');

    if(!iframe || itensPlaylist.length === 0) return;

    itensPlaylist.forEach(item => {
        item.addEventListener('click', () => {
            
            const videoId = item.getAttribute('data-video');
            
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            
            itensPlaylist.forEach(i => i.classList.remove('ativo'));
            item.classList.add('ativo');
        });
    });
});