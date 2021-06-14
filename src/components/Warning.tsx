import { formatDistance } from 'date-fns/esm';
import React from 'react';
import { TwitterIcon } from 'react-share';

interface Props {
    date: Date;
    title: string;
    url: string;
}

const Warning: React.FC<Props> = ({ date, title, url }) => {
    const distance = formatDistance(new Date(), date);

    const text = encodeURIComponent(
        `@rheajt Help me out! Time for an update on "${title}"`
    );

    return (
        <section>
            <p>
                {/**
                style={{
                    backgroundColor: '#f58545',
                    padding: '1rem',
                    color: 'white',
                }}>
            */}
                <b>Warning!</b> This post was written <b>{distance}</b> ago.
                This is basically forever in the web time. Let me know you are
                interested and want me to update it!{' '}
                <a
                    href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}>
                    Tweet at me!
                </a>
            </p>
        </section>
    );
};

export default Warning;
