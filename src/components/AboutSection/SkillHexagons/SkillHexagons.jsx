import styles from './SkillHexagons.module.css';

import ReactIcon from '../../../assets/SkillIcons/react.svg';
import MongoDBIcon from '../../../assets/SkillIcons/mongodb-seeklogo.svg';
import HTMLIcon from '../../../assets/SkillIcons/html-logo.png';
import CSSIcon from '../../../assets/SkillIcons/css-logo.png';
import JSIcon from '../../../assets/SkillIcons/javascript-logo.png';
import NodeIcon from '../../../assets/SkillIcons/node-logo.png';
import WebpackIcon from '../../../assets/SkillIcons/webpack-logo.png';
import SQLIcon from '../../../assets/SkillIcons/sql-server.png';
import GithubIcon from '../../../assets/SkillIcons/github-logo.png';
import ExpressIcon from '../../../assets/SkillIcons/express.png';

const SkillHexagons = () => {
    return (
        
        <div className={styles.skillsHexagons}>
            <div className={styles.row1}>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>MongoDB</span>
                        <img className={styles.hexLogo} src={MongoDBIcon}/>
                    </div>
                </div>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>SQL</span>
                        <img className={styles.hexLogo} src={SQLIcon}/>
                    </div>
                </div>
            </div>
            <div className={styles.row2}>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>HTML</span>
                        <img className={styles.hexLogo} src={HTMLIcon} />
                    </div>
                </div>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>JavaScript</span>
                        <img className={styles.hexLogo} src={JSIcon}/>
                    </div>
                </div>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>CSS</span>
                        <img className={styles.hexLogo} src={CSSIcon}/>
                    </div>
                </div>
            </div>
            <div className={styles.row3}>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>Node</span>
                        <img className={styles.hexLogo} src={NodeIcon} />
                    </div>
                </div>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>Webpack</span>
                        <img className={styles.hexLogo} src={WebpackIcon} />
                    </div>
                </div>
            </div>
            <div className={styles.row4}>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>React</span>
                        <img className={styles.hexLogo} src={ReactIcon}/>
                    </div>
                </div>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>Express</span>
                        <img className={styles.hexLogo} src={ExpressIcon}/>
                    </div>
                </div>
                <div className={styles.hex}>
                    <div className={`${styles.hex} ${styles.inner}`}>
                        <span className={styles.hexText}>Github</span>
                        <img className={styles.hexLogo} src={GithubIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillHexagons;