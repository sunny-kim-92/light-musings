import React from 'react';
import ReactDOM from 'react-dom';
import { AnimateGroup } from 'react-animate-mount';
import { parseThree, parseFour, final } from './helper';

import './styles.css';

const buttonStyle = {
  marginVertical: 20,
};

class VaultComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dir: 'f',
      fTurn: 'z',
      salto: 'z',
      sTurn: 'z',
      bp: 's',
      backFlag: 'f',
      complete: 'f',
      activePage: 1,
      switch: false,
    };
    this._next = this._next.bind(this);
    this._back = this._back.bind(this);
    this._testSwitch = this._testSwitch.bind(this);
    this._testAdd = this._testAdd.bind(this);
    this._testSubtract = this._testSubtract.bind(this);
    this.parseQuestion = this.parseQuestion.bind(this);
  }

  componentDidUpdate() {
    if (this.state.switch) {
      setTimeout(() => {
        let hope = this.state.items;
        hope.push({ first: 'afss', second: 'afasldf' });
        this.setState({ items: hope, switch: false });
      }, 1000);
    }
  }

  _next = () => {
    const curr = this.state.activePage + 1;
    this.setState({
      activePage: curr,
    });
  };

  _back = () => {
    const curr = this.state.activePage - 1;
    this.setState({
      activePage: curr,
    });
  };

  _testSwitch = () => {
    let hold = this.state.items;
    hold.pop();
    this.setState({ items: hold, switch: true });
  };

  _testAdd = () => {
    let hold = this.state.items;
    hold.push({ first: 'sure', second: 'k' });
    this.setState({ items: hold });
  };

  _testSubtract = () => {
    let hold = this.state.items;
    hold.pop();
    this.setState({ items: hold });
  };

  handleNext = () => {
    if (this.state.activePage === 1) {
      this.setState({ activePage: 2 });
    }
    if (this.state.activePage === 2) {
      this.setState({ activePage: 3 });
    }
    if (this.state.activePage === 3) {
      let res = parseThree(
        this.state.dir + this.state.fTurn + this.state.salto
      );
      if (typeof res === 'string') {
        if (res === 'finished'){
          final(this.state.dir + this.state.fTurn + this.state.salto + this.state.bp + this.state.sTurn)
        }
      }
    }
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <button type="button" onClick={this._testSwitch}>
          switch
        </button>
        <button type="button" onClick={this._testAdd}>
          add
        </button>
        <button type="button" onClick={this._testSubtract}>
          subtract
        </button>
        <AnimateGroup type="fade" duration={500}>
          {items.map((item, i) => (
            <p key={i}>{item.first}</p>
          ))}
        </AnimateGroup>
        <button type="button" onClick={this._back}>
          Back
        </button>
        <button type="button" onClick={this._next}>
          Next
        </button>
      </div>
    );
  }
}

export default VaultComp;
