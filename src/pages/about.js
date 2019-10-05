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
      <p>
        GitHub -{' '}
        <a href="https://github.com/sunny-kim-92">
          https://github.com/sunny-kim-92
        </a>
      </p>
      <p>
        LinkedIn -{' '}
        <a href="https://www.linkedin.com/in/sunnykim92/">
          https://www.linkedin.com/in/sunnykim92/
        </a>
      </p>
      <p>
        Site adapted from Gatsby Universal Starter -{' '}
        <a href="https://www.gatsbyjs.org/starters/fabe/gatsby-universal">
          https://www.gatsbyjs.org/starters/fabe/gatsby-universal/
        </a>
      </p>
      <p>
        Graphs (unless otherwise noted) developed with{' '}
        <a href="https://github.com/jerairrest/react-chartjs-2">ChartJS</a>
      </p>
      <p>
        Tables developed with{' '}
        <a href="https://devexpress.github.io/devextreme-reactive/react/grid/">
          DX React
        </a>{' '}
        and <a href="https://material-ui.com/">Material UI</a>
      </p>
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
