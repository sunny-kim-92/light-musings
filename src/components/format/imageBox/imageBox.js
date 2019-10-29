import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './imagebox.css';

const ImageBox = ({ children }) => <Container>{children}</Container>;

ImageBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageBox;
