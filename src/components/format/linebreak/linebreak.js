import React from 'react';
import PropTypes from 'prop-types';
import { Line } from './linebreak.css';

const Linebreak = ({ children }) => {
  return <Line>{children}</Line>;
};

Linebreak.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Linebreak;
