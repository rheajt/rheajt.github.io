import React from 'react';
import styles from './hamburger.module.scss';

interface Props {
  open: boolean;
  setOpen: () => {};
}

const Hamburger: React.FC<Props> = ({ open = false, setOpen }) => {
  console.log(open);
  return (
    <div
      className={styles.hamburger}
      onClick={() => console.log('toggle open')}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default Hamburger;
