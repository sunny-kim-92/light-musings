import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Head from 'components/format/head';
import rehypeReact from "rehype-react"

import BothBar from 'components/i-components/amici/BothBar';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "both-bar": BothBar }
}).Compiler

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <div>{renderAst(data.aboutJson.content.childMarkdownRemark.htmlAst)}</div>
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
          htmlAst
        }
      }
    }
  }
`;
