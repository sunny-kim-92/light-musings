import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns === 2 ? "repeat(2, 1fr)"
: props.columns === 3 ? "repeat(3, 1fr)"
: null};
  grid-gap: 4rem;
  padding: 0 15rem 10rem;
  ${MEDIA.TABLET`
    display: block;
  `};
`;
