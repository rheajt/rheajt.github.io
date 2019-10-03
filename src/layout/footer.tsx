import React from 'react';
import { Link } from 'gatsby';
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './modules/footer.module.scss';
// import jordanrhea from '../images/jordan-rhea-logo.png';

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.socialIcons}>
          <a href="https://youtube.com/jordanrhea" className={styles.youtube}>
            <li>
              <FaYoutube />
            </li>
          </a>
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
        {/* <img src={jordanrhea} alt="jordan rhea logo" /> */}
        <div className={styles.copyright}>
          <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
