import React from 'react';

interface Props {
  src: string;
}

const IFrame: React.FC<Props> = ({ src }) => {
  function onLoad(e: React.SyntheticEvent<HTMLIFrameElement, Event>) {
    console.log('done loading', e);
  }
  return (
    <div
      style={{
        paddingBottom: '60%',
        position: 'relative',
        display: 'block',
        width: '100%',
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={src}
        frameBorder="0"
        style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
        allowFullScreen
        onLoad={onLoad}
      ></iframe>
    </div>
  );
};

export default IFrame;
