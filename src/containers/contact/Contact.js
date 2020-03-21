import React from 'react';
import Fade from '@material-ui/core/Fade';
import styles from './style';
import { LinkList, ContactForm } from 'components';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

function Contact({ classes }) {
  return (
    <Fade in timeout={1000}>
      <>
        <Typography variant="h1">Contact Me.</Typography>
        <ContactForm />
        <LinkList />
      </>
    </Fade>
  );
}

export default withStyles(styles)(Contact);
