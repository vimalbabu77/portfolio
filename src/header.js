export function renderHeader() {
    const currentPath = window.location.pathname;
    const isPage = (path) => currentPath.includes(path);

    const navItems = [
        { name: 'Home', path: 'index.html' },
        { name: 'Portfolio', path: 'portfolio.html' },
        { name: 'Skills', path: 'skills.html' },
        { name: 'Experience', path: 'experience.html' },
        { name: 'Contact', path: 'contact.html' }
    ];

    const navLinks = navItems.map(item => {
        const isActive = isPage(item.path) || (item.path === 'index.html' && (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/')));
        return `<a href="${item.path}" class="text-sm font-medium ${isActive ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors">${item.name}</a>`;
    }).join('');

    const mobileNavLinks = navItems.map(item => {
        const isActive = isPage(item.path) || (item.path === 'index.html' && (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/')));
        return `<a href="${item.path}" class="text-base font-semibold ${isActive ? 'text-black' : 'text-gray-500'} py-4 border-b border-gray-50">${item.name}</a>`;
    }).join('');

    return `
    <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Logo -->
            <a href="index.html" class="flex items-center shrink-0">
                <img src="/portfolio/images/logo.png" alt="Vimal Babu" class="h-7 md:h-8 w-auto">
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex gap-8">
                ${navLinks}
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-toggle" class="md:hidden p-2 text-black focus:outline-none" aria-label="Toggle Menu">
                <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col transition-all duration-300 ease-in-out">
            ${mobileNavLinks}
        </div>
    </nav>
    `;
}
