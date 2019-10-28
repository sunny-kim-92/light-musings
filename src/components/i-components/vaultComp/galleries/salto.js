import React from 'react';
import PageGal from 'components/format/PageGal';
import { StaticQuery, graphql } from 'gatsby';

const Salto = () => (
  <StaticQuery
    query={graphql`
      query {
        vaultarticleJson {
          galleries {
            salto {
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
      return <PageGal items={data.vaultarticleJson.galleries.salto} num={3} />;
    }}
  />
);

export default Salto;
