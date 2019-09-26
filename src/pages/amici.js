import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Title from 'components/format/title';
import Paragraph from 'components/format/paragraph';
import BlogPadding from 'components/format/blogpadding';
import Linebreak from 'components/format/Linebreak';
import Label from 'components/format/label';

import USCaseMap from 'components/i-components/amici/USCaseMap';
import BothBar from 'components/i-components/amici/BothBar';
import JusticeTable from 'components/i-components/amici/JusticeTable';
import AmiciTotalBar from 'components/i-components/amici/AmiciTotalBar';
import SankeyChart from 'components/i-components/amici/SankeyChart';
import CaseBar from 'components/i-components/amici/CaseBar';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.amiciJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Title>{data.amiciJson.test}</Title>
    </Box>
    <BlogPadding>
      <Linebreak />
      <Paragraph>{data.amiciJson.paragraphs.par1}</Paragraph>
      <Label>{data.amiciJson.labels.lab1}</Label>
    <CaseBar />
    <Linebreak />
    <AmiciTotalBar />
    <Linebreak />
    <Label>{data.amiciJson.labels.lab2}</Label>
    <Linebreak />
    <USCaseMap />
    <Linebreak />
    <Paragraph>{data.amiciJson.paragraphs.par3}</Paragraph>
    <BothBar />
    <Paragraph>{data.amiciJson.paragraphs.par4}</Paragraph>
    <Paragraph>{data.amiciJson.paragraphs.par5}</Paragraph>
    <JusticeTable />
    <SankeyChart />
    </BlogPadding>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query AmiciQuery {
    amiciJson {
      title
      test
      labels {
        lab1
        lab2
      }
      paragraphs {
        par1
        par2
        par3
        par4
        par5
      }
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
