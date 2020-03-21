import React from 'react';
import { withStyles } from '@material-ui/styles';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './style';

const defaultLinks = [
  {
    to: 'https://youtube.com/jordanrhea',
    text: 'YouTube',
    Icon: FaYoutube,
    newTab: true,
  },
  {
    to: 'https://linkedin.com/in/rheajt',
    text: 'Linked In',
    Icon: FaLinkedin,
    newTab: true,
  },
  {
    to: 'https://github.com/rheajt',
    text: 'Github',
    Icon: FaGithub,
    newTab: true,
  },
];

const LinkList = ({ classes, links = defaultLinks }) => (
  <div>
    <ul className={classes.container}>
      {links.map(({ Icon, to, newTab, text }, index) => (
        <li key={index}>
          <a
            href={to}
            target={newTab ? '_blank' : '_self'}
            className={classes.link}>
            <Icon />
            <span className={classes.linkText}>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default withStyles(styles)(LinkList);
