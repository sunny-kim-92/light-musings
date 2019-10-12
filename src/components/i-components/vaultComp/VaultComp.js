import React from 'react';
import ReactDOM from 'react-dom';
import { AnimateGroup } from 'react-animate-mount';

import './styles.css';
import test from 'ava';

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
    this.parseQuestion = this.parseQuestion.bind(this)
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

  _next = e => {
    const curr = this.state.activePage + 1;
    this.setState({
      activePage: curr,
    });
  };

  _back = e => {
    const curr = this.state.activePage - 1;
    this.setState({
      activePage: curr,
    });
  };

  _testSwitch = e => {
    let hold = this.state.items;
    hold.pop();
    this.setState({ items: hold, switch: true });
  };

  _testAdd = e => {
    let hold = this.state.items;
    hold.push({ first: 'sure', second: 'k' });
    this.setState({ items: hold });
  };

  _testSubtract = e => {
    let hold = this.state.items;
    hold.pop();
    this.setState({ items: hold });
  };

  parseQuestion = e => {
    if (this.state.activePage === 1){
      return {
        q: 'How many turns will you take from springboard to aparatus?',
        aText: [0, 1],
        aVal: ['z', 'o'],
        setter: _testSubtract,

      }
    }
  }

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
