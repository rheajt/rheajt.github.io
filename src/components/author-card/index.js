import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LinkList } from 'components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const AuthorCard = ({ author }) => {
  const { avatar } = useStaticQuery(avatarQuery);
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Img fluid={avatar.childImageSharp.fluid} />
      </Grid>
      <Grid item xs={9} className={classes.name}>
        <Typography variant="h1">Jordan Rhea</Typography>
        <LinkList />
      </Grid>
    </Grid>
  );
};

export default AuthorCard;

export const avatarQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
