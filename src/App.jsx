import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import ProjectGallery from './components/ProjectGallery/ProjectGallery';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';

import { useRef } from 'react';

const App = () => {
    const galleryRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();

    const scrollCallback = (ref) => {
        setTimeout(ref.current.scrollIntoView({behavior: 'smooth'}), 100);
    }

    return (
    <div className={'app'}>
        <Navbar scrollCallback={scrollCallback}
        refProps={{
            gallery: galleryRef,
            about: aboutRef,
            contact: contactRef,
        }}/>
        <LandingPage scrollCallback={scrollCallback} refProps={galleryRef}/>
        <ProjectGallery refProps={galleryRef}/>
        <AboutSection refProps={aboutRef}/>
        <ContactSection refProps={contactRef}/>
    </div>
    )
}

export default App;
