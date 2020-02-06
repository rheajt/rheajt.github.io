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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    maxHeight: 200,
  },
});

export default function MediaCard({ card }) {
  const classes = useStyles();

  console.log(card.image);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={Img}
          className={classes.media}
          fixed={card.image.childImageSharp.fixed}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component="a" href={card.more} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
