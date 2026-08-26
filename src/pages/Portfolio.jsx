import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = {
    websites: [
        { title: 'One.com Templates', img: `${import.meta.env.BASE_URL}images/onecom-templates.webp`, desc: 'Responsive website templates...', tags: ['UI Design', 'Web Development'], link: '/portfolio/onecom' },
        { title: 'IPSEOS', img: `${import.meta.env.BASE_URL}images/ipseos.webp`, desc: 'High-impact digital solutions...', tags: ['Figma', 'UI Design'], link: '/portfolio/ipseos' },
        { title: 'E-SoftSat', img: `${import.meta.env.BASE_URL}images/esoftsat.webp`, desc: 'Specialized technical operations...', tags: ['Web Development', 'PHP'], link: '/portfolio/softsat' },
        { title: 'Dr. Nadia Buhannad', img: `${import.meta.env.BASE_URL}images/nadia1.webp`, desc: 'High-end UI/UX specialized...', tags: ['UX Research', 'Figma'], link: '/portfolio/nadia' },
        { title: 'Flabba', img: `${import.meta.env.BASE_URL}images/flabba.webp`, desc: 'Optimized Figma-to-production...', tags: ['Frontend Dev', 'Tailwind CSS'], link: '/portfolio/flabba' },
        { title: 'HighEx Logistics', img: `${import.meta.env.BASE_URL}images/highexlogistics.webp`, desc: 'Streamlined web platform...', tags: ['Service Design', 'Web Solutions'], link: '/portfolio/highex' },
        { title: 'GlobalTT SS', img: `${import.meta.env.BASE_URL}images/globaltt-ss.webp`, desc: 'Comprehensive digital platform...', tags: ['Enterprise Web', 'Technical Architecture'], link: '/portfolio/globaltt' },
    ],
    animation: [
        { title: 'GlobalTT Intro', img: `${import.meta.env.BASE_URL}Video/GTT.webp`, desc: 'Introduction to GlobalTT satellite services.', video: `${import.meta.env.BASE_URL}Video/GLOBALTT%20INTRO.mp4` },
        { title: 'Who we are - Satellite differences', img: `${import.meta.env.BASE_URL}Video/GTT2.webp`, desc: 'Understanding satellite technologies.', video: `${import.meta.env.BASE_URL}Video/Who%20We%20Are%20-%20Satellite%20Differences.mp4` },
        { title: 'How Teleports Work', img: `${import.meta.env.BASE_URL}Video/HIW.webp`, desc: 'A look at how teleports function.', video: `${import.meta.env.BASE_URL}Video/How%20Teleports%20WOrks.mp4` },
        { title: 'GlobalTT MWC Short Video', img: `${import.meta.env.BASE_URL}Video/MWC.png`, desc: 'Highlight from MWC event.', video: `${import.meta.env.BASE_URL}Video/Globaltt%20Mwc%20Short%20Video%20Ver-4%20Min.mp4` },
        { title: 'Satellite on the Move for Drones', img: `${import.meta.env.BASE_URL}Video/SOTM.webp`, desc: 'Advanced satellite solutions for drones.', video: `${import.meta.env.BASE_URL}Video/SATELLITE%20ON%20THE%20MOVE%20FOR%20DRONES.mp4` },
    ],
    brochure: [
        { title: 'GlobalTT Profile Flyer', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/A3-A4_bifold_Flayer_GLOBALTT_Profile_ENG-min.pdf` },
        { title: 'GLOBALTT General Brochure', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/GLOBALTT_GENERAL_BROCHURE_VER_8.6_JAN_2023_(26-01-2023).pdf` },
        { title: 'Maritime Brochure', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/MARITIME_BROCHURE_TRIFOLD_A4.pdf` },
        { title: 'WiFi Hotspot Brochure', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/WIFI_HOTSPOT_BROCHURE_A4_TRIPIC_GLOBALTT.pdf` },
        { title: 'Kymeta Terminal Brochure', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/Kymeta_brochure_U8_Terminal.pdf` },
        { title: 'IP-Satcube Version 1', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/IP-SATCUBE_1IPSEOS_VERSION_1.pdf` },
        { title: 'Virtual Manager ERP', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/VIRTUAL_MANAGER_ERP_MODL-3.pdf` },
        { title: 'Hirec 100 Brochure', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/HIREC_100_WATER_REPELLENT_A4_TRIPIC_BROCHURE_GLOBALTT.pdf` },
        { title: 'Tracker Stick Brochure', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/Brochure_Tracker_Stick_A4_GLOBALTT_&_IPSEOS.pdf` },
        { title: 'GlobalTT Orion IP Brochure', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/GLOBALTT_Brochure_Orion_IP_A4.pdf` },
        { title: 'GlobalTT Orion Edge 2 Brochure', img: `${import.meta.env.BASE_URL}brochures-flyers/A4_Brochure_Mockup_-_8.4_Version.png`, file: `${import.meta.env.BASE_URL}brochures-flyers/GLOBALTT_Broshure_Orion_Edge_2_A4.pdf` },
        { title: 'Night Booster', img: `${import.meta.env.BASE_URL}brochures-flyers/night_booster.jpg`, file: `${import.meta.env.BASE_URL}brochures-flyers/night_booster.jpg` },
    ],
    logos: {
        logos: [
            { title: 'Awawdeh Auto', img: `${import.meta.env.BASE_URL}Graphics/logo/awawdeh-auto-spare-parts.png` },
            { title: 'E-SoftSat', img: `${import.meta.env.BASE_URL}Graphics/logo/esoftsat-01.png` },
            { title: 'GlobalTT SS', img: `${import.meta.env.BASE_URL}Graphics/logo/GLOBALTT_SS_LOGO_ART_new_logo_1.jpg` },
            { title: 'GlobalTT', img: `${import.meta.env.BASE_URL}Graphics/logo/GLOBALTT.png` },
            { title: 'IPSEOS', img: `${import.meta.env.BASE_URL}Graphics/logo/ipseos_new_selected_logo_26-11-2020-01.png` },
        ],
        graphics: [
            { title: 'Clouding Banner', img: `${import.meta.env.BASE_URL}Graphics/Graphics/CLOUDING_BANNER_NEW-01-01.png` },
            { title: 'GlobalTT Coverage', img: `${import.meta.env.BASE_URL}Graphics/Graphics/FULL_GLOBE_COVERAGE_PRINT_CMYK_VERSION-01.png` },
            { title: 'Wifi Diagram', img: `${import.meta.env.BASE_URL}Graphics/Graphics/Point_to_Point_Wifi_Connection_Diagram_2-01.png` },
        ]
    }
};

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('websites');
    const [modalContent, setModalContent] = useState(null);

    const tabs = [
        { id: 'websites', name: 'Websites & Templates' },
        { id: 'animation', name: 'Animation & Video Projects' },
        { id: 'brochure', name: 'Brochure and Flyers' },
        { id: 'logos', name: 'Logos and Graphics' },
    ];

    const renderProjects = () => {
        if (activeTab === 'logos') {
            return (
                <>
                    <div className="col-span-full mt-6">
                        <h3 className="text-2xl font-bold text-black">Logos</h3>
                    </div>
                    {projects.logos.logos.map((project, idx) => renderCard(project, idx))}
                    <div className="col-span-full mt-12">
                        <h3 className="text-2xl font-bold text-black">Graphics</h3>
                    </div>
                    {projects.logos.graphics.map((project, idx) => renderCard(project, idx))}
                </>
            );
        }
        return projects[activeTab].map((project, idx) => renderCard(project, idx));
    };

    const renderCard = (project, idx) => {
        const CardContent = (
            <>
                <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6 relative cursor-pointer" onClick={(e) => { 
                    if (project.video) { e.preventDefault(); setModalContent({ type: 'video', src: project.video }); }
                    else if (project.file) { e.preventDefault(); setModalContent({ type: 'file', src: project.file }); }
                    else { e.preventDefault(); setModalContent({ type: 'image', src: project.img }); }
                }}>
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                    {(project.video || project.file || !project.link) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                            <i className={`fa-solid ${project.video ? 'fa-play' : 'fa-expand'} text-white text-4xl`}></i>
                        </div>
                    )}
                </div>
                <h2 className="text-xl font-bold text-black mb-2">{project.title}</h2>
                {project.desc && <p className="text-sm text-gray-500 leading-relaxed">{project.desc}</p>}
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
    };

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
                    {renderProjects()}
                </div>
            </main>
            <Footer />

            {modalContent && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button onClick={() => setModalContent(null)} className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                    {modalContent.type === 'video' && <video src={modalContent.src} controls className="max-w-4xl w-full rounded-xl" autoPlay />}
                    {modalContent.type === 'file' && <iframe src={modalContent.src} className="max-w-4xl w-full h-[80vh] rounded-xl" />}
                    {modalContent.type === 'image' && <img src={modalContent.src} className="max-w-4xl w-full rounded-xl" />}
                </div>
            )}
        </div>
    );
};

export default Portfolio;
