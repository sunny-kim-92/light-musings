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
      playerThree: null,
      playerFour: null,
      playerOptions: [
        { value: 'Magnus Carlsen', label: 'Magnus Carlsen' },
        { value: 'Anish Giri', label: 'Anish Giri' },
        { value: 'Fabiano Caruana', label: 'Fabiano Caruana' },
      ],
      color: 'white',
      games: [],
      moves: [],
      labels: [],
      datasets: [],
    };
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handlePlayerOneChange = this.handlePlayerOneChange.bind(this);
    this.handlePlayerTwoChange = this.handlePlayerTwoChange.bind(this);
    this.handleMoveSelect = this.handleMoveSelect.bind(this);
  }

  onMount = () => {
    let newMap = {};
    let games = [];
    let newLabels = [];
    let newDatasets = [];
    data.forEach(entry => {
      if (entry.search("['p']") != -1) {
        let tempGame = {};
        let moveString = entry.substring(entry.indexOf("['p']") + 7);
        let moves = moveString.split(' ');
        tempGame['moves'] = moves
        for(let i = 0; i < moves.length; i++){
          if(moves[i].indexOf('.') != -1){
            moves.splice(i, 1);
          }
        }
        if (!newMap[moves[0]]) {
          newMap[moves[0]] = 1;
        } else {
          newMap[moves[0]]++;
        }
        games.push(tempGame)
      }
    });

    let tempArr = [];
    for (let i in newMap) {
      tempArr.push({ move: i, count: newMap[i] });
    }

    tempArr.sort((a, b) => {
      return b.count - a.count;
    });

    tempArr.forEach(move => {
      newLabels.push(move.move);
      newDatasets.push(move.count);
    });

    this.setState({
      games: games,
      labels: newLabels,
      datasets: [
        {
          data: newDatasets,
        },
      ],
    });
  }

  componentDidMount() {
    this.setState({
      playerOne: 'Magnus Carlsen',
      playerTwo: 'Anish Giri',
    });
    this.onMount();
  }

  handlePlayerOneChange = event => {
    this.setState({playerOne: event.value},
      () => {this.handlePlayerChange();});
  };

  handlePlayerTwoChange = event => {
    this.setState({playerTwo: event.value},
      () => {this.handlePlayerChange();});
  };

  handlePlayerThreeChange = event => {
    this.setState({playerTjree: event.value},
      () => {this.handlePlayerChange();});
  };

  handlePlayerFourChange = event => {
    this.setState({playerFour: event.value},
      () => {this.handlePlayerChange();});
  };

  handlePlayerChange = event => {

  };

  handleMoveSelect = event => {
    if (event[0]) {
      let moves = this.state.moves;
      moves.push(this.state.labels[event[0]._index])
      console.log(moves)
      let moveNumber = moves.length

      let newMap = {};
      let newLabels = [];
      let newDatasets = [];
      let isEqual = false;
      this.state.games.forEach((movelist) => {
        isEqual = true
        moves.some((move, key) => {
          // console.log('game move: ' + movelist.moves[key])
          // console.log('selected game: ' + move)
          if(movelist.moves[key] != move){
            // console.log('not match')
            isEqual = false
            return false
          }
        })
        if(isEqual){
          console.log('is equal')
          if (!newMap[movelist.moves[moveNumber]]) {
            newMap[movelist.moves[moveNumber]] = 1;
          } else {
            newMap[movelist.moves[moveNumber]]++;
          }
        }
      });

      let tempArr = [];
      for (let i in newMap) {
        tempArr.push({ move: i, count: newMap[i] });
      }

      tempArr.sort((a, b) => {
        return b.count - a.count;
      });

      tempArr.forEach(move => {
        newLabels.push(move.move);
        newDatasets.push(move.count);
      });

      this.setState({
        moves: moves,
        labels: newLabels,
        datasets: [
          {
            data: newDatasets,
          },
        ],
      });
    }
  };

  handleReset = () => {
    this.setState({
      moves: [],
      labels: [],
      datasets: [
        {
          data: [],
        },
      ],
    });
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
        <DropdownContainer>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions}
            onChange={this.handlePlayerThreeChange}
            value={this.state.playerThree}
            placeholder="Select a Player"
          />
        </DropdownContainer>
        {/* <DropdownContainer>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions}
            onChange={this.handlePlayerFourChange}
            value={this.state.playerFour}
            placeholder="Select a Player"
          />
        </DropdownContainer> */}
        <RadarContainer>
          <Radar
            data={data}
            options={options}
            onElementsClick={evt => {
              this.handleMoveSelect(evt);
            }}
          ></Radar>
        </RadarContainer>
      </Container>
    );
  }
}

export default ChessChart;
