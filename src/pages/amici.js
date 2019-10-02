import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Title from 'components/format/title';
import rehypeReact from 'rehype-react';
import BlogPadding from 'components/format/blogpadding';

import USCaseMap from 'components/i-components/amici/USCaseMap';
import BothBar from 'components/i-components/amici/BothBar';
import JusticeTable from 'components/i-components/amici/JusticeTable';
import AmiciTotalBar from 'components/i-components/amici/AmiciTotalBar';
import SankeyChart from 'components/i-components/amici/SankeyChart';
import CaseBar from 'components/i-components/amici/CaseBar';
import Comorbtable from 'components/i-components/amici/ComorbTable/ComorbTable.js';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'both-bar': BothBar,
    'justice-table': JusticeTable,
    'us-case-map': USCaseMap,
    'amici-total-bar': AmiciTotalBar,
    'sankey-chart': SankeyChart,
    'case-bar': CaseBar,
    'comorb-table': Comorbtable,
  },
}).Compiler;

const Amici = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.amiciJson.title}
      </Title>
    </Box>
    <BlogPadding>
      <div>{renderAst(data.amiciJson.content.childMarkdownRemark.htmlAst)}</div>
    </BlogPadding>
  </Layout>
);

Amici.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Amici;

export const query = graphql`
  query AmiciQuery {
    amiciJson {
      title
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`;
