import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 1rem 0;
  ${MEDIA.TABLET`
    display: block;
  `};
`;

export const Divider = styled.span`
  ${({ type }) =>
    type == 'projects' &&
    `
display: block;
height: 1px;
width:85%;
margin: 0 auto 5rem;
background-color: #757575;
`}
`;
