import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="bg-white text-[#111]">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 uppercase">
                        Get in <span className="text-gray-400 font-light">Touch</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="bento-card p-8 border border-gray-100 rounded-2xl">
                        <h3 className="text-xl font-bold mb-6 text-black border-b border-gray-100 pb-2">Contact Details</h3>
                        <div className="space-y-6">
                            <a href="mailto:vimalbabu77@gmail.com" className="flex items-center gap-4 hover:text-gray-500 transition-colors text-black">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Email</p>
                                    <p className="font-medium">vimalbabu77@gmail.com</p>
                                </div>
                            </a>
                            <a href="tel:+971566509362" className="flex items-center gap-4 hover:text-gray-500 transition-colors text-black">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.007.004-1.974 1.07-2.079 1.129l-3.5 1.75c-3.111-1.782-5.679-4.35-7.461-7.461l1.75-3.5c.059-.105 1.125-2.072 1.129-2.079l-6.795-3.521c-.302.583-.541 1.188-.714 1.807-.714 2.571-.714 5.357 0 7.928 1.455 5.253 5.489 9.287 10.742 10.742 2.571.714 5.357.714 7.928 0 .619-.173 1.224-.412 1.807-.714z"/></svg>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Phone</p>
                                    <p className="font-medium">+971 56 650 9362</p>
                                </div>
                            </a>
                            <a href="https://wa.me/971566509362" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-gray-500 transition-colors text-black">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.02-4.5 10.02-10.02 0-5.52-4.5-10.02-10.02-10.02-5.52 0-10.02 4.5-10.02 10.02 0 1.956.566 3.815 1.48 5.44l-.995 3.639 3.744-.982z"/></svg>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">WhatsApp</p>
                                    <p className="font-medium">+971 56 650 9362</p>
                                </div>
                            </a>
                            <a href="https://linkedin.com/in/vimalbabu77" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-gray-500 transition-colors text-black">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">LinkedIn</p>
                                    <p className="font-medium">linkedin.com/in/vimalbabu77</p>
                                </div>
                            </a>
                            <div className="flex items-center gap-4 text-black">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 16.398 8 16.398 1.623 0 8-10.155 8-16.398 0-4.199-3.802-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Location</p>
                                    <p className="font-medium">Dubai, United Arab Emirates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bento-card p-8 border border-gray-100 rounded-2xl">
                        <h3 className="text-xl font-bold mb-6 text-black border-b border-gray-100 pb-2">Send a Message</h3>
                        <form action="mailto:vimalbabu77@gmail.com" method="post" encType="text/plain" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
