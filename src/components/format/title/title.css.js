import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: inline;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '550';
      default:
        return '450';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '4.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
