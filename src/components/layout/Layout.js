import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Fade from '@material-ui/core/Fade';
import classNames from 'classnames';

import { Header } from 'components';

import styles from './style';

import 'react-typist/dist/Typist.css';
import 'typeface-roboto';
import CurvedLineChart from '../d3-chart';

const Layout = ({ classes, children, noBackground, centered, ...props }) => (
  <Scrollbars
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    renderView={props => <div {...props} className={classes.scrollFix} />}
    className={classes.container}>
    <div
      className={classNames(
        classes.pageContainer,
        !noBackground && classes.background
      )}>
      <Header />
      <Fade in mountOnEnter unmountOnExit>
        <main
          className={classNames(
            centered ? classes.centeredContent : classes.content,
            props.className
          )}
          style={{ ...props.style, zIndex: 1 }}>
          {children}
        </main>
      </Fade>
      <CurvedLineChart />
    </div>
  </Scrollbars>
);

export default withStyles(styles)(Layout);
