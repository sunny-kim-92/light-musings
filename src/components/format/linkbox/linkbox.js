import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './linkbox.css';

const LinkBox = ({ children }) => <Container>{children}</Container>;

LinkBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkBox;
