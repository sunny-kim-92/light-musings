import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";
import { Title, Copy, DateForm } from './item.css';

const Item = ({ title, subtitle, date, frontimg }) => (
  <figure>
    <GatsbyImage
      image={frontimg ? frontimg.childImageSharp.gatsbyImageData : {}}
      alt={title}
      style={{ margin: '0 1rem 0 0', maxHeight: '25vh' }} />
    <figcaption>
      <Title>{title}</Title>
      {date && <DateForm>{date}</DateForm>}
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
