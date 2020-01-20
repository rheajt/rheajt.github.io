const styles = ({ breakpoints }) => ({
  columns: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    [`${breakpoints.down('sm')}`]: {
      gridTemplateColumns: '1fr',
    },
  },
});

export default styles;
