import React from "react";
import logo from '../../Assets/logo.png';
import styles from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <img src={logo} alt="" />
                <ul>
                    <li><a href="#">Platform</a></li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Enterprise</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Education</a></li>
                </ul>
            </div>
            <div className={styles.right}>
                <a href="#">Contact Us</a>
                <a href="#">Log in</a>
                <button>SignUp</button>
            </div>
        </div>
    );
}

export default Navbar;
