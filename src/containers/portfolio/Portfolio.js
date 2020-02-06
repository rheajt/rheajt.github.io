import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/styles';
import PortfolioCard from '../../components/portfolio-card';
import { graphql, useStaticQuery } from 'gatsby';

const Portfolio = ({ classes }) => {
  const data = useStaticQuery(portfolioQuery);

  const cards = [
    {
      title: 'Shunyi Today',
      description:
        'Application built from the ground up. Database, server, user interface.',
      image: data.shunyiToday,
      more: 'https://shunyi.today',
    },
    {
      title: 'Multi-Dropdowns',
      description:
        'Google Sheets add-on for creating custom dropdowns inside cells',
      image: data.multi,
      more: 'https://www.youtube.com/watch?v=vwyv3VLaUXI',
    },
    {
      title: 'ClassDojo Extension',
      description: 'Chrome browser extension to help take attendance',
      image: data.classDojo,
      more: 'https://www.youtube.com/watch?v=gxWLyeKf4JY',
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Fade in timeout={1000}>
          <Typography variant="h1" color="textPrimary">
            Portfolio.
          </Typography>
        </Fade>
        <Typography variant="h3" color="textPrimary">
          I write code for people to use.
        </Typography>
      </div>
      <Fade in timeout={1000}>
        <>
          {cards.map(card => (
            <PortfolioCard card={card} key={card.title} />
          ))}
        </>
      </Fade>
    </div>
  );
};

const styles = ({ breakpoints }) => ({
  container: {
    display: `grid`,
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
    alignItems: 'center',
    [`${breakpoints.down('sm')}`]: {
      gridTemplateColumns: '1fr',
    },
  },
  main: {
    gridColumn: '1 / -1',
  },
});

export default withStyles(styles)(Portfolio);

const portfolioQuery = graphql`
  query {
    shunyiToday: file(relativePath: { eq: "shunyi-today-screenshot.png" }) {
      childImageSharp {
        fixed(width: 345) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    multi: file(relativePath: { eq: "multi-dropdowns-screenshot.jpg" }) {
      childImageSharp {
        fixed(width: 345) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    classDojo: file(
      relativePath: { eq: "classdojo-extension-screenshot.png" }
    ) {
      childImageSharp {
        fixed(width: 345) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
