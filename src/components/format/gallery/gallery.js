import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/format/gallery/item';
import Title from 'components/format/title';
import { Container } from './gallery.css';
import { Link } from 'gatsby';

const Gallery = ({ type, items }) => (
  <div>
    <Container>
      <Title as="h2" size="large">
        {type}
      </Title>
      {items.map((item, i) => (
        <Link
          key={i}
          style={{ textDecoration: 'none' }}
          to={item.frontmatter.link}
        >
          <Item {...item.frontmatter} key={i} />
        </Link>
      ))}
    </Container>
  </div>
);

Gallery.propTypes = {
  type: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
