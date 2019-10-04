import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './date.css';

const Date = ({ children }) => {
  return (
  <Text>{children}</Text>
  );
};

Date.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Date;
