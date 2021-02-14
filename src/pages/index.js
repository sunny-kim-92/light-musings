import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/format/layout';
import Gallery from 'components/format/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const articles = [];
  const projects = [];

  data.allMarkdownRemark.edges.forEach(val => {
    if (val.node.frontmatter.type == 'project') {
      projects.push(val.node);
    } else if (val.node.frontmatter.type == 'article') {
      articles.push(val.node);
    }
  });
  return (
    <Layout>
      <Gallery type='projects' items={projects} />
      <Gallery type='articles' items={articles} />
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
