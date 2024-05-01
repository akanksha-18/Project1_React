// Resume.jsx

import React from 'react';
import styles from "./Resume.module.css";


function Resume() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.centerContainer}>
       
        <div className={styles.name}>Akanksha Dubey</div>
       
        <div className={styles.summary}>
          Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nec augue hendrerit congue.
        </div>
       
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.sectionContent}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas tempora doloribus earum doloremque excepturi vel eum esse, nisi necessitatibus iste consequuntur voluptas maxime. Quod.</p>
          </div>
        </div>
       
        <div className={styles.rowContainer}>
        
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.sectionContent}>
             <ul>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
             </ul>
            </div>
          </div>
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.sectionContent}>
                <ul>
             <li>Hackerrank Clone</li>
             <li>Youtube Clone</li>
             <li>Resume Builder</li>
             </ul>
            </div>
          </div>
        </div>
        <div className={styles.iconContainer}>
          
          <i className={`fa-solid fa-envelope ${styles.icon}`}></i>
          <i className={`fab fa-linkedin ${styles.icon}`}></i>
          <i className={`fab fa-github ${styles.icon}`}></i>
        </div>
      </div>
    </div>
  );
}

export default Resume;
