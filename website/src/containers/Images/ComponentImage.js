import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

const ComponentImage = ({ name }) => {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "components" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  const image = nodes.find(item => item.name === name);
  if (!image) return null;
  return <Image fluid={image.childImageSharp.fluid} />;
};

ComponentImage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ComponentImage;
