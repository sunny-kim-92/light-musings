import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { data } from './tableData';
import { SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';

const HighlightedCell = ({ value, style, ...restProps }) => (
  <Table.Cell
    {...restProps}
    style={{
      fontSize: 14,
      backgroundColor: value < 0 ? '#ef5350' : value > 0 ? '#45f75a' : 'white',
      ...style,
    }}
  >
    <span
      style={{
        color: value < 0 ? 'white' : 'black',
      }}
    >
      {value}
    </span>
  </Table.Cell>
);

const Cell = props => {
  const { column } = props;
  return <HighlightedCell {...props} />;
};

export default () => {
  const columns = [
    { name: 'State', title: 'State' },
    { name: 'Sotomayor', title: 'Sotomayor' },
    { name: 'Ginsburg', title: 'Ginsburg' },
    { name: 'Breyer', title: 'Breyer' },
    { name: 'Kagan', title: 'Kagan' },
    { name: 'Roberts', title: 'Roberts' },
    { name: 'Kavanaugh', title: 'Kavanaugh' },
    { name: 'Gorsuch', title: 'Gorsuch' },
    { name: 'Alito', title: 'Alito' },
    { name: 'Thomas', title: 'Thomas' },
  ];
  const rows = data;

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <SortingState
          defaultSorting={[{ columnName: 'State', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <Table cellComponent={Cell} />
        <TableHeaderRow showSortingControls />
      </Grid>
    </Paper>
  );
};
