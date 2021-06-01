import React from 'react';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';

export function ShareButtons({ url, title, description }) {
    console.log(url);
    return (
        <div>
            <EmailShareButton url={url} subject={title} body={description}>
                <EmailIcon size={36} />
            </EmailShareButton>
            <FacebookShareButton url={url} quote={description}>
                <FacebookIcon size={36} />
            </FacebookShareButton>
            <LinkedinShareButton url={url} title={title} summary={description} source={`https://jordanrhea.com`}>
                <LinkedinIcon size={36} />
            </LinkedinShareButton>
            <PinterestShareButton url={url} description={description}>
                <PinterestIcon size={36} />
            </PinterestShareButton>
            <RedditShareButton url={url} title={title}>
                <RedditIcon size={36} />
            </RedditShareButton>
            <TwitterShareButton url={url} title={title} via={'https://jordanrhea.com'} related={['@rheajt']}>
                <TwitterIcon size={36} />
            </TwitterShareButton>
        </div>
    );
}
