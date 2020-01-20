const styles = ({ breakpoints }) => ({
  container: {
    display: `grid`,
    gridTemplateColumns: '3fr 2fr',
    alignItems: 'center',
    [`${breakpoints.down('sm')}`]: {
      gridTemplateColumns: '1fr',
    },
  },
});

export default styles;
