import React, { ReactNode, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import styles from './modules/layout.module.scss';
import './modules/global.scss';
import Loading from '../components/Loading';

interface IProps {
  children: ReactNode;
}

export default ({ children }: IProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Loading loading={loading} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
