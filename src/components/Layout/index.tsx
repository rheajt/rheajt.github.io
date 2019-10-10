import React from 'react';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby';
import styles from './layout.module.scss';
import Logo from '../Logo';
import './global.scss';
const Layout = (props: React.PropsWithChildren<{}>) => {
  return (
    <>
      <div className={styles.container}>
        <Logo />

        <div>{props.children}</div>
      </div>

      <footer className={styles.footer}>
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

        <div className={styles.copyright}>
          <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </footer>
    </>
  );
};

export default Layout;
