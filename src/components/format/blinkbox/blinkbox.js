import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './blinkbox.css';

const BlinkBox = ({ children }) => <Container>{children}</Container>;

BlinkBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlinkBox;
