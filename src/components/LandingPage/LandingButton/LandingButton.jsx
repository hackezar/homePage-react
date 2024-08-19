import styles from './LandingButton.module.css'

const LandingButton = () => {
    return (
        <div className={styles.btnDiv}>
            <a href="/#gallerySection" ><button className={styles.btn} id="viewGalleryBtn">View My Work</button></a>
        </div>
    )
}

export default LandingButton