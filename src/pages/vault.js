import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Head from 'components/format/head';
import Title from 'components/format/title';
import BlogPadding from 'components/format/blogpadding';
import BlinkBox from 'components/format/blinkbox';

import VaultComp from 'components/i-components/vaultComp/VaultComp.js';

const Vault = ({ data }) => (
  <Layout>
    <Head pageTitle={data.vaultJson.title} />
    <Box>
      <Title as="h2" size="large">
        Build Your Own Gymnastics Vault!
      </Title>
    </Box>
    <BlogPadding>
      <BlinkBox>
        <Link to="/making-a-vault">
          Click Here for Explanations / Accompanying Article
        </Link>
      </BlinkBox>
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
