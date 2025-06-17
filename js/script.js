document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    toggle.addEventListener('click', () => menu.classList.toggle('open'));

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
            if (menu.classList.contains('open')) menu.classList.remove('open');
        });
    });
});
