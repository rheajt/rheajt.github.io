import { Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const iconQuery = graphql`
    query IconImage {
        icon: file(name: { eq: "jr-icon" }) {
            childImageSharp {
                fixed(width: 36) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;
const Header = () => {
    const data = useStaticQuery(iconQuery);
    return (
        <header className="header">
            <Link to="/">
                <Img fixed={data.icon.childImageSharp.fixed} />
            </Link>
            <nav>
                <Link className="sans" to="/about">
                    About
                </Link>
                <Link className="sans" to="/blog">
                    Blog
                </Link>
            </nav>
        </header>
    );
};

export default Header;
