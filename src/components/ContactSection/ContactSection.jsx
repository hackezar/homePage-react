import { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {

    const [phoneText, setPhoneText] = useState('Phone');

    function changeTextToPhone() {
        setPhoneText('Phone');
    }

    const copyPhoneNum = () => {
        console.log('fired');
        navigator.clipboard.writeText('+1(443)356-9130');
        setPhoneText('Copied to Clipboard');
        setTimeout(changeTextToPhone, 5000);
    }

    return (
        <section className={styles.contactSection}>
            <h3 className={styles.contactHeader} id="contactSection">Get in Touch</h3>
            <div className={styles.contactBody}>
                <a className={styles.emailDiv} href={"mailto:jackhalcisak@outlook.com"}>
                        <p>{"Email"}</p>
                        <p className={styles.fontSize1p2}>jackhalcisak@outlook.com</p>
                </a>

                <div className={styles.phoneDiv} onClick={() => copyPhoneNum()}>
                    <p>{phoneText}</p>
                    <p className={styles.fontSize1p2} >+1(443)356-9130</p>
                </div>

                <a className={styles.linkedin} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-halcisak-466528243/">
                    <p>linkedin</p>
                    <p className={styles.fontSize1p2} >Jack Halcisak</p>
                </a>
                        
                <a className={styles.github} target="_blank" rel="noopener noreferrer" href="https://github.com/hackezar">
                    <p className={styles.githubText}>Github</p>
                    <p className={styles.fontSize1p2} >github.com/hackezar</p>
                </a>
            </div>
        </section>
    )
}

export default ContactSection