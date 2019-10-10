import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styles from './styles.module.scss';
import { Link, graphql } from 'gatsby';
import { FaAddressCard, FaTasks, FaPaperPlane } from 'react-icons/fa';

interface Props {
  data: {
    [key: string]: any;
  };
}
const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="jordan rhea" />

      <div className={styles.container}>
        <div className={styles.left}>
          <Img
            fixed={data.profileImage.childImageSharp.fixed}
            style={{ overflow: 0 }}
          />
        </div>

        <div className={styles.right}>
          <ul className={styles.links}>
            <Link to="/about">
              <li>
                <FaAddressCard /> About
              </li>
            </Link>
            <Link to="/projects">
              <li>
                <FaTasks /> Projects
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <FaPaperPlane /> Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* <div className={styles.bottom}>bottom</div> */}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "new-profile.png" }) {
      childImageSharp {
        fixed(width: 3500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
