import styles from './Navbar.module.css';

import Logo from '../../assets/reardenLogo.webp'

import { scrollIntoView } from 'seamless-scroll-polyfill';

const handleScroll = (element) => {
    scrollIntoView(element, {
        behavior: "smooth",
        block: "start",
    },
    {
    duration: 250
    })
};  

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            
            <div className={styles.leftNav}>
                <p className={styles.logoName}>Rearden Digital Co.</p>
                <img className={styles.logo} src={Logo}/>
            </div>

            <div className={styles.rightNav}>
                <ul className={styles.pageLinks}>
                    <li className={styles.link} onClick={() => handleScroll(document.getElementById('gallerySection'))}><a className={styles.linky} id="gallery-link">Gallery</a></li>
                    <li className={styles.link} onClick={() => handleScroll(document.getElementById('aboutSection'))}><a className={styles.linky} id="about-link">About</a></li>
                    <li className={styles.link} onClick={() => handleScroll(document.getElementById('contactSection'))}><a className={styles.linky} id="contact-link">Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar