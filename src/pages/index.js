import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/format/layout';
import Gallery from 'components/format/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const posts = [];
  data.allMarkdownRemark.edges.forEach(val => {
    val.node.frontmatter.type === 'blog-post' ? posts.push(val.node) : null;
  });
  return (
    <Layout>
      <Gallery items={posts} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query BlogpostQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            link
            date(formatString: "DD MMMM, YYYY")
            title
            subtitle
            type
            frontimg {
              childImageSharp {
                fluid(maxHeight: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
