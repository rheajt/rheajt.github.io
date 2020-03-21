import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';

import styles from './style';
import { Button } from '@material-ui/core';
import { useLocation } from '@reach/router';

function MainNavigation({ classes, options }) {
  const location = useLocation();
  const isContact = location.pathname === '/contact';

  return (
    <ul>
      {options.map((link, i) => (
        <li className={classes.menuContainer} key={i}>
          <Link
            to={link.to}
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            exact={'true'}>
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
      <li className={classes.menuContainer}>
        <Button
          style={{ marginLeft: 8 }}
          variant="contained"
          color={isContact ? 'secondary' : 'primary'}
          component={Link}
          to="/contact">
          Contact
        </Button>
      </li>
    </ul>
  );
}

export default withStyles(styles)(MainNavigation);
