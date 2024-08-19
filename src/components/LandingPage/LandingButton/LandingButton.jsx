import styles from './LandingButton.module.css'

import { scrollIntoView } from 'seamless-scroll-polyfill';

const LandingButton = () => {

    const handleScroll = (element) => {
        scrollIntoView(element, {
            behavior: "smooth",
            block: "start",
        },
        {
        duration: 250
        })
    };  

    return (
        <div className={styles.btnDiv}>
            <button onClick={() => handleScroll(document.getElementById('gallerySection'))}className={styles.btn} id="viewGalleryBtn">View My Work</button>
        </div>
    )
}

export default LandingButton