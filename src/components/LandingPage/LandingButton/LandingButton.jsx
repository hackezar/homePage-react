/* eslint-disable react/prop-types */
import styles from './LandingButton.module.css'

const LandingButton = ({ scrollCallback, refProps }) => {
    return (
        <div className={styles.btnDiv}>
            <button onClick={() => scrollCallback(refProps)} className={styles.btn} id="viewGalleryBtn">View My Work</button>
        </div>
    )
}

export default LandingButton