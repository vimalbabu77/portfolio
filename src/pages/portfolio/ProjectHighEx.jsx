import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProjectHighEx = () => {
    return (
        <div className="bg-white text-[#111]">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <header className="mb-16">
                    <Link to="/portfolio" className="text-sm font-medium text-gray-400 hover:text-black transition-colors mb-8 inline-block">
                        ← Back to Portfolio
                    </Link>
                    <h1 className="text-5xl font-semibold tracking-tight mb-4 uppercase">HIGHEX LOGISTICS.</h1>
                    <p className="text-lg text-gray-400 font-medium">Logistics & International Service Coordination</p>
                </header>

                <section className="mb-16">
                    <div className="aspect-[16/9] bg-[#f9f9f9] rounded-3xl overflow-hidden border border-[#eeeeee] mb-16">
                        <img src="/images/highexlogistics.png" alt="HighEx Logistics" className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Project Details</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
                            <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                HighEx Logistics involved creating a streamlined web platform designed to manage complex logistics operations and facilitate international service coordination. The focus was on efficiency, reliability, and clear communication.
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                The platform provides a robust digital presence that supports the brand's commitment to high-speed delivery and meticulous asset management in the global logistics sector.
                            </p>
                            
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1 mt-12">Project Impact</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Key Responsibilities</h2>
                            <ul className="text-sm text-gray-500 leading-relaxed space-y-3 list-disc list-inside">
                                <li>Collaborated with cross-functional teams to define project requirements and scope.</li>
                                <li>Designed and implemented responsive user interfaces, ensuring optimal user experience across devices.</li>
                                <li>Conducted thorough testing and debugging to deliver high-quality, bug-free solutions.</li>
                                <li>Managed project timelines and deliverables, ensuring successful completion within deadlines.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Collaboration</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Role & Tools</h2>
                            <ul className="text-sm text-gray-500 space-y-4">
                                <li>
                                    <span className="block text-black font-medium">My Role</span>
                                    Web Solutions Designer
                                </li>
                                <li>
                                    <span className="block text-black font-medium mb-2">Tools</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white">UI Design</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white">Web Development</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="block text-black font-medium">Industry</span>
                                    Logistics & Supply Chain
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectHighEx;