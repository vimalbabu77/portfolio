import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-white text-[#111] min-h-screen">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-12">

                    {/* Hero Section */}
                    <div className="md:col-span-4 bento-card p-8 border border-gray-100 rounded-2xl flex flex-col justify-between min-h-[300px]">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 uppercase text-[#111]">
                                VIMAL BABU <span className="font-light text-gray-400">Kalappattil</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-8">
                                Web Designer | UI/UX Specialist | Graphic Designer
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                                Creative and results-driven Web Designer with extensive experience in leading high-impact digital and print projects. Specialized in Adobe Creative Suite and Figma-to-production workflows, with a proven track record of delivering 20+ production-ready templates for one.com. Expert in maintaining brand consistency across social media, digital assets, and print collateral, complemented by strong Agile/Scrum leadership and technical stakeholder communication.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a href="/cv.pdf" download className="inline-flex items-center px-6 py-2 bg-gray-500 text-white text-sm font-bold rounded-full hover:bg-black transition-colors">
                                Download Resume
                            </a>
                            <a href="https://www.linkedin.com/in/vimalbabu77" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-2 border border-[#111] text-[#111] text-sm font-bold rounded-full hover:bg-gray-100 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* About Card */}
                    <Link to="/about" className="md:col-span-2 bento-card border border-gray-100 rounded-2xl group relative overflow-hidden flex flex-col justify-end p-8">
                        <div className="absolute inset-0 z-0">
                            <img src={`${import.meta.env.BASE_URL}images/VML.jpg`} alt="Vimal Babu" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-1">About Me</h2>
                            <p className="text-sm text-white/90">Read my story and journey.</p>
                        </div>
                    </Link>

                    {/* Core Skills */}
                    <div className="md:col-span-6 bento-card p-8 border border-gray-100 rounded-2xl">
                        <h2 className="text-lg font-bold mb-6 text-[#111]">Core Skills</h2>
                        <div className="flex flex-wrap gap-4 mb-8">
                            {[
                                { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/000' },
                                { name: 'CSS3', icon: `${import.meta.env.BASE_URL}images/css3.png` },
                                { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/000' },
                                { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/000' },
                                { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/000' },
                                { name: 'React', icon: 'https://cdn.simpleicons.org/react/000' },
                                { name: 'Photoshop', icon: `${import.meta.env.BASE_URL}images/adobe-photoshop.png` },
                                { name: 'Illustrator', icon: `${import.meta.env.BASE_URL}images/adobe-illustrator.png` },
                                { name: 'After Effects', icon: `${import.meta.env.BASE_URL}images/after-effects.png` },
                                { name: 'XD', icon: `${import.meta.env.BASE_URL}images/xd.png` },
                                { name: 'Git', icon: 'https://cdn.simpleicons.org/git/000' },
                                { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/000' }
                            ].map(skill => (
                                <div key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
                                    <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/skills" className="text-sm font-bold text-[#111] hover:border-b hover:border-[#111] pb-1 transition-all">
                            view more skills <span>→</span>
                        </Link>
                    </div>

                    {/* Experience */}
                    <div className="md:col-span-3 bento-card p-8 border border-gray-100 rounded-2xl flex flex-col justify-between h-full">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">Current Experience</p>
                            <h3 className="text-xl font-bold mb-1">Web Developer &amp; Internal IT Administrator</h3>
                            <p className="text-sm font-medium text-gray-600 mb-4">one.com, Dubai, UAE | Sep 2023 - Present</p>
                            <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
                                <li className="flex items-start"><span className="mr-2 text-black">•</span> Delivered 20+ production-ready AI website templates as part of the core team.</li>
                                <li className="flex items-start"><span className="mr-2 text-black">•</span> Converted Figma UI/UX designs into production-ready templates with full consistency.</li>
                                <li className="flex items-start"><span className="mr-2 text-black">•</span> Analyzed user behavior using Mixpanel to optimize template performance.</li>
                                <li className="flex items-start"><span className="mr-2 text-black">•</span> Served as Scrum Master, supporting agile ceremonies and sprint delivery.</li>
                                <li className="flex items-start"><span className="mr-2 text-black">•</span> Provided IT support and asset management, coordinating with the Copenhagen team.</li>
                            </ul>
                            <Link to="/experience" className="inline-block mt-6 text-sm font-bold text-[#111] hover:border-b hover:border-[#111] pb-1 transition-all">
                                More Experiences <span>→</span>
                            </Link>
                        </div>
                    </div>

                    {/* right side: education & language */}
                    <div className="md:col-span-3 flex flex-col gap-6">
                        {/* Education */}
                        <div className="bento-card p-8 border border-gray-100 rounded-2xl flex flex-col flex-1">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">Education</p>
                            <div className="relative border-l border-gray-100 ml-2 space-y-4">
                                <div className="relative pl-6">
                                    <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-black"></span>
                                    <h3 className="text-xl font-bold text-black leading-tight">Master of Computer Applications (MCA)</h3>
                                    <p className="text-sm text-gray-500">University of Calicut | 2014</p>
                                    <ul className="text-sm text-gray-600 space-y-1 leading-relaxed mt-2">
                                        <li className="flex items-start"><span className="mr-2 text-black">•</span> Graduated with First Class (CGPA: 7.2)</li>
                                        <li className="flex items-start"><span className="mr-2 text-black">•</span> Coordinated final-year student projects for the Education Management System</li>
                                        <li className="flex items-start"><span className="mr-2 text-black">•</span> Elected as Association Secretary and led the successful execution of multiple inter-college meets and events</li>
                                    </ul>
                                </div>
                                <div className="relative pl-6">
                                    <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-gray-300"></span>
                                    <h3 className="text-xl font-bold text-black leading-tight">Bachelor of Computer Applications (BCA)</h3>
                                    <p className="text-sm text-gray-500">Bharathiar University | 2011</p>
                                    <ul className="text-sm text-gray-600 space-y-1 leading-relaxed mt-2">
                                        <li className="flex items-start"><span className="mr-2 text-black">•</span> Graduated with First Class (CGPA: 6.5)</li>
                                        <li className="flex items-start"><span className="mr-2 text-black">•</span> Served as Hostel Secretary for two years</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Language */}
                        <div className="bento-card p-8 border border-gray-100 rounded-2xl flex flex-col flex-1 justify-center">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-6">Languages</p>
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-black leading-tight">English</h3>
                                    <p className="text-[8px] text-gray-400 uppercase font-semibold tracking-widest mt-1.5">Professional</p>
                                </div>
                                <div className="h-8 w-px bg-gray-100 shrink-0"></div>
                                <div className="flex-1 px-4">
                                    <h3 className="text-sm font-bold text-black leading-tight">Hindi</h3>
                                    <p className="text-[8px] text-gray-400 uppercase font-semibold tracking-widest mt-1.5">Professional</p>
                                </div>
                                <div className="h-8 w-px bg-gray-100 shrink-0"></div>
                                <div className="flex-1 pl-4 text-right md:text-left">
                                    <h3 className="text-sm font-bold text-black leading-tight">Malayalam</h3>
                                    <p className="text-[8px] text-black font-bold uppercase tracking-widest mt-1.5">Native</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project CTA Section */}
                    <a href="/portfolio" className="md:col-span-6 bento-card p-8 border border-gray-100 rounded-2xl flex items-center justify-between group hover:bg-black transition-all duration-500">
                        <div className="flex items-center gap-8">
                            <h2 className="text-3xl font-medium group-hover:text-white transition-colors">View Portfolio</h2>
                            <div className="hidden md:flex gap-2">
                                <span className="px-3 py-1 rounded-full border border-gray-100 text-[10px] font-medium group-hover:border-white/20 group-hover:text-white transition-all">IPSEOS</span>
                                <span className="px-3 py-1 rounded-full border border-gray-100 text-[10px] font-medium group-hover:border-white/20 group-hover:text-white transition-all">E-SOFTSAT</span>
                                <span className="px-3 py-1 rounded-full border border-gray-100 text-[10px] font-medium group-hover:border-white/20 group-hover:text-white transition-all">FLABBA</span>
                                <span className="px-3 py-1 rounded-full border border-gray-100 text-[10px] font-medium group-hover:border-white/20 group-hover:text-white transition-all uppercase">One.com</span>
                            </div>
                        </div>
                        <svg className="w-8 h-8 group-hover:text-white transform group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
