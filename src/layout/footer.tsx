import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './footer.module.scss';
import { Link } from 'gatsby';
import jordanrhea from '../images/jordan-rhea-logo.png';

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.socialIcons}>
          <a href="https://twitter.com/rheajt" className={styles.twitter}>
            <li>
              <FaTwitter />
            </li>
          </a>
          <a href="https://github.com/rheajt" className={styles.github}>
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://linkedin.com/in/rheajt" className={styles.linkedin}>
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
