import Header from '../components/Header';
import Footer from '../components/Footer';

const SkillBar = ({ name, level }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center text-[12px] font-medium">
            <span className="text-black">{name}</span>
            <span className="text-gray-400">{level}%</span>
        </div>
        <div className="h-1 w-full bg-gray-50 rounded-full overflow-hidden">
            <div className="h-full bg-gray-200" style={{ width: `${level}%` }}></div>
        </div>
    </div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: 'Web Development',
            skills: [
                { name: 'HTML5', level: 90 },
                { name: 'CSS3', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'Bootstrap', level: 90 },
                { name: 'PHP', level: 80 },
            ]
        },
        {
            title: 'AI & Platforms',
            skills: [
                { name: 'One.com Website Builder', level: 95 },
                { name: 'JSON + React', level: 80 },
                { name: 'AI Template Dev', level: 90 },
            ]
        },
        {
            title: 'Design Tools',
            skills: [
                { name: 'Adobe Photoshop', level: 95 },
                { name: 'Adobe Illustrator', level: 90 },
                { name: 'Adobe XD', level: 85 },
                { name: 'Adobe After Effects', level: 75 },
                { name: 'Figma', level: 95 },
            ]
        },
        {
            title: 'UI/UX Strategy',
            skills: [
                { name: 'UI/UX Design', level: 90 },
                { name: 'Wireframing', level: 95 },
                { name: 'Prototyping', level: 90 },
            ]
        },
        {
            title: 'CMS & E-commerce',
            skills: [
                { name: 'WordPress', level: 95 },
                { name: 'WooCommerce', level: 85 },
                { name: 'Presta Shop', level: 75 },
            ]
        },
        {
            title: 'Agile & Management',
            skills: [
                { name: 'Agile / Scrum', level: 90 },
                { name: 'Jira / Confluence', level: 90 },
            ]
        },
        {
            title: 'Infrastructure',
            skills: [
                { name: 'Web Hosting / DNS', level: 90 },
                { name: 'Office365 Admin', level: 85 },
            ]
        },
        {
            title: 'Version Control',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'GitLab', level: 85 },
                { name: 'GitHub', level: 90 },
            ]
        },
        {
            title: 'Optimization',
            skills: [
                { name: 'SEO & Performance', level: 85 },
            ]
        },
    ];

    return (
        <div className="bg-white text-[#111]">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 uppercase">
                        Core <span className="text-gray-400 font-light">Skills</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="bento-card p-8 border border-gray-100 rounded-2xl">
                            <h3 className="text-lg font-bold mb-6 text-black border-b border-gray-100 pb-2">{category.title}</h3>
                            <div className="space-y-5">
                                {category.skills.map((skill, sIdx) => (
                                    <SkillBar key={sIdx} {...skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Skills;
