import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
// import Gallery from 'components/gallery';
// import IOExample from 'components/io-example';
import USMap from 'components/usMap';

// import Modal from 'containers/modal';
import { graphql } from 'gatsby';
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
    {/* <Gallery items={data.homeJson.gallery} /> */}
    {/* <div style={{ height: '50vh' }} /> */}

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
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
