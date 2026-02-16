import './style.css';
import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('global-header');
    const footerContainer = document.getElementById('global-footer');

    if (headerContainer) {
        headerContainer.innerHTML = renderHeader();
        
        // Mobile Menu Logic
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        if (toggleBtn && mobileMenu) {
            toggleBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.contains('hidden');
                
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    menuIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                } else {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        }
    }

    if (footerContainer) {
        footerContainer.innerHTML = renderFooter();
    }

    console.log('Vimal Babu Portfolio - Components Loaded');
});