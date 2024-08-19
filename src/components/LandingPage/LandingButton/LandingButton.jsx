import styles from './LandingButton.module.css'

const LandingButton = () => {
    return (
        <div className={styles.btnDiv}>
            <button className={styles.btn} id="viewGalleryBtn" onClick={setTimeout(() => document.getElementById('gallerySection').scrollIntoView({behavior: 'auto', block: 'end'}), 10)}>View My Work</button>
        </div>
    )
}

export default LandingButton