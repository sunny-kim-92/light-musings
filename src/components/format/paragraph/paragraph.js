import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container } from './paragraph.css';

const Paragraph = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
