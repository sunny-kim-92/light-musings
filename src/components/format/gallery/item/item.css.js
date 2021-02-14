import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 0.5rem;
`;

export const Copy = styled.p`
  font-size: 1.5rem;
  color: #757575;
  margin: 1rem 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const DateForm = styled.span`
  font-size: 1.5rem;
  font-weight: 1000;
  margin: 2rem 2rem;
`;
