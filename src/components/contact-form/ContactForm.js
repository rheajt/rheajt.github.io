import React, { useState } from 'react';
import {
  FormGroup,
  FormControlLabel,
  TextField,
  Switch,
  Button,
  Paper,
} from '@material-ui/core';
import style from './style';
import { withStyles } from '@material-ui/styles';

function ContactForm({ classes }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    moreInfo: true,
  });

  const isDisabled = !form.name || !form.email || !form.message;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSwitch = name => e => {
    setForm({ ...form, [name]: e.target.checked });
  };

  const submitForm = async e => {
    e.preventDefault();
    console.log(form);

    const resp = await fetch(process.env.APPS_SCRIPT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(form),
    });
    console.log(resp);
    const json = await resp.json();

    console.log(json);
  };

  return (
    <Paper style={{ padding: '1rem' }}>
      <iframe
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
