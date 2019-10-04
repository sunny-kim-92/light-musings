import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Title from 'components/format/title';
import Date from 'components/format/date';
import rehypeReact from 'rehype-react';
import BlogPadding from 'components/format/blogpadding';

import FolesChart from 'components/i-components/ir-report/FolesChart';
import GuiceFirstTable from 'components/i-components/ir-report/GuiceFirstTable';
import GuiceSecTable from 'components/i-components/ir-report/GuiceSecTable';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'foles-chart': FolesChart,
    'guice-first': GuiceFirstTable,
    'guice-sec': GuiceSecTable,
  },
}).Compiler;

const IR = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.irJson.title}
      </Title>
      <Date>{data.irJson.date}</Date>
    </Box>
    <BlogPadding>
      <div>{renderAst(data.irJson.content.childMarkdownRemark.htmlAst)}</div>
    </BlogPadding>
  </Layout>
);

IR.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IR;

export const query = graphql`
  query IRQuery {
    irJson {
      title
      date
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`;
