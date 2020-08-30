import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  media: {
    height: 200,
    maxHeight: 200,
  },
  content: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
  },
});

export default function MediaCard({ card }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {card.image && (
        <CardMedia
          component={Img}
          className={classes.media}
          fixed={card.image.childImageSharp.fixed}
          title={card.title}
        />
      )}
      <div className={classes.content}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component="a"
            href={card.more}
            size="small"
            color="primary"
            variant="outlined"
            endIcon={<ExitToAppIcon />}>
            More info
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
