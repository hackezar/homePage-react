import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import ProjectGallery from './components/ProjectGallery/ProjectGallery';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';

const App = () => {

    return (
    <div className={'app'}>
        <Navbar />
        <LandingPage />
        <ProjectGallery />
        <AboutSection />
        <ContactSection />
    </div>
    )
}

export default App;
