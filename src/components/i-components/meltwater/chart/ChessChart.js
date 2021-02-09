import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import 'array-flat-polyfill';

import { data } from './data';

class ChessChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'Carlsen, Magnus',
      color: 'white',
      map: {},
      moves: [],
      labels: [],
      datasets: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    let newMap = {};
    let newLabels = [];
    let newDatasets = [];
    data.forEach(entry => {
      if (entry.search("['p']") != -1) {
        let moveString = entry.substring(entry.indexOf("['p']") + 7);
        // console.log('in game string');
        // console.log(moveString);
        let moves = moveString.split(' ');
        if (!newMap[moves[1]]) {
          newMap[moves[1]] = 1;
        } else {
          newMap[moves[1]]++;
        }
        // console.log(newMap);
        // moves.forEach(move => {
        //   console.log(move)
        //   if(move.search('.') == -1)
        //   if (!newMap[move]) {
        //     newMap[move] = 1;
        //   } else {
        //     newMap[move]++;
        //   }
        // });
      }
    });
    // console.log(newMap)

    for (let i in newMap) {
      newLabels.push(i);
      newDatasets.push(newMap[i]);
    }

    this.setState({
      labels: newLabels,
      datasets: [
        {
          data: newDatasets,
        },
      ],
    });
  }

  render() {
    // let testSet = {
    //   datasets: [
    //     {
    //       data: [19, 33, 3, 1],
    //     },
    //   ],
    //   labels: ['d4', 'e4', 'c4', 'Nf3'],
    // };
    let data = {
      labels: this.labels,
      datasets: this.datasets,
    };
    console.log(data)
    return <Radar data={data}></Radar>;
  }
}

export default ChessChart;
