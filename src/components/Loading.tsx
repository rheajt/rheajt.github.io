import React, { useState, useEffect } from 'react';
import styles from './modules/loading.module.scss';
import isotope from '../images/isotope.png';

interface IProps {
  loading?: boolean;
}

const Loading = ({ loading = false }: IProps) => {
  const [className, setClassName] = useState('isLoading');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!loading) {
      setClassName('isLeaving');
      timeout = setTimeout(() => setClassName('isLeft'), 200);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  return (
    <div className={`${styles.loader} ${styles[className]}`}>
      <div className={styles.loadCircle}>
        <img src={isotope} alt="isotope" />
      </div>
    </div>
  );
};
export default Loading;
