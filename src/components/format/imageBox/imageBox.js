import React from 'react';
import PropTypes from 'prop-types';
// import Img from 'gatsby-image';
// import { Title, Copy, DateForm } from './item.css';

const ImageBox = ({ title, path }) => (
    <img
      alt={title}
      style={{ margin: '1rem', maxHeight: '80vh' }}
      src={path}
    />
);

ImageBox.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  frontimg: PropTypes.object.isRequired,
};

export default ImageBox;
