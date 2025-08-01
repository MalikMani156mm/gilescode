import React from 'react';
import styles from './loader.module.css';
import Header from './header';
import gloader from './assets/gilesLoader.gif';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.animatedBg}></div>
      <Header />
      <div className={styles.loaderContainer}>
        <img src={gloader} alt="G Loader" className={styles.loaderImage} />
      </div>
    </div>
  );
};

export default Loader;
