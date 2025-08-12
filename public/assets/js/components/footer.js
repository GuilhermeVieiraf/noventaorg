document.addEventListener("DOMContentLoaded", function() {

    const footerHTML = `
    <footer class="site-footer-simple">
        <div class="container footer-content-simple">
            
            <div class="footer-copyright">
                <p>&copy; noventa.org</p>
            </div>

            <div class="footer-social">
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