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
  //   const columns = [{
  //     name: 'State', value: 'State'
  //   },
  // ];

  const colArr = [
    { name: 'State', value: 'State' },
    { name: 'Texas', value: 'Texas' },
    { name: 'Louisiana', value: 'Louisiana' },
    { name: 'Indiana', value: 'Indiana' },
    { name: 'Nebraska', value: 'Nebraska' },
    { name: 'SouthCarolina', value: 'South Carolina' },
    { name: 'Oklahoma', value: 'Oklahoma' },
    { name: 'Arkansas', value: 'Arkansas' },
    { name: 'Kansas', value: 'Kansas' },
    { name: 'Georgia', value: 'Georgia' },
    { name: 'Utah', value: 'Utah' },
    { name: 'Alabama', value: 'Alabama' },
    { name: 'Michigan', value: 'Michigan' },
    { name: 'Idaho', value: 'Idaho' },
    { name: 'SouthDakota', value: 'South Dakota' },
    { name: 'RhodeIsland', value: 'Rhode Island' },
    { name: 'Colorado', value: 'Colorado' },
    { name: 'Wyoming', value: 'Wyoming' },
    { name: 'Ohio', value: 'Ohio' },
    { name: 'Montana', value: 'Montana' },
    { name: 'California', value: 'California' },
    { name: 'Washington', value: 'Washington' },
    { name: 'Florida', value: 'Florida' },
    { name: 'Oregon', value: 'Oregon' },
    { name: 'Minnesota', value: 'Minnesota' },
    { name: 'Alaska', value: 'Alaska' },
    { name: 'NorthDakota', value: 'North Dakota' },
    { name: 'NewJersey', value: 'New Jersey' },
    { name: 'Massachusetts', value: 'Massachusetts' },
    { name: 'Maryland', value: 'Maryland' },
    { name: 'Iowa', value: 'Iowa' },
    { name: 'Connecticut', value: 'Connecticut' },
    { name: 'Pennsylvania', value: 'Pennsylvania' },
    { name: 'Arizona', value: 'Arizona' },
    { name: 'Illinois', value: 'Illinois' },
    { name: 'Wisconsin', value: 'Wisconsin' },
    { name: 'Mississippi', value: 'Mississippi' },
    { name: 'NewYork', value: 'New York' },
    { name: 'WestVirginia', value: 'West Virginia' },
    { name: 'Vermont', value: 'Vermont' },
    { name: 'NorthCarolina', value: 'North Carolina' },
    { name: 'Nevada', value: 'North Carolina' },
    { name: 'DistrictofColumbia', value: 'District of Columbia' },
    { name: 'Missouri', value: 'Missouri' },
    { name: 'Hawaii', value: 'Hawaii' },
    { name: 'Kentucky', value: 'Kentucky' },
    { name: 'Virginia', value: 'Virginia' },
    { name: 'Tennessee', value: 'Tennessee' },
    { name: 'Maine', value: 'Maine' },
    { name: 'Delaware', value: 'Delaware' },
    { name: 'NewMexico', value: 'New Mexico' },
    { name: 'NewHampshire', value: 'New Hampshire' },
  ];

  // const final = [];
  // colArr.forEach(val => {
  //   final.push({ name: val.replace(/\s/g, ''), title: val });
  // });
  const rows = data;

  return (
    <Paper>
      <Grid rows={rows} columns={colArr}>
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
