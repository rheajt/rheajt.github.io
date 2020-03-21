import React, { useState } from 'react';
import {
  Paper,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  LinearProgress,
  FormControlLabel,
  Switch,
  Typography,
  CircularProgress,
  Slide,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import style from './style';

const initialForm = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
  subscribe: true,
};

const contactUrl =
  'https://script.google.com/macros/s/AKfycbznGrEM-Fu78vZZJk8VtJcsk-fHQvFhM0UvgmiaTxC8Z6XsCkM/dev';

function isInvalid(form) {
  if (form.fullName === '' && form.email === '' && form.subject === '') {
    return true;
  }

  if (form.message.length < 100) {
    return true;
  }

  return false;
}

function ContactForm({ classes }) {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleChange = e => {
    const newValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: newValue });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setSending(true);

    const response = await fetch(contactUrl, {
      method: 'post',
      contentType: 'text/plain',
      body: JSON.stringify(form),
    });

    const json = await response.json();
    console.log(json);
    setComplete(true);
  };

  return (
    <Paper style={{ padding: '3rem 1rem', position: 'relative' }}>
      <Slide direction="right" in={sending} mountOnEnter unmountOnExit>
        <SendingMessage align="center">
          <Typography variant="h3" gutterBottom>
            {complete ? 'Sent!' : 'Sending...'}
          </Typography>
          {complete ? (
            <DoneOutlineIcon fontSize="large" />
          ) : (
            <CircularProgress />
          )}
        </SendingMessage>
      </Slide>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <TextField
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
            <FormControl fullWidth>
              <InputLabel>Subject</InputLabel>
              <Select
                name="subject"
                value={form.subject}
                onChange={handleChange}>
                <MenuItem value={'Projects'}>Projects</MenuItem>
                <MenuItem value={'GSuite Help'}>GSuite Help</MenuItem>
                <MenuItem value={'Web Development'}>Web Development</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              color="secondary"
              multiline
              fullWidth
            />
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={form.message.length <= 100 ? form.message.length : 100}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={isInvalid(form)}>
              Send Message
            </Button>
          </Grid>
          <Grid item xs={6} align="end">
            <FormControlLabel
              control={
                <Switch
                  checked={form.subscribe}
                  onChange={handleChange}
                  name="subscribe"
                  color="secondary"
                />
              }
              label="Subscribe"
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
  },
})(LinearProgress);

const SendingMessage = withStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    paddingTop: '6rem',
    backgroundColor: 'white',
    zIndex: 9,
  },
})(Paper);

export default withStyles(style)(ContactForm);
