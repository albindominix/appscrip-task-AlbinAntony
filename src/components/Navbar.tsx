import React from "react";
import styles from "./component.module.css";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Image
          src="/assets/Logo.svg"
          height={30}
          width={30}
          alt="heart like"
        />
      <div className={styles.logoText}>LOGO</div>
      <div className={styles.navItems}>
        <Image
          src="/assets/heart.svg"
          height={25}
          width={25}
          alt="heart like"
        />
         <Image
          src="/assets/search.svg"
          height={25}
          width={25}
          alt="heart like"
        />
       <Image
          src="/assets/briefcase-business.svg"
          height={25}
          width={25}
          alt="heart like"
        />
       <Image
          src="/assets/user-round.svg"
          height={25}
          width={25}
          alt="heart like"
        />
       <span style={{
        fontWeight:600,
        fontSize:'1.3rem'
       }}>ENG</span>
      </div>
    </div>
  );
};

export default Navbar;
