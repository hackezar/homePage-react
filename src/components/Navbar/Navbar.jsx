/* eslint-disable react/prop-types */
import styles from './Navbar.module.css';

import Logo from '../../assets/reardenLogo.webp'

const Navbar = ({ scrollCallback, refProps }) => {
    return(
        <nav className={styles.navbar}>
            
            <div className={styles.leftNav}>
                <p className={styles.logoName}>Rearden Digital Co.</p>
                <img className={styles.logo} src={Logo}/>
            </div>

            <div className={styles.rightNav}>
                <ul className={styles.pageLinks}>
                    <li className={styles.link} onClick={() => scrollCallback(refProps.gallery)}><a className={styles.linky} id="gallery-link">Gallery</a></li>
                    <li className={styles.link} onClick={() => scrollCallback(refProps.about)}><a className={styles.linky} id="about-link">About</a></li>
                    <li className={styles.link} onClick={() => scrollCallback(refProps.contact)}><a className={styles.linky} id="contact-link">Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar