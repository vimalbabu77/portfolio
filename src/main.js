import './style.css';
import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('global-header');
    const footerContainer = document.getElementById('global-footer');

    if (headerContainer) {
        headerContainer.innerHTML = renderHeader();
    }

    if (footerContainer) {
        footerContainer.innerHTML = renderFooter();
    }

    console.log('Vimal Babu Portfolio - Components Loaded');
});
