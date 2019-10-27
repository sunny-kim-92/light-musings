import React from 'react';
import PageGal from 'components/format/PageGal';
import { StaticQuery, graphql } from 'gatsby';

const BP = () => (
  <StaticQuery
    query={graphql`
      query {
        vaultarticleJson {
          galleries {
            bp {
              title
              testimg {
                childImageSharp {
                  fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return <PageGal items={data.vaultarticleJson.galleries.bp} num={3} />;
    }}
  />
);

export default BP;
