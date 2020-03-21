import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/styles';
import Img from 'gatsby-image';
import content from './content';
import { Grid, ButtonGroup, Button } from '@material-ui/core';

const { title, subtitle } = content;

const Welcome = () => {
  const data = useStaticQuery(query);
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={6}>
        <Fade in timeout={1000}>
          <>
            <Typography variant="h1" color="textPrimary">
              {title}
            </Typography>
            <Typography variant="h3" color="textPrimary" gutterBottom>
              {subtitle}
            </Typography>
            <ButtonGroup
              fullWidth
              color="primary"
              size="large"
              aria-label="large outlined button group">
              <Button component={Link} to="/projects">
                Projects
              </Button>
              <Button>Blog</Button>
              <Button>Videos</Button>
            </ButtonGroup>
          </>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Grid>
    </Grid>
  );
};

export default Welcome;

const query = graphql`
  query {
    file(relativePath: { eq: "jordan-rhea-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
