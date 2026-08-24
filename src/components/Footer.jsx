const Footer = () => {
    return (
        <footer className="py-16 px-6 bg-gray-50 text-gray-600">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Brand Section */}
                <div>
                    <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo" className="h-10 mb-4" />
                    <p className="text-sm leading-relaxed max-w-sm">
                        Creative Web Designer & UI/UX Specialist with expertise in turning complex concepts into seamless, high-impact digital solutions.
                    </p>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-bold text-black mb-6">Connect With Me</h3>
                    <div className="flex flex-col gap-4 text-sm">
                        <a href="https://www.linkedin.com/in/vimalbabu77" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-black transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            LinkedIn
                        </a>
                        <a href="https://wa.me/971566509362" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-black transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.02-4.5 10.02-10.02 0-5.52-4.5-10.02-10.02-10.02-5.52 0-10.02 4.5-10.02 10.02 0 1.956.566 3.815 1.48 5.44l-.995 3.639 3.744-.982z"/></svg>
                            WhatsApp
                        </a>
                        <a href="tel:+971566509362" className="flex items-center gap-3 hover:text-black transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.007.004-1.974 1.07-2.079 1.129l-3.5 1.75c-3.111-1.782-5.679-4.35-7.461-7.461l1.75-3.5c.059-.105 1.125-2.072 1.129-2.079l-6.795-3.521c-.302.583-.541 1.188-.714 1.807-.714 2.571-.714 5.357 0 7.928 1.455 5.253 5.489 9.287 10.742 10.742 2.571.714 5.357.714 7.928 0 .619-.173 1.224-.412 1.807-.714z"/></svg>
                            {'+971-566509362'}
                        </a>
                        <a href="mailto:vimalkalappattil@gmail.com" className="flex items-center gap-3 hover:text-black transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                            {'vimalkalappattil@gmail.com'}
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} Vimal Babu Kalappattil. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
