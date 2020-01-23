import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style';

function ContactForm({ classes }) {
  return (
    <Paper style={{ padding: '1rem' }}>
      <iframe
        title="contact-form"
        name="contact-form"
        width="100%"
        height="400"
        frameBorder="0"
        src="https://script.google.com/macros/s/AKfycbznGrEM-Fu78vZZJk8VtJcsk-fHQvFhM0UvgmiaTxC8Z6XsCkM/exec"
      />
    </Paper>
  );
}

export default withStyles(style)(ContactForm);
