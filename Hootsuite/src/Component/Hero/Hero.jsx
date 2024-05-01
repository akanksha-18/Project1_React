import React from "react";
import styles from "../Hero/Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>See value from social sooner</h1>
            <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quidem natus aperiam impedit accusamus nemo enim neque reprehenderit beatae ducimus.</p>
            <button className={styles.button}>Request a Demo</button>
        </div>
    );
};

export default Hero;
