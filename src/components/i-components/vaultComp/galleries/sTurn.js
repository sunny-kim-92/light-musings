import React from 'react';
import PageGal from 'components/format/PageGal';
import { StaticQuery, graphql } from 'gatsby';

const STurn = () => (
  <StaticQuery
    query={graphql`
      query {
        vaultarticleJson {
          galleries {
            sTurn {
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
      return <PageGal items={data.vaultarticleJson.galleries.sTurn} num={3} />;
    }}
  />
);

export default STurn;
