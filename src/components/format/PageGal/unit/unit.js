import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";
import { Title } from './unit.css';

const Unit = ({ title, testimg }) => (
  <figure>
    <figcaption>
      <Title>{title}</Title>
    </figcaption>
    <GatsbyImage
      image={testimg ? testimg.childImageSharp.gatsbyImageData : {}}
      alt={title}
      style={{ maxHeight: '25vh' }}
      imgStyle={{ objectFit: 'contain' }} />
  </figure>
);

Unit.propTypes = {
  title: PropTypes.string,
  testimg: PropTypes.object.isRequired,
};

export default Unit;
