export function renderFooter() {
    return `
    <footer class="py-20 px-6 bg-white border-t border-gray-200 text-[#111]">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="flex flex-col items-center md:items-start gap-4">
                <img src="/portfolio/images/logo.png" alt="Vimal Babu" class="h-6 w-auto">
                <p class="text-sm text-gray-500">© 2026 Vimal Babu Kalappattil</p>
            </div>
            <div class="flex gap-8">
                <a href="mailto:vimalbabu77@gmail.com" class="text-sm font-medium text-gray-500 hover:text-black transition-colors">Email</a>
                <a href="#" class="text-sm font-medium text-gray-500 hover:text-black transition-colors">LinkedIn</a>
            </div>
        </div>
    </footer>
    `;
}
