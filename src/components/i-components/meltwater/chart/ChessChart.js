import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Dropdown from 'react-select';
import 'array-flat-polyfill';
import { Container, DropdownContainer, RadarContainer } from './ChessChart.css';

import { data } from './data';

class ChessChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
      playerOptions: [
        {value: 'Magnus Carlsen', label: 'Magnus Carlsen'},
        {value: 'Anish Giri', label: 'Anish Giri'},
      ],
      color: 'white',
      map: {},
      moves: [],
      labels: [],
      datasets: [],
    };
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handlePlayerOneChange = this.handlePlayerOneChange.bind(this);
    this.handlePlayerTwoChange = this.handlePlayerTwoChange.bind(this);
    this.handleMoveSelect = this.handleMoveSelect.bind(this);

  }

  componentDidMount(){
    this.setState({
      playerOne: 'Magnus Carlsen',
      playerTwo: 'Anish Giri'
    })
    this.handlePlayerChange()
  }

  handlePlayerOneChange = (event) => {
    this.setState({
      playerOne: event.value
    }, () => {
      this.handlePlayerChange()
    })
  }

  handlePlayerTwoChange = (event) => {
    this.setState({
      playerTwo: event.value
    }, () => {
      this.handlePlayerChange()
    })
  }

  handlePlayerChange = (event) => {
    let newMap = {};
    let newLabels = [];
    let newDatasets = [];
    data.forEach(entry => {
      if (entry.search("['p']") != -1) {
        let moveString = entry.substring(entry.indexOf("['p']") + 7);
        let moves = moveString.split(' ');
        if (!newMap[moves[1]]) {
          newMap[moves[1]] = 1;
        } else {
          newMap[moves[1]]++;
        }
      }
    });

    let tempArr = []
    for (let i in newMap) {
      tempArr.push({move: i, count: newMap[i]})
    }

    tempArr.sort((a, b) => {
      return b.count - a.count
    })

    tempArr.forEach((move) => {
      newLabels.push(move.move);
      newDatasets.push(move.count);
    })

    this.setState({
      labels: newLabels,
      datasets: [
        {
          data: newDatasets,
        },
      ],
    });
  }

  handleMoveSelect = (event) => {
    console.log(event)
  }

  render() {
    let data = {
      labels: this.state.labels,
      datasets: this.state.datasets,
    };

    let options = {
      legend: {
        display: false,
      },
      // onClick: this.handleMoveSelect(event)
    };

    return (
      <Container>
        <DropdownContainer>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions}
            onChange={this.handlePlayerOneChange}
            value={this.state.playerOne}
            placeholder="Select a Player"
          />
        </DropdownContainer>
        <DropdownContainer>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions}
            onChange={this.handlePlayerTwoChange}
            value={this.state.playerTwo}
            placeholder="Select a Player"
          />
        </DropdownContainer>
        <RadarContainer>
          <Radar data={data} options={options} onElementsClick={(evt) => {this.handleMoveSelect(evt)}}></Radar>
        </RadarContainer>
      </Container>
    );
  }
}

export default ChessChart;
