import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Dropdown from 'react-select';
import 'array-flat-polyfill';
import {
  Container,
  DropdownContainer,
  ChartLayout,
  TableCell,
  TableHeader,
  GamesTable,
  DoughnutContainer,
  ChessboardContainer,
} from './ChessChart.css';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';

import { data } from './complete';

class ChessChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: { value: 'Magnus_Carlsen', label: 'Magnus Carlsen' },
      playerTwo: { value: 'Anish_Giri', label: 'Anish Giri' },
      playerThree: { value: 'Fabiano_Caruana', label: 'Fabiano Caruana' },
      playerFour: { value: 'Ian_Nepomniachtchi', label: 'Ian Nepomniachtchi' },
      displayChessBoard: false,
      playerOptions: [
        { value: 'Magnus_Carlsen', label: 'Magnus Carlsen' },
        { value: 'Anish_Giri', label: 'Anish Giri' },
        { value: 'Fabiano_Caruana', label: 'Fabiano Caruana' },
        { value: 'Ian_Nepomniachtchi', label: 'Ian Nepomniachtchi' },
        { value: 'Liren_Ding', label: 'Ding Liren' },
        { value: 'Alireza_Firouzja', label: 'Alireza Firouzja' },
        { value: 'Hikaru_Nakamura', label: 'Hikaru Nakamura' },
      ],
      mainPlayerColor: { value: 'Both', label: 'Both' },
      color: 'white',
      chessObject: new Chess(),
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      games: [],
      moves: [],
      labels: [],
      datasets: [],
    };
    this.getColorFilter = this.getColorFilter.bind(this);
    this.sortGames = this.sortGames.bind(this);
    this.getGameNotation = this.getGameNotation.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handlePlayerOneChange = this.handlePlayerOneChange.bind(this);
    this.handlePlayerTwoChange = this.handlePlayerTwoChange.bind(this);
    this.handlePlayerThreeChange = this.handlePlayerThreeChange.bind(this);
    this.handlePlayerFourChange = this.handlePlayerFourChange.bind(this);
    this.handleMoveSelect = this.handleMoveSelect.bind(this);
    this.generateChart = this.generateChart.bind(this);
  }

  componentDidMount() {
    let totalMoveCountMap = {};
    let playersMoveCountMap = {};

    let newGames = [];
    let opponentName = '';

    data.forEach(entry => {
      if (this.getColorFilter(entry)) {
        let tempGame = entry;
        let moves = null;
        if (typeof entry.moves == 'object') {
          moves = entry.moves;
          tempGame['moves'] = moves;
        } else {
          let moveString = entry.moves;
          moves = moveString.split(' ');
          tempGame['moves'] = moves;
          for (let i = 0; i < moves.length; i++) {
            if (moves[i].indexOf('.') != -1) {
              moves.splice(i, 1);
            }
          }
        }
        if (!totalMoveCountMap[moves[0]]) {
          totalMoveCountMap[moves[0]] = 1;
        } else {
          totalMoveCountMap[moves[0]]++;
        }

        if (this.state.playerOne.value == entry.white) {
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

    this.setState({
      displayChessBoard: true,
    });
    this.generateChart(totalMoveCountMap, playersMoveCountMap, newGames);
  }

  handleReset = () => {
    let totalMoveCountMap = {};
    let playersMoveCountMap = {};

    let newGames = [];
    let opponentName = '';

    data.forEach(entry => {
      if (this.getColorFilter(entry)) {
        let tempGame = entry;
        let moves = null;
        if (typeof entry.moves == 'object') {
          moves = entry.moves;
          tempGame['moves'] = moves;
        } else {
          let moveString = entry.moves;
          moves = moveString.split(' ');
          tempGame['moves'] = moves;
          for (let i = 0; i < moves.length; i++) {
            if (moves[i].indexOf('.') != -1) {
              moves.splice(i, 1);
            }
          }
        }

        if (!totalMoveCountMap[moves[0]]) {
          totalMoveCountMap[moves[0]] = 1;
        } else {
          totalMoveCountMap[moves[0]]++;
        }

        if (this.state.playerOne.value == entry.white) {
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
    this.setState({
      moves: [],
    });
    this.generateChart(totalMoveCountMap, playersMoveCountMap, newGames);
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
      newGames = newGames.filter(game => {
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

          if (this.state.playerOne.value == game.white) {
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

    newGames.sort(this.sortGames);
    this.setState({
      fen: fen,
      games: newGames,
      labels: newLabels,
      datasets: newDatasets,
    });
  };

  handlePlayerOneChange = event => {
    this.setState(
      {
        playerOne: event,
        moves: [],
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      },
      () => {
        this.handleReset();
      }
    );
  };

  handlePlayerTwoChange = event => {
    this.setState(
      {
        playerTwo: event,
        moves: [],
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      },
      () => {
        this.handleReset();
      }
    );
  };

  handlePlayerThreeChange = event => {
    this.setState(
      {
        playerThree: event,
        moves: [],
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      },
      () => {
        this.handleReset();
      }
    );
  };

  handlePlayerFourChange = event => {
    this.setState(
      {
        playerFour: event,
        moves: [],
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      },
      () => {
        this.handleReset();
      }
    );
  };

  handleColorChange = event => {
    this.setState(
      {
        mainPlayerColor: event,
        moves: [],
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      },
      () => {
        this.handleReset();
      }
    );
  };

  sortGames = (game1, game2) => {
    if (
      game1.white == this.state.playerOne.value &&
      game2.white != this.state.playerOne.value
    ) {
      return -1;
    }
    if (
      game2.white == this.state.playerOne.value &&
      game1.white != this.state.playerOne.value
    ) {
      return 1;
    }
    let player1Compare = '';
    let player2Compare = '';

    if (game1.white == this.state.playerOne.value) {
      player1Compare = game1.black;
    } else {
      player1Compare = game1.white;
    }

    if (game2.white == this.state.playerOne.value) {
      player2Compare = game2.black;
    } else {
      player2Compare = game2.white;
    }
    if (player1Compare == player2Compare) {
      return game1.tournament > game2.tournament
        ? 1
        : game1.tournament < game2.tournament
        ? -1
        : 0;
    } else {
      if (player1Compare == this.state.playerTwo.value) {
        return -1;
      } else if (player2Compare == this.state.playerTwo.value) {
        return 1;
      } else if (player1Compare == this.state.playerThree.value) {
        return -1;
      } else {
        return 1;
      }
    }
  };

  getColorFilter = entry => {
    if (this.state.mainPlayerColor.value == 'Both') {
      return (
        (entry.white == this.state.playerOne.value ||
          entry.black == this.state.playerOne.value) &&
        (entry.white == this.state.playerTwo.value ||
          entry.black == this.state.playerTwo.value ||
          entry.white == this.state.playerThree.value ||
          entry.black == this.state.playerThree.value ||
          entry.white == this.state.playerFour.value ||
          entry.black == this.state.playerFour.value)
      );
    }
    if (this.state.mainPlayerColor.value == 'White') {
      return (
        entry.white == this.state.playerOne.value &&
        (entry.black == this.state.playerTwo.value ||
          entry.black == this.state.playerThree.value ||
          entry.black == this.state.playerFour.value)
      );
    } else {
      return (
        entry.black == this.state.playerOne.value &&
        (entry.white == this.state.playerTwo.value ||
          entry.white == this.state.playerThree.value ||
          entry.white == this.state.playerFour.value)
      );
    }
  };

  getGameNotation = () => {
    if (!this.state.moves.length) {
      return '';
    }
    let moves = this.state.moves;
    let final = '';
    moves.forEach((move, i) => {
      if (i % 2 == 0) {
        let moveNumber = i / 2 + 1;
        final += moveNumber;
        final += '. ';
        final += move;
      } else {
        final += ', ';
        final += move;
        final += ' ';
      }
    });
    return final;
  };

  render() {
    let radarData = {
      labels: this.state.labels,
      datasets: this.state.datasets,
    };

    let doughnutData = JSON.parse(JSON.stringify(radarData));
    doughnutData.datasets.forEach(circle => {
      circle.backgroundColor = [
        '#12b8da',
        '#49997c',
        '#027ab0',
        '#e51a1a',
        '#eed630',
        '#66545e',
        '#aa6f73',
        '#c7bbc9',
      ];
    });

    return (
      <Container>
        <DropdownContainer>
          <div style={{ textAlign: 'left', marginBottom: '1vh' }}>
            Main Player:
          </div>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions.filter(player => {
              return (
                player.value != this.state.playerTwo.value &&
                player.value != this.state.playerThree.value &&
                player.value != this.state.playerFour.value
              );
            })}
            onChange={this.handlePlayerOneChange}
            value={this.state.playerOne}
            placeholder="Select a Player"
          />
        </DropdownContainer>
        <DropdownContainer style={{ marginBottom: '4vh' }}>
          <div style={{ textAlign: 'left', marginBottom: '1vh' }}>
            Main Player Color:
          </div>
          <Dropdown
            menuPlacement="auto"
            options={[
              { value: 'Both', label: 'Both' },
              { value: 'Black', label: 'Black' },
              { value: 'White', label: 'White' },
            ]}
            onChange={this.handleColorChange}
            value={this.state.mainPlayerColor}
            defaultValue={{ value: 'Both', label: 'Both' }}
          />
        </DropdownContainer>
        <DropdownContainer>
          <div style={{ textAlign: 'left', marginBottom: '1vh' }}>
            Players to Compare:
          </div>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions.filter(player => {
              return (
                player.value != this.state.playerOne.value &&
                player.value != this.state.playerThree.value &&
                player.value != this.state.playerFour.value
              );
            })}
            onChange={this.handlePlayerTwoChange}
            value={this.state.playerTwo}
            placeholder="Select a Player"
          />
        </DropdownContainer>
        <DropdownContainer>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions.filter(player => {
              return (
                player.value != this.state.playerOne.value &&
                player.value != this.state.playerTwo.value &&
                player.value != this.state.playerFour.value
              );
            })}
            onChange={this.handlePlayerThreeChange}
            value={this.state.playerThree}
            placeholder="Select a Player"
          />
        </DropdownContainer>
        <DropdownContainer>
          <Dropdown
            menuPlacement="auto"
            options={this.state.playerOptions.filter(player => {
              return (
                player.value != this.state.playerOne.value &&
                player.value != this.state.playerTwo.value &&
                player.value != this.state.playerThree.value
              );
            })}
            onChange={this.handlePlayerFourChange}
            value={this.state.playerFour}
            placeholder="Select a Player"
          />
        </DropdownContainer>
        <ChartLayout>
          <DoughnutContainer>
            <Doughnut
              data={doughnutData}
              onElementsClick={evt => {
                this.handleMoveSelect(evt);
              }}
            ></Doughnut>
            <div style={{ marginTop: '5vh' }}>
              &nbsp;{this.getGameNotation()}
            </div>
            <button style={{ marginTop: '2vh' }} onClick={this.handleReset}>
              Reset Moves
            </button>
          </DoughnutContainer>
          <ChessboardContainer>
          {this.state.displayChessBoard && (
            <Chessboard
              allowDrag={() => false}
              width={480}
              position={this.state.fen}
            ></Chessboard>
          )}
          </ChessboardContainer>
        </ChartLayout>
        <GamesTable>
          <table
            style={{
              width: '100%',
              justifyContent: 'center',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr style={{ width: '100%', justifyContent: 'center' }}>
                <TableHeader>Tournament</TableHeader>
                <TableHeader>White</TableHeader>
                <TableHeader>Black</TableHeader>
                <TableHeader>Result</TableHeader>
                <TableHeader>ECO</TableHeader>
              </tr>
            </thead>
            <tbody>
              {this.state.games.map(game => {
                return (
                  <tr
                    key={game.id}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <TableCell>{game.tournament}</TableCell>
                    <TableCell>{game.white.replace('_', ' ')}</TableCell>
                    <TableCell>{game.black.replace('_', ' ')}</TableCell>
                    <TableCell>{game.result}</TableCell>
                    <TableCell>{game.eco}</TableCell>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </GamesTable>
      </Container>
    );
  }
}

export default ChessChart;
