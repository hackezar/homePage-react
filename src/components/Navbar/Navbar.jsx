import styles from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={`${styles.navbar} ${styles.sticky}`}>
            <div className={styles.leftNav}>
                <img className={styles.logo} src="./images/logo.png"/>
                <p className={styles.logoName}>Jack Halcisak</p>
            </div>

            <div className={styles.rightNav}>
                <ul className={styles.pageLinks}>
                    <li className={styles.link}><a className={styles.linky} id="gallery-link">Gallery</a></li>
                    <li className={styles.link}><a className={styles.linky} id="about-link">About</a></li>
                    <li className={styles.link}><a className={styles.linky} id="contact-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar