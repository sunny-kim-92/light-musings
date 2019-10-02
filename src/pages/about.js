import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Head from 'components/format/head';
import Title from 'components/format/title';
import BlogPadding from 'components/format/blogpadding';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <Title as="h2" size="large">
        About Me
      </Title>
    </Box>
    <BlogPadding>
      <p>Name - Sunny</p>
      <p>
        Who I am - Software Developer | Data Journalist | News Junkie | Sports
        Fan
      </p>
      <a href="https://github.com/sunny-kim-92">
        <p>GitHub - https://github.com/sunny-kim-92</p>
      </a>
      <a href="https://www.linkedin.com/in/sunnykim92/">
        <p>LinkedIn - https://www.linkedin.com/in/sunnykim92/</p>
      </a>
      <a href="https://www.gatsbyjs.org/starters/fabe/gatsby-universal">
        <p>
          Site adapted from Gatsby Universal Starter -
          https://www.gatsbyjs.org/starters/fabe/gatsby-universal/
        </p>
      </a>
    </BlogPadding>
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
      name
      val {
        name
        link
      }
    }
  }
`;
