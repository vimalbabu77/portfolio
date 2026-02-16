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

    return `
    <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="index.html" class="flex items-center">
                <img src="/portfolio/images/logo.png" alt="Vimal Babu" class="h-8 w-auto">
            </a>
            <div class="flex gap-8">
                ${navLinks}
            </div>
        </div>
    </nav>
    `;
}