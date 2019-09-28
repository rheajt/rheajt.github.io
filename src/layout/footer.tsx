import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './footer.module.scss';
import { Link } from 'gatsby';
import jordanrhea from '../images/jordan-rhea-logo.png';

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <a href="https://facebook.com/rheajt">
            <li>
              <FaFacebook />
            </li>
          </a>
          <a href="https://github.com/rheajt">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://linkedin.com/in/rheajt">
            <li>
              <FaLinkedin />
            </li>
          </a>
        </ul>
        <img src={jordanrhea} alt="jordan rhea logo" />
        <div className="copyright">
          <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
