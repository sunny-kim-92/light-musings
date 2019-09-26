import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import USMap from 'components/usMap';
import TestBarChart from 'components/testBarChart';
import TestTable from 'components/TestTable';
import StateHighTotalBarChart from 'components/StateHighTotalBarChart';
import SankeyChart from 'components/SankeyChart';


const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <USMap />
    <TestBarChart />
    <TestTable />
    <StateHighTotalBarChart />
    <SankeyChart />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query AmiciQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
