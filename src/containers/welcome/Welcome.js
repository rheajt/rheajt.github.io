import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/styles';
import Img from 'gatsby-image';
import styles from './style';
import content from './content';

const { title, subtitle } = content;

const Welcome = ({ classes }) => {
  const data = useStaticQuery(query);
  return (
    <div className={classes.container}>
      <div>
        <Fade in timeout={1000}>
          <Typography variant="h1" color="textPrimary">
            {title}
          </Typography>
        </Fade>
        <Typography variant="h3" color="textPrimary">
          {subtitle}
        </Typography>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  );
};

export default withStyles(styles)(Welcome);

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
