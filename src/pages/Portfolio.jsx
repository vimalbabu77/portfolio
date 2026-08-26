import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = {
    websites: [
        { title: 'One.com Templates', img: `${import.meta.env.BASE_URL}images/onecom-templates.png`, desc: 'Responsive website templates...', tags: ['UI Design', 'Web Development'], link: '/portfolio/onecom' },
        { title: 'IPSEOS', img: `${import.meta.env.BASE_URL}images/ipseos.png`, desc: 'High-impact digital solutions...', tags: ['Figma', 'UI Design'], link: '/portfolio/ipseos' },
        { title: 'E-SoftSat', img: `${import.meta.env.BASE_URL}images/esoftsat.png`, desc: 'Specialized technical operations...', tags: ['Web Development', 'PHP'], link: '/portfolio/softsat' },
        { title: 'Dr. Nadia Buhannad', img: `${import.meta.env.BASE_URL}images/nadia1.png`, desc: 'High-end UI/UX specialized...', tags: ['UX Research', 'Figma'], link: '/portfolio/nadia' },
        { title: 'Flabba', img: `${import.meta.env.BASE_URL}images/flabba.png`, desc: 'Optimized Figma-to-production...', tags: ['Frontend Dev', 'Tailwind CSS'], link: '/portfolio/flabba' },
        { title: 'HighEx Logistics', img: `${import.meta.env.BASE_URL}images/highexlogistics.png`, desc: 'Streamlined web platform...', tags: ['Service Design', 'Web Solutions'], link: '/portfolio/highex' },
        { title: 'GlobalTT SS', img: `${import.meta.env.BASE_URL}images/globaltt-ss.png`, desc: 'Comprehensive digital platform...', tags: ['Enterprise Web', 'Technical Architecture'], link: '/portfolio/globaltt' },
    ],
    animation: [
        { title: 'Motion Graphics: Satellite and Drones', img: `${import.meta.env.BASE_URL}Video/SOTM.png`, desc: 'Showcase of advanced satellite...', video: `${import.meta.env.BASE_URL}Video/SATELLITE ON THE MOVE FOR DRONES.mp4` },
    ],
    brochure: [],
    logos: []
};

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('websites');
    const [videoSrc, setVideoSrc] = useState(null);

    const tabs = [
        { id: 'websites', name: 'Websites & Templates' },
        { id: 'animation', name: 'Animation & Video Projects' },
        { id: 'brochure', name: 'Brochure and Flyers' },
        { id: 'logos', name: 'Logos and Graphics' },
    ];

    return (
        <div className="bg-white text-[#111]">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 uppercase">Selected <span className="text-gray-400 font-light">Projects</span></h1>
                </header>

                <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 pb-4">
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`text-sm font-bold pb-4 border-b-2 ${activeTab === tab.id ? 'border-black' : 'border-transparent text-gray-400'}`}>
                            {tab.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects[activeTab].map((project, idx) => {
                        const CardContent = (
                            <>
                                <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6 relative cursor-pointer" onClick={(e) => { if (project.video) { e.preventDefault(); setVideoSrc(project.video); } }}>
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                                    {project.video && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                                            <i className="fa-solid fa-play text-white text-4xl"></i>
                                        </div>
                                    )}
                                </div>
                                <h2 className="text-xl font-bold text-black mb-2">{project.title}</h2>
                                <p className="text-sm text-gray-500 leading-relaxed">{project.desc}</p>
                            </>
                        );

                        return project.link ? (
                            <Link key={idx} to={project.link} className="bento-card p-8 border border-gray-100 rounded-2xl group flex flex-col justify-between overflow-hidden">
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={idx} className="bento-card p-8 border border-gray-100 rounded-2xl group flex flex-col justify-between overflow-hidden">
                                {CardContent}
                            </div>
                        );
                    })}
                    {projects[activeTab].length === 0 && <p className="text-gray-500">No projects in this category.</p>}
                </div>
            </main>
            <Footer />

            {videoSrc && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button onClick={() => setVideoSrc(null)} className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                    <video src={videoSrc} controls className="max-w-4xl w-full rounded-xl" autoPlay />
                </div>
            )}
        </div>
    );
};

export default Portfolio;
