export function renderFooter() {
    const navItems = [
        { name: 'Home', path: 'index.html' },
        { name: 'Portfolio', path: 'portfolio.html' },
        { name: 'Skills', path: 'skills.html' },
        { name: 'Experience', path: 'experience.html' },
        { name: 'About', path: 'about.html' },
        { name: 'Contact', path: 'contact.html' }
    ];

    const navLinks = navItems.map(item => 
        `<a href="${item.path}" class="text-sm font-medium text-gray-500 hover:text-black transition-colors">${item.name}</a>`
    ).join('');

    return `
    <footer class="py-10 px-6 bg-white border-t border-gray-200 text-[#111]">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                <div class="flex flex-col items-start gap-3">
                    <img src="/portfolio/images/logo.png" alt="Vimal Babu" class="h-6 w-auto">
                    <p class="text-sm text-gray-500 max-w-xs leading-tight">Web Designer & UI/UX Specialist crafting high-impact digital experiences.</p>
                </div>
                <div class="flex flex-wrap gap-x-6 gap-y-2">
                    ${navLinks}
                </div>
            </div>
            
            <div class="pt-6 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-xs text-gray-400">© 2026 Vimal Babu Kalappattil. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="mailto:vimalbabu77@gmail.com" class="text-gray-400 hover:text-black transition-colors" title="Email">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/971566509362" target="_blank" class="text-gray-400 hover:text-[#25D366] transition-colors" title="WhatsApp">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vimalbabu77" target="_blank" class="text-gray-400 hover:text-[#0077b5] transition-colors" title="LinkedIn">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `;
}