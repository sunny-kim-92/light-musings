import React from 'react';
import PageGal from 'components/format/PageGal';
import { StaticQuery, graphql } from 'gatsby';

const Direction = () => (
  <StaticQuery
    query={graphql`
      query {
        vaultarticleJson {
          galleries {
            dir {
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
      return <PageGal items={data.vaultarticleJson.galleries.dir} num={2} />;
    }}
  />
);

export default Direction;
