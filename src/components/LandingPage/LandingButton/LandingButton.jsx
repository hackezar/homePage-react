import styles from './LandingButton.module.css'

import { scrollIntoView } from 'seamless-scroll-polyfill';

const LandingButton = () => {

    const handleScroll = (event, element) => {
        event.preventDefault();
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
            <button onClick={(event) => handleScroll(event, document.getElementById('gallerySection'))}className={styles.btn} id="viewGalleryBtn">View My Work</button>
        </div>
    )
}

export default LandingButton