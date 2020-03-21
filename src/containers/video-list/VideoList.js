import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const VideoList = () => {
  const { allYoutubeVideo: videos } = useStaticQuery(VideoQuery);

  return (
    <Grid container spacing={2}>
      <Helmet>
        <script src="https://apis.google.com/js/platform.js"></script>
      </Helmet>

      <Grid item sm={8} xs={12}>
        <Typography variant="h1" color="textPrimary">
          Videos
        </Typography>
        <Typography variant="h3" color="textPrimary">
          Find more videos on my channel...
        </Typography>

        <div style={{ marginTop: 16 }}>
          <div
            className="g-ytsubscribe"
            data-channelid="UCwqNP1r17-2xJFweoACbW8g"
            data-layout="full"
            data-count="default"
            style={{ textAlign: 'center', margin: '0 auto' }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(VideoList);

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
