import React from 'react';
import PageGal from 'components/format/PageGal';
import { StaticQuery, graphql } from 'gatsby';

const FTurn = () => (
  <StaticQuery
    query={graphql`
      query {
        vaultarticleJson {
          galleries {
            fTurn {
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
      return <PageGal items={data.vaultarticleJson.galleries.fTurn} num={3} />;
    }}
  />
);

export default FTurn;
