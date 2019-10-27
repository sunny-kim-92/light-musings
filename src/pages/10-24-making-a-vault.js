import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/format/layout';
import Box from 'components/format/box';
import Title from 'components/format/title';
import DateForm from 'components/format/dateform';
import rehypeReact from 'rehype-react';
import BlogPadding from 'components/format/blogpadding';

import Direction from 'components/i-components/vaultComp/galleries/direction'
import FTurn from 'components/i-components/vaultComp/galleries/FTurn'
import BP from 'components/i-components/vaultComp/galleries/BP'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'dire': Direction,
    'fturn': FTurn,
    'bp': BP
  }
}).Compiler;

const VaultArticle = ({ data }) => {
  const info = data.vaultarticleJson;
  return (
    <Layout>
      <Img
        fluid={
          info.headerImg.childImageSharp.fluid
            ? info.headerImg.childImageSharp.fluid
            : {}
        }
        alt={info.headerAlt}
        style={{ maxHeight: '40vh' }}
      />
      <Box>
        <Title as="h2" size="large">
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

VaultArticle.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VaultArticle;

export const query = graphql`
  query VaultArticleQuery {
    vaultarticleJson {
      title
      date
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
      headerImg {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      headerAlt
    }
  }
`;
