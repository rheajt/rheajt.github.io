import React from 'react';
import styles from './header.module.scss';
import { Link } from 'gatsby';
import Hamburger from '../components/Hamburger';
import Logo from '../components/Logo';

export default () => {
  const sticky = false;
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={sticky ? 'fixed-nav' : ''}>
        <Hamburger open={false} setOpen={() => console.log('open')} />
        <ul className="desktop-nav">
          <Link to="/" activeClassName="active">
            <li>About</li>
          </Link>
          <Link to="/projects" activeClassName="active">
            <li>Projects</li>
          </Link>
          <Link to="/courses" activeClassName="active">
            <li>Courses</li>
          </Link>
          <Link to="/contact" activeClassName="active">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
