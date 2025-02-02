import React from "react";
import styles from './component.module.css'
const HeroSection: React.FC = () => {
    return (
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            DISCOVER OUR PRODUCTS
          </h1>
          <span className={styles.heroDescription}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </span>
        </div>
      );
};

export default HeroSection;
