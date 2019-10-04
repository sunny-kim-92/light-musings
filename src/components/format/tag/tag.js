import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Tag = ({ children }) => {
  return (
    <Text>
      Tags: {children}
    </Text>
  );
};

Tag.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ElementTagNameMap;
