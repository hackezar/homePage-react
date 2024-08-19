import styles from './Navbar.module.css';

import Logo from '../../assets/reardenLogo.webp'

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            
            <div className={styles.leftNav}>
                <p className={styles.logoName}>Rearden Digital Co.</p>
                <img className={styles.logo} src={Logo}/>
            </div>

            <div className={styles.rightNav}>
                <ul className={styles.pageLinks}>
                    <li className={styles.link}><a className={styles.linky} id="gallery-link" href="#gallerySection">Gallery</a></li>
                    <li className={styles.link}><a className={styles.linky} id="about-link" href="#aboutSection" >About</a></li>
                    <li className={styles.link}><a className={styles.linky} id="contact-link" href="#contactSection" >Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar