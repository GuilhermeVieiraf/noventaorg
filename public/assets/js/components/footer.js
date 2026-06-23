document.addEventListener("DOMContentLoaded", function() {

    const footerHTML = `
    <footer class="site-footer-simple">
        <div class="container footer-content-simple">
            
            <div class="footer-copyright">
                <p>&copy; <a href="/index.html">2026 Noventa Org.</a></p>
            </div>

            <div class="footer-social">
                <a href="mailto:noventaorg@gmail.com" aria-label="E-mail">
                    <span>noventaorg@gmail.com</span>
                </a>
                <a href="https://instagram.com/noventaorg" target="_blank" aria-label="Instagram">
                    <span>instagram.com/noventaorg</span>
                </a>
                <a href="https://youtube.com/@noventaorg" target="_blank" aria-label="YouTube">
                    <span>youtube.com/noventaorg</span>
                </a>
            </div>

        </div>
    </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});