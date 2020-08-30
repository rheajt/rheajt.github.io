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
import { format } from 'date-fns';
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
  titleRow: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
  },
}));

export default function BlogCard({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.titleRow}>
            <Typography variant="h5">{post.frontmatter.title} </Typography>
            <Typography variant="caption" fontStyle="oblique">
              {format(new Date(post.fields.date), 'MMM do, Y')}
            </Typography>
          </div>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {post.excerpt}
          </Typography>
          <Typography variant="caption" display="block">
            {post.frontmatter.categories &&
              post.frontmatter.categories.join(', ')}
            , {post.frontmatter.tags && post.frontmatter.tags.join(', ')}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            className={classes.button}
            component={Link}
            to={post.fields.slug}
            startIcon={<LinkIcon />}>
            Read More
          </Button>
          {post.frontmatter.youtube && (
            <Button
              component="a"
              href={post.frontmatter.youtube}
              size="small"
              variant="outlined"
              color="secondary"
              className={classes.button}
              startIcon={<YouTubeIcon />}>
              Watch
            </Button>
          )}
        </CardActions>
      </div>
    </Card>
  );
}
