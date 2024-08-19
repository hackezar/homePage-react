import styles from './LandingButton.module.css'
import { elementScrollIntoView } from 'seamless-scroll-polyfill'

const LandingButton = () => {
    return (
        <div className={styles.btnDiv}>
            <button className={styles.btn} id="viewGalleryBtn" onClick={() => elementScrollIntoView(document.querySelector("#gallerySection"), { behavior: "smooth", block: "center"})}>View My Work</button>
        </div>
    )
}

export default LandingButton