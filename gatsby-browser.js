import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';
import 'prismjs/themes/prism-coy.css';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
