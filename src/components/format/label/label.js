import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container } from './label.css';

const Label = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
