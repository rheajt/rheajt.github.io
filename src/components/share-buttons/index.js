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
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

export default function ShareButtons({ url }) {
  return (
    <div>
      <EmailShareButton url={url}>
        <EmailIcon size={36} />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={36} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={36} />
      </LinkedinShareButton>
      <PinterestShareButton url={url}>
        <PinterestIcon size={36} />
      </PinterestShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={36} />
      </RedditShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={36} />
      </TwitterShareButton>
      <WeiboShareButton url={url}>
        <WeiboIcon size={36} />
      </WeiboShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={36} />
      </WhatsappShareButton>
    </div>
  );
}
