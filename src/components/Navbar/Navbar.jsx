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
                    <li className={styles.link}><a className={styles.linky} id="gallery-link" onClick={setTimeout(() => document.getElementById('gallerySection').scrollIntoView({behavior: 'auto'}), 10)} >Gallery</a></li>
                    <li className={styles.link}><a className={styles.linky} id="about-link" onClick={setTimeout(() => document.getElementById('aboutSection').scrollIntoView({behavior: 'auto'}), 10)} >About</a></li>
                    <li className={styles.link}><a className={styles.linky} id="contact-link" onClick={setTimeout(() => document.getElementById('contactSection').scrollIntoView({behavior: 'auto'}), 10)} >Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar