import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Head from 'components/format/head';
import Title from 'components/format/title';
import BlogPadding from 'components/format/blogpadding';

import VaultComp from 'components/i-components/vaultComp/VaultComp.js';

const Vault = ({ data }) => (
  <Layout>
    <Head pageTitle={data.vaultJson.title} />
    <Box>
      <Title as="h2" size="large">
        Vault Me
      </Title>
    </Box>
    <BlogPadding>
      <VaultComp />
    </BlogPadding>
  </Layout>
);

Vault.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Vault;

export const query = graphql`
  query VaultQuery {
    vaultJson {
      title
      date
    }
  }
`;
