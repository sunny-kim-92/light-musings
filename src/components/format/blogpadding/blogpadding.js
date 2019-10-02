import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './blogpadding.css';

const BlogPadding = ({ children }) => <Container>{children}</Container>;

BlogPadding.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogPadding;
