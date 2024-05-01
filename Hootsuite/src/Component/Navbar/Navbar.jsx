import React from "react";
import logo from '../../Assets/logo.png';
import styles from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <ul className={styles.menu}>
                    <li><a href="#" className={styles.link}>Platform</a></li>
                    <li><a href="#" className={styles.link}>Plans</a></li>
                    <li><a href="#" className={styles.link}>Enterprise</a></li>
                    <li><a href="#" className={styles.link}>Resources</a></li>
                    <li><a href="#" className={styles.link}>Education</a></li>
                </ul>
            </div>
            <div className={styles.right}>
                <a href="#" className={styles.link}>Contact Us</a>
                <a href="#" className={styles.link}>Log in</a>
                <button className={styles.button}>Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar;
