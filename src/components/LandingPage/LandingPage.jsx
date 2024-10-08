/* eslint-disable react/prop-types */
import styles from './LandingPage.module.css';
import FireflyEffect from './FirefliesEffect/FirefliesEffect';
import LandingButton from './LandingButton/LandingButton';

const Landingpage = ({ scrollCallback, refProps }) => {
    return (
        <header className={styles.landing}>
            <FireflyEffect />
            <h6 className={styles.landingContent}>Rearden Digital Co.</h6>
            <h6 className={styles.landingContent}>Jack Halcisak</h6>
            <h6 className={styles.landingContent}>Hard Working Full Stack Developer</h6>
            <LandingButton scrollCallback={scrollCallback} refProps={refProps}/>
        </header>
    )
}

export default Landingpage;