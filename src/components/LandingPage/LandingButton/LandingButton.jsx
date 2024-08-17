import styles from './LandingButton.module.css'

const LandingButton = () => {
    return (
        <div className={styles.btnDiv}>
            <button className={styles.btn} id="viewGalleryBtn" onClick={() => document.getElementById('gallerySection').scrollIntoView({behavior: 'smooth', block: 'end'})}>View My Work</button>
        </div>
    )
}

export default LandingButton