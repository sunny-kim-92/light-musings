import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, DateForm } from './item.css';

const Item = ({ title, subtitle, date, frontimg }) => (
  <figure>
    <div style={{ overflow: 'hidden', maxHeight:'40vh', maxWidth:'20vw'}}>
    <Img
      fluid={frontimg ? frontimg.childImageSharp.fluid : {}}
      alt={title}
    />
    </div>
    <figcaption>
      <Title>{title}</Title>
      <DateForm>{date}</DateForm>
      <Copy>{subtitle}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  frontimg: PropTypes.object.isRequired,
};

export default Item;
