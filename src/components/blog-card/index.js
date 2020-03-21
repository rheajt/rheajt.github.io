import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    // width: 151,
    width: '100%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function BlogCard({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {post.frontmatter.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {post.excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            component={Link}
            to={post.fields.slug}
            startIcon={<LinkIcon />}>
            Read More
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<YouTubeIcon />}>
            Watch
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
