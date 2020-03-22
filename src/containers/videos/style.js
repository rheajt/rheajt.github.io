const styles = ({ typography }) => ({
  container: {
    padding: `${typography.pxToRem(32)} 0`,
    display: `grid`,
    gridTemplateColumns: '3fr 2fr',
    alignItems: 'top',
  },
  videoList: {
    height: '100%',
    overflowY: 'scroll',
  },
});

export default styles;
