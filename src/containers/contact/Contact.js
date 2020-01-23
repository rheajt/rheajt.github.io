import React from 'react';
import Fade from '@material-ui/core/Fade';
import ContactForm from '../../components/contact-form';
import styles from './style';
import About from '../about';
import { withStyles } from '@material-ui/styles';

const Contact = ({ classes }) => (
  <Fade in timeout={1000}>
    <div className={classes.columns}>
      <div>
        <About />
      </div>

      <ContactForm />
    </div>
  </Fade>
);

export default withStyles(styles)(Contact);
