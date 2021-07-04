import React, { Component, useState } from 'react';
import { Radar, Doughnut } from 'react-chartjs-2';
import Dropdown from 'react-select';
import 'array-flat-polyfill';
import { Container, DropdownContainer, RadarContainer } from './ChessChart.css';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';

import { data } from './complete';

class ChessChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: 'Magnus_Carlsen',
      playerTwo: 'Anish_Giri',
      playerThree: 'Fabiano_Caruana',
      playerFour: 'Liren_Ding',
      playerOptions: [
        { value: 'Magnus_Carlsen', label: 'Magnus Carlsen' },
        { value: 'Anish_Giri', label: 'Anish Giri' },
        { value: 'Fabiano_Caruana', label: 'Fabiano Caruana' },
        { value: 'Hikaru_Nakamura', label: 'Hikaru Nakamura' },
        { value: 'Alireza_Firouzja', label: 'Alireza Firouzja' },
        { value: 'Liren_Ding', label: 'Ding Liren' },
        { value: 'Ian_Nepomniachtchi', label: 'Ian Nepomniachtchi' },
      ],
      color: 'white',
      chessObject: new Chess(),
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      games: [],
      moves: [],
      labels: [],
      datasets: [],
    };
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handlePlayerOneChange = this.handlePlayerOneChange.bind(this);
    this.handlePlayerTwoChange = this.handlePlayerTwoChange.bind(this);
    this.handlePlayerThreeChange = this.handlePlayerThreeChange.bind(this);
    this.handlePlayerFourChange = this.handlePlayerFourChange.bind(this);
    this.handleMoveSelect = this.handleMoveSelect.bind(this);
    this.generateChart = this.generateChart.bind(this);
  }

  generateChart = (
    totalMoveCountMap,
    playersMoveCountMap,
    newGames,
    newMove = null
  ) => {
    let newLabels = [];
    let newDatasets = [];

    let tempArr = [];
    for (let i in totalMoveCountMap) {
      tempArr.push({ move: i, count: totalMoveCountMap[i] });
    }

    tempArr.sort((a, b) => {
      return b.count - a.count;
    });

    tempArr.forEach(move => {
      newLabels.push(move.move);
    });

    let tempOpponentMap = {};
    for (let i in playersMoveCountMap) {
      tempOpponentMap = {};
      tempOpponentMap['label'] = i;
      tempOpponentMap['data'] = [];
      newLabels.forEach(move => {
        tempOpponentMap['data'].push(playersMoveCountMap[i][move]);
      });

      if (i == this.state.playerTwo) {
        tempOpponentMap['backgroundColor'] = 'rgba(255, 0, 0, 0.1)';
      } else if (i == this.state.playerThree) {
        tempOpponentMap['backgroundColor'] = 'rgba(0, 255, 0, 0.1)';
      } else {
        tempOpponentMap['backgroundColor'] = 'rgba(0, 0, 255, 0.1)';
      }
      newDatasets.push(tempOpponentMap);
    }

    let chessObject = this.state.chessObject;
    let fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    if (newMove) {
      chessObject.move(newMove);
      fen = chessObject.fen();
    }

    this.setState({
      fen: fen,
      games: newGames,
      labels: newLabels,
      datasets: newDatasets,
    });
  };

  handlePlayerOneChange = event => {
    this.setState({ playerOne: event.value,
      moves: [],
      labels: [],
      datasets: [
        {
          data: [],
        },
      ]
  }, () => {
    this.handleReset()
  })
}

  handlePlayerTwoChange = event => {
    this.setState({ playerTwo: event.value,
      moves: [],
      labels: [],
      datasets: [
        {
          data: [],
        },
      ]
  }, () => {
    this.handleReset()
  })
}

  handlePlayerThreeChange = event => {
    this.setState({ playerThree: event.value,
      moves: [],
      labels: [],
      datasets: [
        {
          data: [],
        },
      ]
  }, () => {
    this.handleReset()
  })
}

  handlePlayerFourChange = event => {
    this.setState({ playerFour: event.value,
      moves: [],
      labels: [],
      datasets: [
        {
          data: [],
        },
      ]
  }, () => {
    this.handleReset()
  })
}

  handlePlayerChange = event => {};

  handleReset = () => {
    this.generateChart({}, {}, this.state.games)
  };

  handleMoveSelect = event => {
    if (event[0]) {
      let moves = this.state.moves;
      let newMove = this.state.labels[event[0]._index];
      moves.push(this.state.labels[event[0]._index]);
      let moveNumber = moves.length;

      let totalMoveCountMap = {};
      let playersMoveCountMap = {};
      let isEqual = false;
      let opponentName = '';
      let newGames = this.state.games;
      newGames.filter(game => {
        isEqual = true;
        moves.some((move, key) => {
          if (game.moves[key] != move) {
            isEqual = false;
            return false;
          }
        });
        if (isEqual) {
          if (!totalMoveCountMap[game.moves[moveNumber]]) {
            totalMoveCountMap[game.moves[moveNumber]] = 1;
          } else {
            totalMoveCountMap[game.moves[moveNumber]]++;
          }

          if (this.state.playerOne == game.white) {
            opponentName = game.black;
          } else {
            opponentName = game.white;
          }

          if (!playersMoveCountMap[opponentName]) {
            playersMoveCountMap[opponentName] = {};
          }
          if (!playersMoveCountMap[opponentName][game.moves[moveNumber]]) {
            playersMoveCountMap[opponentName][game.moves[moveNumber]] = 1;
          } else {
            playersMoveCountMap[opponentName][game.moves[moveNumber]]++;
          }
          return true;
        }
        return false;
      });

      this.generateChart(
        totalMoveCountMap,
        playersMoveCountMap,
        newGames,
        newMove
      );
    }
  };

  componentDidMount() {
    let totalMoveCountMap = {};
    let playersMoveCountMap = {};

    let newGames = [];
    let opponentName = '';

    data.forEach(entry => {
      if (
        (entry.white == this.state.playerOne ||
          entry.black == this.state.playerOne) &&
        (entry.white == this.state.playerTwo ||
          entry.black == this.state.playerTwo ||
          entry.white == this.state.playerThree ||
          entry.black == this.state.playerThree ||
          entry.white == this.state.playerFour ||
          entry.black == this.state.playerFour)
      ) {
        let tempGame = entry;
        let moveString = entry.moves;
        let moves = moveString.split(' ');
        tempGame['moves'] = moves;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].indexOf('.') != -1) {
            moves.splice(i, 1);
          }
        }
        if (!totalMoveCountMap[moves[0]]) {
          totalMoveCountMap[moves[0]] = 1;
        } else {
          totalMoveCountMap[moves[0]]++;
        }

        if (this.state.playerOne == entry.white) {
          opponentName = entry.black;
        } else {
          opponentName = entry.white;
        }

        if (!playersMoveCountMap[opponentName]) {
          playersMoveCountMap[opponentName] = {};
        }
        if (!playersMoveCountMap[opponentName][moves[0]]) {
          playersMoveCountMap[opponentName][moves[0]] = 1;
        } else {
          playersMoveCountMap[opponentName][moves[0]]++;
        }
        newGames.push(tempGame);
      }
    });

    this.generateChart(totalMoveCountMap, playersMoveCountMap, newGames);
  }

  render() {
    let radarData = {
      labels: this.state.labels,
      datasets: this.state.datasets,
    };

    let doughnutData = JSON.parse(JSON.stringify(radarData));
    doughnutData.datasets.forEach(circle => {
      circle.backgroundColor = [
        '#0051ff',
        '#2f86ff',
        '#51acff',
        '#8bc3f6',
        '#a1e0ff',
      ];
    });

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
        <DropdownContainer>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions}
            onChange={this.handlePlayerFourChange}
            value={this.state.playerFour}
            placeholder="Select a Player"
          />
        </DropdownContainer>
        <RadarContainer>
          <Radar
            data={radarData}
            onElementsClick={evt => {
              this.handleMoveSelect(evt);
            }}
          ></Radar>
          <Doughnut data={doughnutData}></Doughnut>
        </RadarContainer>
        <Chessboard position={this.state.fen}></Chessboard>
      </Container>
    );
  }
}

export default ChessChart;
