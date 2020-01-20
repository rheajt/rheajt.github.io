import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Img from 'gatsby-image';

const useStyles = makeStyles({
  card: {
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
    </Card>
  );
}
