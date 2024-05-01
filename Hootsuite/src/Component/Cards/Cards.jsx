import React from "react";
import styles from "../Cards/Cards.module.css";
import first from "../../Assets/first.jpg";
import book from "../../Assets/book.png";
import people from "../../Assets/people.jpg";


const Cards = () => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
                <img src={first} alt="Image 1" className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardNumber}>2,500</h2>
                    <h3 className={styles.cardTitle}>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src={book} alt="Image 2" className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardNumber}>45,000</h2>
                    <h3 className={styles.cardTitle}>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
            <div className={styles.card}>
                <img src={people} alt="Image 3" className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardNumber}>20,000+</h2>
                    <h3 className={styles.cardTitle}>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
        </div>
    );
};

export default Cards;
