import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';
import { FaBars } from 'react-icons/fa';

import styles from './style';
import { Button } from '@material-ui/core';

const MobileNavigation = ({ classes, options, onClick, open }) => (
  <>
    <FaBars className={classes.menuIcon} onClick={onClick} />
    {open && (
      <div className={classes.menuContainer}>
        {options.map((link, i) => (
          <div key={i}>
            <Link
              to={link.to}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              exact={'true'}>
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
        <li>
          <Button
            style={{ marginLeft: 8 }}
            variant="contained"
            color="primary"
            component={Link}
            to="/contact">
            Contact
          </Button>
        </li>
      </div>
    )}
  </>
);

export default withStyles(styles)(MobileNavigation);
