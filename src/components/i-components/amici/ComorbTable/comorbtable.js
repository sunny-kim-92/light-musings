import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { data } from './data';
import { SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';

const colors = [
  '#FFFFFF',
  '#FCFFFC',
  '#EEFFEE',
  '#E0FFE0',
  '#D2FFD2',
  '#C4FFC4',
  '#B6FFB6',
  '#A8FFA8',
  '#9AFF9A',
  '#8CFF8C',
  '#7EFF7E',
  '#70FF70',
  '#62FF62',
  '#54FF54',
  '#46FF46',
  '#38FF38',
  '#2AFF2A',
  '#1CFF1C',
  '#0EFF0E',
  '#00FF00',
];

const HighlightedCell = ({ value, style, ...restProps }) => (
  <Table.Cell
    {...restProps}
    style={{
      fontSize: 12,
      backgroundColor:
        value < 0 ? '#ef5350' : value >= 0 ? colors[value] : 'white',
      ...style,
    }}
  >
    <span
      style={
        {
          color: value < 0 ? 'white' : 'black',
        }
      }
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
  const columns = [{}];

  const colArr = [
    'State',
    'Texas',
    'Louisiana',
    'Indiana',
    'Nebraska',
    'South Carolina',
    'Oklahoma',
    'Arkansas',
    'Kansas',
    'Georgia',
    'Utah',
    'Alabama',
    'Michigan',
    'Idaho',
    'South Dakota',
    'Rhode Island',
    'Colorado',
    'Wyoming',
    'Ohio',
    'Montana',
    'California',
    'Washington',
    'Florida',
    'Oregon',
    'Minnesota',
    'Alaska',
    'North Dakota',
    'New Jersey',
    'Massachusetts',
    'Maryland',
    'Iowa',
    'Connecticut',
    'Pennsylvania',
    'Arizona',
    'Illinois',
    'Wisconsin',
    'Mississippi',
    'New York',
    'West Virginia',
    'Vermont',
    'North Carolina',
    'Nevada',
    'District of Columbia',
    'Missouri',
    'Hawaii',
    'Kentucky',
    'Virginia',
    'Tennessee',
    'Maine',
    'Delaware',
    'New Mexico',
    'New Hampshire',
  ];

  const final = [];
  colArr.forEach(val => {
    final.push({ name: val.replace(/\s/g, ''), title: val });
  });
  console.log(final);
  const rows = data;

  return (
    <Paper>
      <Grid rows={rows} columns={final}>
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
