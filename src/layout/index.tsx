import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import styles from './layout.module.scss';
import './global.scss';
import Header from './Header';

export default ({
  children,
  title = 'TTITLE',
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className={styles.layout}>
      <Helmet title={title} />
      <Header />

      <main>{children}</main>
      <Footer />
    </div>
  );
};
