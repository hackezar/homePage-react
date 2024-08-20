/* eslint-disable react/prop-types */
import styles from './AboutSection.module.css';

import SkillHexagons from './SkillHexagons/SkillHexagons';

const AboutSection = ({ refProps }) => {
    return (
        <section ref={refProps} className={styles.aboutSection}>
            <div className={styles.aboutInfo} id="aboutSection">
                <p>Founded by Jack Halcisak</p>
                <p>Tampa, Florida, USA</p>
                <p>Full Stack Web Development to Build Your Dream Website</p>
                <p>Front End Design</p>
                <p>Back End Database Engineering</p>
                <p>Computer, Phone, and Tablet Optimization</p>
            </div>
            <div className={styles.skillSet}>
                <p className={styles.skillsetText}>Skillset</p>
                <SkillHexagons />
            </div>
        </section>
    )
}

export default AboutSection; 