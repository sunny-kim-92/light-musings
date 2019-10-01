import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Title from 'components/format/title';
import Gallery from 'components/format/gallery';
import IOExample from 'components/io-example';
import { graphql, Link } from 'gatsby';

const Index = ({ data }) => {
  const posts = []
  data.allMarkdownRemark.edges.forEach((val) => {
    val.node.frontmatter.type === 'blog-post' ? posts.push(val.node) : null
  })
return (
  <Layout>
    {posts.map((val) => {
      console.log(val)
    return (
      <Link key={val.id} to={val.frontmatter.link}>
      <h1 key={val.id}>{val.frontmatter.title}</h1>
      </Link>
    )})}
  </Layout>
);
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query BlogpostQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            link
            title
            type
            frontimg {
              childImageSharp {
                fluid(maxHeight: 500, quality: 90) {
                  src
              }
              }
            }
          }
        }
      }
    }
  }
`;
