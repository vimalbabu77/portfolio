import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Skills', path: '/skills' },
        { name: 'Experience', path: '/experience' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => location.pathname === path || (path === '/' && location.pathname === '/index.html');

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center shrink-0">
                    <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Vimal Babu" className="h-10 md:h-12 w-auto" />
                </Link>

                <div className="hidden md:flex gap-8">
                    {navItems.map(item => (
                        <Link 
                            key={item.path} 
                            to={item.path} 
                            className={`text-sm font-medium ${isActive(item.path) ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-black focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col">
                    {navItems.map(item => (
                        <Link 
                            key={item.path} 
                            to={item.path} 
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-base font-semibold ${isActive(item.path) ? 'text-black' : 'text-gray-500'} py-4 border-b border-gray-50`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;
