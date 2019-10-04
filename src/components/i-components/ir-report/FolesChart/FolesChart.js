import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import 'array-flat-polyfill';

class FolesChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      labels: [
        '@NYG\n2017 Week 15',
        'OAK\n2017 Week 16',
        'ATL\n2018 Week 1',
        '@TB\n2018 Week 2',
        '@LAR\n2018 Week 15',
        'HOU\n2018 Week 16',
        '@WAS\n2018 Week 17',
      ],
      datasets: [
        {
          label: 'Score (4 pts per Pass TD)',
          yAxisID: 'A',
          data: [25.48, 8.52, 5.08, 15.66, 9.3, 30.94, 15.24],
          fill: false,
          borderColor: 'red',
        },
        {
          label: 'Weekly Rank',
          yAxisID: 'B',
          data: [4, 23, 30, 19, 23, 3, 16],
          fill: false,
          borderColor: 'blue',
        },
      ],
    };
    const options = {
      responsive: true,
      title: {
        display: true,
        text: 'Nick Foles Weekly Performance Since 2017 (Full games)',
        fontSize: 18,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            id: 'A',
            type: 'linear',
            position: 'left',
            ticks: {
              min: 0,
              max: 34,
            },
            // gridLines: false,
          },
          {
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
              reverse: true,
              min: 1,
              max: 35,
            },
            // gridLines: false
          },
        ],
      },
    };
    return <Line data={data} options={options}></Line>;
  }
}

export default FolesChart;
