import React, { useState } from 'react';
import styles from './iframe.module.scss';
import Loading from '../Loading';

interface Props {
  src: string;
}

const IFrame: React.FC<Props> = ({ src }) => {
  const [loading, setLoading] = useState(true);
  function onLoad(e: React.SyntheticEvent<HTMLIFrameElement, Event>) {
    console.log('done loading');

    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <Loading loading={loading} />

      <div className={!loading ? styles.box : styles.loading}>
        <iframe
          src={src}
          frameBorder="0"
          allowFullScreen
          onLoad={onLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default IFrame;
