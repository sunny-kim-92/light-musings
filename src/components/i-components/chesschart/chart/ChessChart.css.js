import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  text-align: center;
`;

export const ChartLayout = styled.div`
  display: flex;
  width: 100vw;
  ${MEDIA.TABLET`
  display: block;
`};
`;

export const DoughnutContainer = styled.div`
  height: 40vh;
  width: 55vw;
  position: relative;
  ${MEDIA.TABLET`
  width: 100%;
`};
`;

export const ChessboardContainer = styled.div`
  ${MEDIA.TABLET`
  width: 100%;
`};
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

export const DropdownContainer = styled.div`
  align-content: center;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 2vh;
`;

export const GamesTable = styled.div`
  margin-top: 8vh;
  max-height: 30vh;
  overflow-y: auto;
  justify-content: center;
  padding-bottom: 4px;
`;

export const TableHeader = styled.td`
  font-weight: bold;
  background-color: #ededed;
  border: 1px solid;

  padding-left: 2vw;
  padding-right: 2vw;
`;

export const TableCell = styled.td`
  padding-left: 2vw;
  padding-right: 2vw;
  border-left: 1px solid;
  border-right: 1px solid;
`;
