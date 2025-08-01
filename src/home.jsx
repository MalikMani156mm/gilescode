import React from 'react';
import styles from './Home.module.css';
import Header from './header';
import googleLogo from './assets/google-logo.png';    // Replace with your actual path

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.animatedBg}></div>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.headline}>
          The <span className={styles.highlightWhite}>AI</span> agent that makes<br />
          clinical, medical & healthcare<br />
          research <span className={styles.highlightYellow}>faster</span> and{' '}
          <span className={styles.highlightUnderline}>smarter</span>
        </h1>
        <div className={styles.googleSection}>
          <img src={googleLogo} alt="Google Logo" />
        </div>
      </main>
    </div>
  );
};

export default Home;  