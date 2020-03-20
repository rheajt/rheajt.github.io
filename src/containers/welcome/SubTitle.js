import React, { Component } from 'react';
import Typist from 'react-typist';
import { Typography } from '@material-ui/core';

export default function SubTitle() {
  return (
    // <Typist>
    //   <span className="my-custom-class"> First Sentence </span>
    //   <br />
    //   <div className="container">
    //     <p> This will be animated after first sentence is complete </p>
    //     <div prop1="val1"> More text. </div>
    //   </div>
    //   Final sentence
    // </Typist>
    <Typist>
      <Typography variant="h3" color="textPrimary">
        Animate this text.
      </Typography>
    </Typist>
  );
}
