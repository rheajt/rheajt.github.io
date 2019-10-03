import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import Hamburger from '../components/Hamburger';
import Logo from '../components/Logo';
import styles from './modules/header.module.scss';

export default () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      function stickHeader() {
        if (window.pageYOffset >= 180) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }

      window.addEventListener('scroll', () => stickHeader(), false);

      return window.removeEventListener('scroll', () => stickHeader(), false);
    }
  }, []);

  return (
    <header className={styles.header}>
      <div ref={logoRef}>
        <Logo />
      </div>
      <nav className={sticky ? styles.fixedNav : ''}>
        <Hamburger open={false} setOpen={() => console.log('open')} />
        <ul className={styles.desktopNav}>
          <Link to="/" activeClassName={styles.active}>
            <li>About</li>
          </Link>
          <Link to="/projects" activeClassName={styles.active}>
            <li>Projects</li>
          </Link>
          <Link to="/courses" activeClassName={styles.active}>
            <li>Courses</li>
          </Link>
          <Link to="/contact" activeClassName={styles.active}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
