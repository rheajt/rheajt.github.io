import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share';

const useStyles = makeStyles({
  card: {
    // maxWidth: 345,
    height: '100%',
  },
  cardActions: {
    alignItems: 'end',
  },
});

export default function VideoCard({ video }) {
  const classes = useStyles();

  const youtubeUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
  return (
    <Card className={classes.card}>
      <CardActionArea component="a" href={youtubeUrl}>
        <CardMedia
          component={Img}
          alt={video.title}
          height="140"
          image={video.localThumbnail.childImageSharp.fluid.src}
          fluid={video.localThumbnail.childImageSharp.fluid}
          title={video.title}
        />
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          component={FacebookShareButton}
          url={youtubeUrl}
          color="secondary">
          <FacebookIcon size={16} />
        </Button>

        <Button
          size="small"
          component={LinkedinShareButton}
          url={youtubeUrl}
          color="secondary">
          <LinkedinIcon size={16} />
        </Button>

        <Button
          size="small"
          component={RedditShareButton}
          url={youtubeUrl}
          color="secondary">
          <RedditIcon size={16} />
        </Button>

        <Button
          size="small"
          component={PinterestShareButton}
          url={youtubeUrl}
          color="secondary">
          <PinterestIcon size={16} />
        </Button>

        <Button
          size="small"
          component={TwitterShareButton}
          url={youtubeUrl}
          color="secondary">
          <TwitterIcon size={16} />
        </Button>
      </CardActions>
    </Card>
  );
}
