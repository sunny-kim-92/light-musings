import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Container, Text, Grid } from './usMap.css';
import './mapAnimate.css'

const stateData = require('./data');

class JusticeMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      activeCase: '',
      colors: {
        AL: {
          fill: 'grey',
        },
        AK: {
          fill: 'grey',
        },
        AZ: {
          fill: 'grey',
        },
        AR: {
          fill: 'grey',
        },
        CA: {
          fill: 'grey',
        },
        CO: {
          fill: 'grey',
        },
        CT: {
          fill: 'grey',
        },
        DC: {
          fill: '#0158f8',
        },
        DE: {
          fill: 'grey',
        },
        FL: {
          fill: 'grey',
        },
        GA: {
          fill: 'grey',
        },
        HI: {
          fill: 'grey',
        },
        ID: {
          fill: 'grey',
        },
        IL: {
          fill: 'grey',
        },
        IN: {
          fill: 'grey',
        },
        IA: {
          fill: 'grey',
        },
        KS: {
          fill: 'grey',
        },
        KY: {
          fill: 'grey',
        },
        LA: {
          fill: 'grey',
        },
        ME: {
          fill: 'grey',
        },
        MD: {
          fill: 'grey',
        },
        MA: {
          fill: 'grey',
        },
        MI: {
          fill: 'grey',
        },
        MN: {
          fill: 'grey',
        },
        MS: {
          fill: 'grey',
        },
        MO: {
          fill: 'grey',
        },
        MT: {
          fill: 'grey',
        },
        NE: {
          fill: 'grey',
        },
        NV: {
          fill: 'grey',
        },
        NH: {
          fill: 'grey',
        },
        NJ: {
          fill: 'grey',
        },
        NM: {
          fill: 'grey',
        },
        NY: {
          fill: 'grey',
        },
        NC: {
          fill: 'grey',
        },
        ND: {
          fill: 'grey',
        },
        OH: {
          fill: 'grey',
        },
        OK: {
          fill: 'grey',
        },
        OR: {
          fill: 'grey',
        },
        PA: {
          fill: 'grey',
        },
        RI: {
          fill: 'grey',
        },
        SC: {
          fill: 'grey',
        },
        SD: {
          fill: 'grey',
        },
        TN: {
          fill: 'grey',
        },
        TX: {
          fill: 'grey',
        },
        UT: {
          fill: 'grey',
        },
        VT: {
          fill: 'grey',
        },
        VA: {
          fill: 'grey',
        },
        WA: {
          fill: 'grey',
        },
        WV: {
          fill: 'grey',
        },
        WI: {
          fill: 'grey',
        },
        WY: {
          fill: 'grey',
        },
      },
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
        <Grid>
          <Text side={'p'}>{this.state.activeCase.split(' v. ')[0]}</Text>
          <Text side={'v'}> v. </Text>
          <Text side={'r'}>{this.state.activeCase.split(' v. ')[1]}</Text>
        </Grid>
        <USAMap
          height="90%"
          customize={this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
        <Dropdown
          options={this.state.options}
          onChange={this._onSelect}
          value={this.state.activeCase}
          placeholder="Select a case"
        />
      </Container>
    );
  }
}

export default JusticeMap;
