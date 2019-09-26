import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Head from 'components/format/head';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
