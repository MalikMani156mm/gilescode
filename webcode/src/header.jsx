import React from 'react';
import styles from './Home.module.css';
import gilesLogo from './assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={gilesLogo} alt="Giles Logo" className={styles.logo} />

      <div className={styles.navWrapper}>
        <button>About Us</button>
        <button>Request a Demo</button>
        <button>Contact Us</button>
        <div className={styles.menuIcon}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </header>
  );
};

export default Header;
