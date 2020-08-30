import React from 'react';
import Typist from 'react-typist';
import { Typography } from '@material-ui/core';

export default function SubTitle() {
  return (
    <Typist>
      <Typography variant="h3" color="textPrimary">
        Animate this text.
      </Typography>
    </Typist>
  );
}
