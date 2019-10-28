import React from 'react';
import PropTypes from 'prop-types';
import Unit from 'components/format/PageGal/unit';
import { Container } from './PageGal.css';

const PageGal = ({ items, num }) => (
  <div>
    <Container columns={num}>
      {items.map((item, i) => (
        <Unit {...item} key={i} />
      ))}
    </Container>
  </div>
);

PageGal.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PageGal;
