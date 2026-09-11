import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProjectShuttleIQ = () => {
    const [modalContent, setModalContent] = useState(null);

    const pdfDeliverables = [
        {
            title: 'Authentication & User Flows',
            subtitle: 'Secure Sign-In & Onboarding Journeys',
            desc: 'Comprehensive UX flows mapping secure login, user authentication, password recovery, and customized profile registration paths.',
            file: `${import.meta.env.BASE_URL}shuttleIQ/authentication pages.pdf`,
            bgGradient: 'from-amber-50 to-orange-50 border-orange-100',
            iconColor: 'text-orange-500',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            title: 'Container & Layout Systems',
            subtitle: 'Structural Grids & Interface Wireframes',
            desc: 'Detailed structural wireframes showing container alignment, grid boundaries, content density, and modular components across various viewport sizes.',
            file: `${import.meta.env.BASE_URL}shuttleIQ/containers.pdf`,
            bgGradient: 'from-blue-50 to-indigo-50 border-blue-100',
            iconColor: 'text-indigo-500',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 4v16M15 4v16M4 9h16M4 15h16" />
                </svg>
            )
        },
        {
            title: 'Brand & Visual Guidelines',
            subtitle: 'Visual Identity, Assets & Design Tokens',
            desc: 'Design assets, style guides, logo configurations, core typography scales, and visual guidelines that define shuttleIQs brand language.',
            file: `${import.meta.env.BASE_URL}shuttleIQ/assets.pdf`,
            bgGradient: 'from-purple-50 to-pink-50 border-purple-100',
            iconColor: 'text-purple-500',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            title: 'Player Interface Design',
            subtitle: 'Media Consumption & Playback Experience',
            desc: 'The complete UX specification of the multimedia player, illustrating control mechanisms, stream handling, interactive overlays, and dynamic states.',
            file: `${import.meta.env.BASE_URL}shuttleIQ/User/Player.pdf`,
            bgGradient: 'from-teal-50 to-emerald-50 border-teal-100',
            iconColor: 'text-teal-500',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Organizer & Admin Portal',
            subtitle: 'Event Coordination & Analytics Dashboard',
            desc: 'The administrative portal layout, mapping event creation, participant tracking, performance reporting, system monitoring, and organizer control systems.',
            file: `${import.meta.env.BASE_URL}shuttleIQ/Organizer/game admin.pdf`,
            bgGradient: 'from-sky-50 to-blue-50 border-sky-100',
            iconColor: 'text-sky-500',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-white text-[#111]">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <header className="mb-16">
                    <Link to="/portfolio" className="text-sm font-medium text-gray-400 hover:text-black transition-colors mb-8 inline-block">
                        ← Back to Portfolio
                    </Link>
                    <h1 className="text-5xl font-semibold tracking-tight mb-4 uppercase">shuttleIQ.</h1>
                    <p className="text-lg text-gray-400 font-medium">UI/UX Research & Interface Design Case Study</p>
                </header>

                <section className="mb-20">
                    <div className="aspect-[16/9] bg-[#f9f9f9] rounded-3xl overflow-hidden border border-[#eeeeee] mb-16">
                        <img src={`${import.meta.env.BASE_URL}images/shuttleiq-hero.jpg`} alt="shuttleIQ Overview" className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                        <div className="md:col-span-2">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Project Details</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
                            <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                shuttleIQ is a community-driven platform and booking system designed for badminton players in the UAE (primarily Dubai). The project focuses on streamlining the flow of finding and reserving sessions while fostering a competitive yet social sports environment.
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                I led the research, architectural structuring, and blueprint designs to create a high-performance ecosystem. The platform serves as a vital hub for players, offering quick venue reservations, smart matchmaking, and a unique community tagging system to recognize player styles.
                            </p>
                            
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1 mt-12">Core Platform Features</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Architectural Focus</h2>
                            <ul className="text-sm text-gray-500 leading-relaxed space-y-3 list-disc list-inside">
                                <li><span className="text-black font-medium">Session Booking:</span> Designed a quick, easy interface to find and reserve badminton sessions, venues, and time slots across different locations in Dubai.</li>
                                <li><span className="text-black font-medium">Smart Matchmaking & Rankings:</span> Engineered UX flows for balanced pairings based on player skill levels, live leaderboards, and tracked player stats.</li>
                                <li><span className="text-black font-medium">Community Recognition:</span> Implemented a fun tagging system where players can recognize each other after games (e.g., "Tactical Player," "Calm & Composed").</li>
                                <li><span className="text-black font-medium">Regional Groups:</span> Created structural layouts for regional community groups to help players organize matches and find local partners.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Collaboration</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Role & Tools</h2>
                            <ul className="text-sm text-gray-500 space-y-4">
                                <li>
                                    <span className="block text-black font-medium">My Role</span>
                                    Lead UI/UX Architect
                                </li>
                                <li>
                                    <span className="block text-black font-medium mb-2">Tools</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">Figma</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">Figma Make(AI)</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">Photoshop</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">Illustrator</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">UI/UX Research</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white text-xs">Design Systems</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="block text-black font-medium">Duration</span>
                                    3 Months
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* PDF Design Deliverables Showcases */}
                    <div className="border-t border-gray-100 pt-16">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1 text-left">Interactive Showcase</p>
                        <h2 className="text-3xl font-bold text-left text-black mb-12">Design Deliverables & Specifications</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pdfDeliverables.map((pdf, idx) => (
                                <div key={idx} className="bento-card p-8 border border-gray-100 rounded-2xl flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] group transition-all duration-300">
                                    <div>
                                        <div className={`w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-black mb-6 group-hover:scale-105 transition-transform duration-300`}>
                                            {pdf.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-1 group-hover:text-black transition-colors">{pdf.title}</h3>
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-3">{pdf.subtitle}</p>
                                        <p className="text-sm text-gray-500 leading-relaxed mb-6">{pdf.desc}</p>
                                    </div>
                                    <div className="flex gap-3 mt-4">
                                        <button 
                                            onClick={() => setModalContent({ type: 'file', src: pdf.file, title: pdf.title })} 
                                            className="flex-1 py-2.5 px-4 rounded-xl border border-black bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors text-center shadow-sm"
                                        >
                                            View PDF
                                        </button>
                                        <a 
                                            href={pdf.file} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="py-2.5 px-4 rounded-xl border border-gray-100 bg-white text-gray-600 hover:text-black hover:border-black/20 text-xs font-semibold transition-colors text-center flex items-center justify-center"
                                            title="Open in new tab"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Premium PDF Viewer Modal */}
            {modalContent && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300">
                    <div className="bg-white max-w-5xl w-full h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 relative animate-in fade-in zoom-in duration-300">
                        <header className="px-8 py-5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">PDF Showcase Viewer</span>
                                <h3 className="text-lg font-bold text-black">{modalContent.title}</h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <a 
                                    href={modalContent.src} 
                                    download 
                                    className="p-2.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
                                    title="Download PDF"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </a>
                                <button 
                                    onClick={() => setModalContent(null)} 
                                    className="p-2.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </header>
                        <div className="flex-1 bg-gray-100 p-4 overflow-hidden relative">
                            <iframe 
                                src={`${modalContent.src}#toolbar=0`} 
                                className="w-full h-full rounded-2xl border border-gray-200 shadow-sm bg-white" 
                                title={modalContent.title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectShuttleIQ;
