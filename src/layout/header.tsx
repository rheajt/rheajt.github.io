import React from 'react';
import styles from './header.module.scss';
import logo from '../images/jordan-rhea-logo.png';
import { Link } from 'gatsby';
import Hamburger from '../components/Hamburger';

export default () => {
  const sticky = false;
  return (
    <header className={styles.header}>
      <img src={logo} alt="jordan rhea logo" />
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
