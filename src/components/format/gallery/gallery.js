import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/format/gallery/item';
import { Container } from './gallery.css';
import { Link } from 'gatsby';

const Gallery = ({ items }) => (
  <div>
      <Container>
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
