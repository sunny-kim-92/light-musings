/* eslint react/prop-types: 0 */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

const HighlightedCell = ({ value, style, ...restProps }) => (
  <Table.Cell
    {...restProps}
    style={{
      fontSize: 13,
      backgroundColor:
        value === 183 ||
        value === 1387 ||
        value === 15 ||
        value === 56 ||
        value === 456 ||
        value === 1493 ||
        value === 192 ||
        value === 16 ||
        value === 'Derrius Guice'
          ? '#e8e8e8'
          : value === 7.6 || value === 6.5
          ? '#00ff00'
          : 'white',
      ...style,
    }}
  >
    <span>{value}</span>
  </Table.Cell>
);

const Cell = props => <HighlightedCell {...props} />;

export default () => {
  const columns = [
    { name: 'Player', title: 'Player' },
    { name: 'RushAttempts', title: 'Rush Attempts' },
    { name: 'RushYards', title: 'Rush Yards' },
    { name: 'YardsPerRush', title: 'Yards Per Rush' },
    { name: 'RushTDs', title: 'Rush TD' },
    { name: 'TotalTouches', title: 'Total Touches' },
    { name: 'TotalYards', title: 'Total Yards' },
    { name: 'TotalTDs', title: 'Total TD' },
  ];
  const rows = [
    {
      Player: 'Derrius Guice',
      RushAttempts: 183,
      RushYards: 1387,
      YardsPerRush: 7.6,
      RushTDs: 15,
      TotalTouches: 192,
      TotalYards: 1493,
      TotalTDs: 16,
    },
    {
      Player: 'Leonard Fournette',
      RushAttempts: 129,
      RushYards: 843,
      YardsPerRush: 6.5,
      RushTDs: 8,
      TotalTouches: 144,
      TotalYards: 989,
      TotalTDs: 8,
    },
  ];

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <Table cellComponent={Cell} />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};
