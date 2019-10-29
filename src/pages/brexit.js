import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Head from 'components/format/head';
import Title from 'components/format/title';
import BlogPadding from 'components/format/blogpadding';
import ImageBox from 'components/format/ImageBox';

import BrexitStuff from 'components/i-components/brexit/brexit.js';

const Brexit = ({ data }) => (
  <Layout>
    <Head pageTitle={data.brexitJson.title} />
    <Box>
      <Title as="h2" size="large">
        Build Your Own Gymnastics Vault!
      </Title>
    </Box>
      <BrexitStuff />
  </Layout>
);

Brexit.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Brexit;

export const query = graphql`
  query {
    brexitJson {
      title
      date
    }
  }
`;
