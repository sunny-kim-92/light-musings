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

import ChessChart from 'components/i-components/chesschart/chart/ChessChart';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'chess-chart': ChessChart,
  },
}).Compiler;

const IR = ({ data }) => {
  const info = data.chesschartJson;
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

export const query = graphql`query ChesschartQuery {
  chesschartJson {
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
