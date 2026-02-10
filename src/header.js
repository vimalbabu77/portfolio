export function renderHeader() {
    const currentPath = window.location.pathname;
    const isPage = (path) => currentPath.includes(path);

    const navItems = [
        { name: 'Home', path: 'index.html' },
        { name: 'Portfolio', path: 'portfolio.html' },
        { name: 'About', path: 'about.html' }
    ];

    const navLinks = navItems.map(item => {
        const isActive = isPage(item.path) || (item.path === 'index.html' && (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/')));
        return `<a href="${item.path}" class="text-sm font-medium ${isActive ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors">${item.name}</a>`;
    }).join('');

    return `
    <nav class="fixed top-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/5">
        <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="index.html" class="flex items-center">
                <img src="/docs/images/logo.png" alt="Vimal Babu" class="h-8 w-auto brightness-0 invert">
            </a>
            <div class="flex gap-8">
                ${navLinks}
            </div>
        </div>
    </nav>
    `;
}
