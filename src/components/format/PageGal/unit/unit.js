import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title } from './unit.css';

const Unit = ({ title, testimg }) => (
  <figure>
    <figcaption>
      <Title>{title}</Title>
    </figcaption>
    <Img
      fluid={testimg ? testimg.childImageSharp.fluid : {}}
      alt={title}
      style={{ maxHeight: '25vh' }}
      imgStyle={{ objectFit: 'contain' }}
    />
  </figure>
);

Unit.propTypes = {
  title: PropTypes.string,
  testimg: PropTypes.object.isRequired,
};

export default Unit;
