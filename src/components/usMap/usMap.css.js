import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  text-align: center;
`;

export const Text = styled.span`
  display: inline;
  font-size: 3rem;
  font-weight: 500;
  color: ${({ side }) =>
    side === 'p' ? 'blue' : side === 'r' ? 'red' : 'black'};
  ${MEDIA.TABLET`
    display: block;
  `};
`;

export const MapContainer = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

export const DropdownContainer = styled.div`
  align-content: center;
  padding-left: 10vw;
  padding-right: 10vw;
`;