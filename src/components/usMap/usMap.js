import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import Dropdown from 'react-select';
import 'react-dropdown/style.css';
import { Container, Text, MapContainer, DropdownContainer } from './usMap.css';
import './mapAnimate.css';

const stateData = require('./data');

class USMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      activeCase: '',
      colors: stateData.colors,
    };
    this.mapHandler = this.mapHandler.bind(this);
    this.statesCustomConfig = this.statesCustomConfig.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.colorParse = this.colorParse.bind(this);
  }

  componentDidMount() {
    let optionsArr = [];
    for (let caseName in stateData['TX']) {
      if (caseName !== 'Total Filings') {
        optionsArr.push({ value: caseName, label: caseName });
      }
    }
    this.setState(
      { options: optionsArr, activeCase: 'Madison v. Alabama' },
      () => {
        this.colorParse();
      }
    );
  }

  mapHandler = event => {};

  colorParse = () => {
    let current = this.state.activeCase;
    let obj = {};
    for (let stateAbr in stateData) {
      if (stateData[stateAbr][current] === 1) {
        obj[stateAbr] = {
          fill: 'red',
        };
      } else if (stateData[stateAbr][current] === -1) {
        obj[stateAbr] = {
          fill: 'blue',
        };
      } else {
        obj[stateAbr] = {
          fill: 'grey',
        };
      }
    }
    this.setState({ colors: obj });
  };

  statesCustomConfig = () => {
    return this.state.colors;
  };

  _onSelect = event => {
    let targetValue = event.value;
    this.setState({ activeCase: targetValue }, () => {
      this.colorParse();
    });
  };

  render() {
    return (
      <Container>
        <Text side={'p'}>{this.state.activeCase.split(' v. ')[0]}</Text>
        <Text side={'v'}> v. </Text>
        <Text side={'r'}>{this.state.activeCase.split(' v. ')[1]}</Text>
        <div></div>
        <MapContainer>
          <USAMap
            width={'73vw'}
            customize={this.statesCustomConfig()}
            onClick={this.mapHandler}
          />
        </MapContainer>
        <DropdownContainer>
          <Dropdown
            menuPlacement="top"
            options={this.state.options}
            onChange={this._onSelect}
            value={this.state.activeCase}
            placeholder="Select a case or Type to Search"
          />
        </DropdownContainer>
      </Container>
    );
  }
}

export default USMap;
