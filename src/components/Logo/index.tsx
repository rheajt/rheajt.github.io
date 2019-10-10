import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';

import styles from './logo.module.scss';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      isotope: file(relativePath: { eq: "isotope.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      jordanrhea: file(relativePath: { eq: "jordan-rhea-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container} onClick={() => navigate('/')}>
      <div className={styles.left}>
        <Img
          fluid={data.isotope.childImageSharp.fluid}
          style={{ overflow: 0 }}
        />
      </div>
      <div className={styles.right}>
        <div className="name">
          <Img
            fluid={data.jordanrhea.childImageSharp.fluid}
            style={{ overflow: 0 }}
          />
        </div>
        <div className={styles.motto}>
          <span>Building Tools for the Web</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
