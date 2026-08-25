import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ProjectOneCom from './pages/portfolio/ProjectOneCom';
import ProjectIpseos from './pages/portfolio/ProjectIpseos';
import ProjectSoftSat from './pages/portfolio/ProjectSoftSat';
import ProjectNadia from './pages/portfolio/ProjectNadia';
import ProjectFlabba from './pages/portfolio/ProjectFlabba';
import ProjectHighEx from './pages/portfolio/ProjectHighEx';
import ProjectGlobalTT from './pages/portfolio/ProjectGlobalTT';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/onecom" element={<ProjectOneCom />} />
                <Route path="/portfolio/ipseos" element={<ProjectIpseos />} />
                <Route path="/portfolio/softsat" element={<ProjectSoftSat />} />
                <Route path="/portfolio/nadia" element={<ProjectNadia />} />
                <Route path="/portfolio/flabba" element={<ProjectFlabba />} />
                <Route path="/portfolio/highex" element={<ProjectHighEx />} />
                <Route path="/portfolio/globaltt" element={<ProjectGlobalTT />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;