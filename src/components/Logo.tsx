import React from 'react';
import isotope from '../images/isotope.png';
import styles from './modules/logo.module.scss';
import name from '../images/jordan-rhea-logo.png';

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={isotope} alt="isotope" />
      </div>
      <div className={styles.right}>
        <div className="name">
          <img src={name} alt="jordan rhea" />
        </div>
        <div className={styles.motto}>
          <span>google apps script</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
