import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import ContactForm from '../../components/contact-form';
import styles from './style';
import About from '../about';
import { withStyles } from '@material-ui/styles';

const Contact = ({ classes }) => (
  <div className={classes.columns}>
    <div>
      <Fade in timeout={1000}>
        <About />
      </Fade>
    </div>

    <Fade in timeout={1000}>
      <ContactForm />
    </Fade>
  </div>
);

export default withStyles(styles)(Contact);
