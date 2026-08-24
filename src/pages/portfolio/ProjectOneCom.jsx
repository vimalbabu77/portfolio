import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProjectOneCom = () => {
    return (
        <div className="bg-white text-[#111]">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <header className="mb-16">
                    <Link to="/portfolio" className="text-sm font-medium text-gray-400 hover:text-black transition-colors mb-8 inline-block">
                        ← Back to Portfolio
                    </Link>
                    <h1 className="text-5xl font-semibold tracking-tight mb-4 uppercase">One.com Templates.</h1>
                    <p className="text-lg text-gray-400 font-medium">Digital Template Design & Development</p>
                </header>

                <section className="mb-16">
                    <div className="aspect-[16/9] bg-[#f9f9f9] rounded-3xl overflow-hidden border border-[#eeeeee] mb-16">
                        <img src={`${import.meta.env.BASE_URL}images/onecom-templates.png`} alt="One.com Website Builder Templates" className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Project Details</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Overview</h2>
                            <p className="text-gray-500 leading-relaxed mb-8 text-base">
                                This project involved the design and development of a comprehensive suite of responsive website templates for One.com's proprietary site builder platform. The goal was to provide users with modern, high-converting layouts that are easy to customize.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-8 text-base">
                                I focused on creating a diverse range of templates catering to various industries, from e-commerce to personal portfolios, ensuring that each template adhered to the highest standards of UI/UX design and technical performance.
                            </p>
                            
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1 mt-12">Project Impact</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Key Responsibilities</h2>
                            <ul className="text-gray-500 leading-relaxed space-y-3 list-disc list-inside text-base">
                                <li>Designed and developed multiple responsive website templates using modern web technologies.</li>
                                <li>Optimized template performance for fast loading speeds and excellent SEO rankings.</li>
                                <li>Collaborated with the product and engineering teams to ensure templates were fully compatible with the platform's drag-and-drop editor.</li>
                                <li>Conducted usability testing to refine template layouts and improve user engagement.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Collaboration</p>
                            <h2 className="text-2xl font-bold mb-6 text-black">Role & Tools</h2>
                            <ul className="text-sm text-gray-500 space-y-4">
                                <li>
                                    <span className="block text-black font-medium">My Role</span>
                                    Template Designer & Developer
                                </li>
                                <li>
                                    <span className="block text-black font-medium mb-2">Tools</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white">HTML5</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white">CSS3</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white">JavaScript</span>
                                        <span className="px-3 py-1.5 rounded-full border border-gray-100 bg-white">UI/UX Design</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="block text-black font-medium">Duration</span>
                                    Completed
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

export default ProjectOneCom;