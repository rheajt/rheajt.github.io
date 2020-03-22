import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button, Paper } from '@material-ui/core';
import { Link } from 'gatsby';

function Videos() {
  const { allYoutubeVideo: videos } = useStaticQuery(VideoQuery);

  console.log(videos);

  return (
    <Grid container spacing={2}>
      <Helmet>
        <script src="//apis.google.com/js/platform.js"></script>
      </Helmet>

      <Grid item sm={8} xs={12}>
        <Typography variant="h1" color="textPrimary">
          Videos
        </Typography>
        <Typography variant="h3" color="textPrimary">
          Find more videos on my channel...
        </Typography>
      </Grid>

      <Grid item sm={4} xs={12}>
        <Paper align="center" style={{ padding: '2rem' }}>
          <div
            className="g-ytsubscribe"
            data-channelid="UCwqNP1r17-2xJFweoACbW8g"
            data-layout="full"
            data-count="default"
            style={{ textAlign: 'center', margin: '0 auto' }}
          />
        </Paper>
      </Grid>

      <Grid item sm={12} xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/contact"
          state={{ subject: 'Video Suggestion' }}>
          Make a Suggestion
        </Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Videos);

const VideoQuery = graphql`
  query {
    allYoutubeVideo(filter: { privacyStatus: { eq: "public" } }) {
      edges {
        node {
          id
          title
          description
          videoId
          publishedAt
          privacyStatus
          localThumbnail {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
