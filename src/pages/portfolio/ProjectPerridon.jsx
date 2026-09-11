import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProjectPerridon = () => {
    const [modalContent, setModalContent] = useState(null);

    const deliverables = [
        { title: 'Home Page', file: `${import.meta.env.BASE_URL}perridon/HOME.jpg` },
        { title: 'Safari Page', file: `${import.meta.env.BASE_URL}perridon/SAFARI.jpg` },
        { title: 'Wildlife Page', file: `${import.meta.env.BASE_URL}perridon/Wildlife.jpg` },
        { title: 'Accommodation Page', file: `${import.meta.env.BASE_URL}perridon/ACCOMMODATION.jpg` },
        { title: 'Package Page', file: `${import.meta.env.BASE_URL}perridon/PACKAGE.jpg` },
        { title: 'Contact Us', file: `${import.meta.env.BASE_URL}perridon/CONTACT US.jpg` },
    ];

    return (
        <div className="bg-white text-[#111]">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <header className="mb-16">
                    <Link to="/portfolio" className="text-sm font-medium text-gray-400 hover:text-black transition-colors mb-8 inline-block">
                        ← Back to Portfolio
                    </Link>
                    <h1 className="text-5xl font-semibold tracking-tight mb-4 uppercase">Perridon Webpages.</h1>
                    <p className="text-lg text-gray-400 font-medium">Landing Page Design & UI Layouts</p>
                </header>

                <section className="mb-20">
                    <div className="aspect-[16/9] bg-[#f9f9f9] rounded-3xl overflow-hidden border border-[#eeeeee] mb-16">
                        <img src={`${import.meta.env.BASE_URL}images/perridon-hero.jpg`} alt="Perridon Overview" className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                        <div className="md:col-span-2">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Project Details</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
                            <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                Perridon Webpages focused on crafting immersive, high-converting landing pages tailored for a premium travel and safari experience. The design emphasizes visual storytelling, clear call-to-action paths, and user-friendly navigation across key service sections.
                            </p>
                            
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1 mt-12">Design Focus</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Architectural Approach</h2>
                            <ul className="text-sm text-gray-500 leading-relaxed space-y-3 list-disc list-inside">
                                <li><span className="text-black font-medium">Visual Storytelling:</span> High-impact imagery paired with clean, modern typography to evoke an adventurous, luxury atmosphere.</li>
                                <li><span className="text-black font-medium">Conversion Optimization:</span> Streamlined layout paths for package bookings and inquiries to minimize bounce rates.</li>
                                <li><span className="text-black font-medium">Responsive Experience:</span> Pixel-perfect grid implementation ensuring seamless interaction on both desktop and mobile devices.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Collaboration</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Role & Tools</h2>
                            <ul className="text-sm text-gray-500 space-y-4">
                                <li>
                                    <span className="block text-black font-medium">My Role</span>
                                    UI/UX Designer
                                </li>
                                <li>
                                    <span className="block text-black font-medium mb-2">Tools</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">Figma</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">Photoshop</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">UI Design</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="block text-black font-medium">Duration</span>
                                    2 Months
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Deliverables Showcase */}
                    <div className="border-t border-gray-100 pt-16">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1 text-left">Interactive Showcase</p>
                        <h2 className="text-3xl font-bold text-left text-black mb-12">Landing Page Designs</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {deliverables.map((item, idx) => (
                                <div key={idx} className="bento-card p-8 border border-gray-100 rounded-2xl flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] group transition-all duration-300">
                                    <div>
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-black mb-6 group-hover:scale-105 transition-transform duration-300">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-1 group-hover:text-black transition-colors">{item.title}</h3>
                                    </div>
                                    <button 
                                        onClick={() => setModalContent({ type: 'image', src: item.file, title: item.title })} 
                                        className="mt-6 w-full py-2.5 px-4 rounded-xl border border-black bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors text-center shadow-sm"
                                    >
                                        View Design
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Image Viewer Modal */}
            {modalContent && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300">
                    <div className="bg-white max-w-5xl w-full h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 relative animate-in fade-in zoom-in duration-300">
                        <header className="px-8 py-5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Design Showcase</span>
                                <h3 className="text-lg font-bold text-black">{modalContent.title}</h3>
                            </div>
                            <button 
                                onClick={() => setModalContent(null)} 
                                className="p-2.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </header>
                        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
                            <img src={modalContent.src} alt={modalContent.title} className="w-full h-auto rounded-2xl border border-gray-200 shadow-sm" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectPerridon;
