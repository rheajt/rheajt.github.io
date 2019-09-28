import React from 'react';
import styles from './logo.module.scss';
import isotope from '../images/isotope.png';
import name from '../images/jordan-rhea-logo.png';

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className="left">
        <img src={isotope} alt="isotope" />
      </div>
      <div className="right">
        <div className="name">
          <img src={name} alt="jordan rhea" />
        </div>
        <div className="motto">
          <h1>google apps script</h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
