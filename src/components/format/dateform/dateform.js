import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './dateform.css';

const DateForm = ({ children }) => {
  return (
  <Text>{children}</Text>
  );
};

DateForm.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DateForm;
