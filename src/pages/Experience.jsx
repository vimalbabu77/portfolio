import Header from '../components/Header';
import Footer from '../components/Footer';

const Experience = () => {
    const experiences = [
        {
            company: 'one.com',
            role: 'Web Developer & Internal IT Administrator',
            period: 'Sep 2023 - Present',
            logo: '/images/onecom_logo.jpg',
            description: 'one.com is a global web hosting and online solutions provider founded in Denmark in 2002, the company is part of the group.one network and serves over one million customers worldwide. The Dubai office supports its worldwide operations, offering services such as domain registration, cloud hosting, website builders, professional email, and WordPress hosting for individuals and businesses.',
            responsibilities: [
                'Dynamic AI Website Template Developer with One.com’s core Website Builder team; delivered 20+ production website templates.',
                'Converted Figma UI/UX designs into production-ready templates with full design consistency.',
                'Created wireframes, prototypes, and UI layouts using Figma.',
                'Analyzed user behavior using Mixpanel to optimize template performance and adoption.',
                'Curated and optimized template images aligned with GMB keyword strategies.',
                'Served as Scrum Master, supporting agile ceremonies and sprint delivery.',
                'Performed unit testing and validation in staging environments.',
                'Provided IT support and asset management for the Dubai office, coordinating with the Copenhagen team.'
            ]
        },
        {
            company: 'GlobalTT (E‑SoftSat)',
            role: 'UI/UX Developer & Web Developer',
            period: 'Jan 2019 - Aug 2023',
            logo: '/images/GTT.png',
            description: 'GLOBALTT is an independent satellite telecom operator providing global VSAT, satellite internet, telephony, IoT, and secure connectivity solutions. The company delivers reliable GEO and LEO satellite communications, supporting enterprises, governments, NGOs, and critical operations worldwide. Esoftsat is the IT operations and support division of GLOBALTT, focusing on infrastructure management, technical support, and system maintenance to ensure secure and continuous connectivity services for business operations.',
            responsibilities: [
                'Designed and developed responsive corporate and product websites.',
                'Designed press-ready print brochures and optimized digital marketing materials.',
                'Worked as an exhibition coordinator & designer for Dubai & Africa based exhibitions.',
                'Managed hosting, domains, DNS records, backups, and website security.',
                'Built UI/UX wireframes and prototypes aligned with business requirements.',
                'Provided IT and technical support for internal teams and digital platforms.',
                'Maintained version control and deployments using Git.'
            ]
        },
        {
            company: 'Awawdeh Auto Spare Parts',
            role: 'Web Developer',
            period: 'Apr 2018 - Jan 2019',
            logo: '/images/awawdeh.jpg',
            description: 'Awawdeh Auto Spare Parts is a leading automotive spare parts supplier established in 1996, specializing in new, used, and aftermarket Mercedes-Benz and BMW parts. The company serves customers across the GCC and MENA regions with a wide range of quality-graded parts, competitive pricing, and worldwide delivery through its retail and online store.',
            responsibilities: [
                'Developed and maintained WordPress-based business websites.',
                'Administered website content, plugins, updates, and performance optimization.',
                'Assisted with SEO improvements and technical support.'
            ]
        },
        {
            company: 'Bharati Information Technologies',
            role: 'UI Developer',
            period: 'Oct 2016 - Dec 2017',
            logo: '/images/BIT.jpg',
            description: 'Bharathi Information Technologies is a web and mobile application development company founded in 2011, providing services such as web design, custom web applications, mobile app development, UI/UX design, e-commerce solutions, and .NET development for global clients. 2 years back they changed thier company name to Techmaven IT Solutions Pvt. Ltd.',
            responsibilities: [
                'Developed UI components and responsive web pages.',
                'Collaborated with developers to improve usability and accessibility.'
            ]
        },
        {
            company: 'PK DAS Institute of Medical Science',
            role: 'System Analyst',
            period: 'Aug 2015 - Oct 2016',
            logo: '/images/PKDIMS.jpg',
            description: 'PK DAS Institute of Medical Sciences (PKDIMS) is a super-specialty medical college and hospital in Ottapalam, Kerala, offering MBBS and postgraduate medical education along with advanced patient care. With a large multi-specialty hospital and modern campus facilities, the institution focuses on medical education, research, and high-quality healthcare services.',
            responsibilities: [
                'Managed institutional website and digital platforms.',
                'Provided system analysis, documentation, and technical coordination.'
            ]
        }
    ];

    return (
        <div className="bg-white text-[#111]">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 uppercase">
                        Professional <span className="text-gray-400 font-light">Experience</span>
                    </h1>
                </header>

                <div className="relative border-l-2 border-gray-100 ml-3 md:ml-6 space-y-16">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12">
                            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-white bg-black shadow-sm"></span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">{exp.period}</span>
                            <div className="bento-card p-8 border border-gray-100 rounded-2xl">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                                    <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain rounded-lg border border-gray-100 p-2" />
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-1 leading-tight">{exp.role}</h3>
                                        <p className="text-sm font-medium text-gray-500">{exp.company}, Dubai, UAE</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed italic mb-8">{exp.description}</p>
                                <div>
                                    <h4 className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Key Responsibilities</h4>
                                    <ul className="text-sm text-gray-600 space-y-3 leading-relaxed">
                                        {exp.responsibilities.map((resp, rIdx) => (
                                            <li key={rIdx} className="flex items-start"><span className="mr-3 text-black font-bold">•</span> {resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Experience;
