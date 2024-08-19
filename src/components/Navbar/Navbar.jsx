import styles from './Navbar.module.css';

import Logo from '../../assets/reardenLogo.webp'

import { elementScrollIntoView } from 'seamless-scroll-polyfill';

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            
            <div className={styles.leftNav}>
                <p className={styles.logoName}>Rearden Digital Co.</p>
                <img className={styles.logo} src={Logo}/>
            </div>

            <div className={styles.rightNav}>
                <ul className={styles.pageLinks}>
                    <li className={styles.link}><a className={styles.linky} id="gallery-link" onClick={() => elementScrollIntoView(document.querySelector('#gallerySection'), {behavior: 'smooth'})} >Gallery</a></li>
                    <li className={styles.link}><a className={styles.linky} id="about-link" onClick={() => elementScrollIntoView(document.querySelector('#aboutSection'), {behavior: 'smooth'})} >About</a></li>
                    <li className={styles.link}><a className={styles.linky} id="contact-link" onClick={() => elementScrollIntoView(document.querySelector('#contactSection'), {behavior: 'smooth'})} >Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar