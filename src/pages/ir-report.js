import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Title from 'components/format/title';
import DateForm from 'components/format/dateform';
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

const IR = ({ data }) => {
  const info = data.irJson;
  return (
    <Layout>
      <GatsbyImage
        image={info.headerImg.childImageSharp.gatsbyImageData
          ? info.headerImg.childImageSharp.gatsbyImageData
          : {}}
        alt={info.headerAlt}
        style={{ maxHeight: '40vh' }} />
      <Box>
        <Title as="h1" size="large">
          {info.title}
        </Title>
        <DateForm>{info.date}</DateForm>
      </Box>
      <BlogPadding>
        <div>{renderAst(info.content.childMarkdownRemark.htmlAst)}</div>
      </BlogPadding>
    </Layout>
  );
};

IR.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IR;

export const query = graphql`query IRQuery {
  irJson {
    title
    date
    content {
      childMarkdownRemark {
        htmlAst
      }
    }
    headerImg {
      childImageSharp {
        gatsbyImageData(height: 500, quality: 90, layout: FULL_WIDTH)
      }
    }
    headerAlt
  }
}
`;
