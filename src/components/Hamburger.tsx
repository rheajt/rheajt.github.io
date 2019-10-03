import React from 'react';
import styles from './modules/hamburger.module.scss';

interface Props {
  open: boolean;
  setOpen: () => void;
}

const Hamburger: React.FC<Props> = ({ open = false, setOpen }) => {
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
