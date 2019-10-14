import React from 'react';
import ReactDOM from 'react-dom';
import { AnimateGroup, Animate } from 'react-animate-mount';
import { parseThree, parseFour, final } from './helper';
import {
  Wrapper,
  Item,
  RadioButton,
  RadioButtonLabel,
} from './VaultComp.css.js';

import './styles.css';

const buttonStyle = {
  marginVertical: 20,
};

class VaultComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextItem: {},
      items: [
        {
          q: 'What direction will you face when jumping off the springboard?',
          names: ['Forward', 'Backward'],
          values: ['f', 'b'],
        },
      ],
      dir: 'f',
      fTurn: 'z',
      salto: 'z',
      sTurn: 'z',
      bp: 's',
      backFlag: false,
      complete: 'f',
      activePage: 1,
      switch: false,
      finished: false,
      finalV: {},
      backQ: [],
    };
    this._next = this._next.bind(this);
    this._back = this._back.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleDir = this.handleDir.bind(this);
    this.handleFTurn = this.handleFTurn.bind(this);
    this.handleSalto = this.handleSalto.bind(this);
    this.handleBP = this.handleBP.bind(this);
    this.handleSTurn = this.handleSTurn.bind(this);
  }

  componentDidUpdate() {
    if (this.state.switch) {
      if (this.state.backFlag) {
        let count = this.state.activePage;
          let resThree = parseThree(
            this.state.dir + this.state.fTurn + this.state.salto
          );
        count === 1
          ? setTimeout(() => {
              this.setState({
                items: [
                  {
                    q:
                      'What direction will you face when jumping off the springboard?',
                    names: ['Forward', 'Backward'],
                    values: ['f', 'b'],
                  },
                ],
                nextItem: {},
                switch: false,
                backFlag: false
              });
            }, 1000)
          : count === 2
          ? setTimeout(() => {
              this.setState({
                items: [
                  {
                    q:
                      'How many turns will you take from springboard to aparatus?',
                    names: ['0', '1 (180°)', '2 (360°)'],
                    values: ['z', 'o', 'p'],
                  },
                ],
                nextItem: {},
                switch: false,
                backFlag: false
              });
            }, 1000)
          : count === 3
          ? setTimeout(() => {
              this.setState({
                items: [
                  {
                    q: 'How many saltos will you perform?',
                    names: ['0', '1', '2'],
                    values: ['z', 'o', 'p'],
                  },
                ],
                nextItem: {},
                switch: false,
                backFlag: false,
              });
            }, 1000)
          : count === 4
          ? setTimeout(() => {
              this.setState({
                items: [
                  {
                    q:
                      'What body position will you maintain from aparatus to landing?',
                    names: resThree.names,
                    values: resThree.values,
                  },
                ],
                nextItem: {},
                switch: false,
                backFlag: false
              });
            }, 1000)
          : null;
      } else {
        setTimeout(() => {
          let cal = [this.state.nextItem];
          this.setState({ items: cal, nextItem: {}, switch: false });
        }, 1000);
      }
    }
  }

  handleDir = event => {
    const value = event.target.value;
    this.setState({ dir: value });
  };
  handleFTurn = event => {
    const value = event.target.value;
    this.setState({ fTurn: value });
  };
  handleSalto = event => {
    const value = event.target.value;
    this.setState({ salto: value });
  };
  handleBP = event => {
    const value = event.target.value;
    this.setState({ bp: value });
  };
  handleSTurn = event => {
    const value = event.target.value;
    this.setState({ sTurn: value });
  };

  _next = () => {
    const curr = this.state.activePage + 1;
    this.setState({
      activePage: curr,
    });
  };

  _back = () => {
    let arr = this.state.backQ;
    let next = arr.pop();
    this.setState({
      switch: true,
      activePage: next,
      backQ: arr,
      backFlag: true,
    });
  };

  handleNext = event => {
    let mob = event.target.value;
    let currNum = this.state.activePage;
    let arr = this.state.backQ;
    arr.push(currNum);
    let theAns = {
      dir: mob,
      switch: true,
      backQ: arr,
      items: [],
      activePage: currNum++
    }
    if (currNum === 1) {
      this.setState({
        dir: mob,
        activePage: 2,
        items: [],
        switch: true,
        nextItem: {
          q: 'How many turns will you take from springboard to aparatus?',
          names: ['0', '1 (180°)', '2 (360°)'],
          values: ['z', 'o', 'p'],
        },
        backQ: arr,
      });
    } else if (currNum === 2) {
      this.setState({
        fTurn: mob,
        activePage: 3,
        items: [],
        switch: true,
        nextItem: {
          q: 'How many saltos will you perform?',
          names: ['0', '1', '2'],
          values: ['z', 'o', 'p'],
        },
        backQ: arr,
      });
    } else if (currNum === 3) {
      let resThree = parseThree(
        this.state.dir + this.state.fTurn + this.state.salto
      );
      if (typeof resThree === 'string') {
        if (resThree === 'finished') {
          let ans = final(
            this.state.dir +
              this.state.fTurn +
              this.state.salto +
              this.state.bp +
              this.state.sTurn
          );
          this.setState({ switch: true, finished: true, finalV: ans });
        } else {
          let skipParse = parseFour(
            this.state.dir + this.state.fTurn + this.state.salto + resThree
          );
          this.setState({
            salto: mob,
            switch: true,
            bp: resThree,
            activePage: 5,
            items: [],
            nextItem: {
              q: 'How many turns will you take from aparatus to landing?',
              names: skipParse.names,
              values: skipParse.values,
            },
            backQ: arr,
          });
        }
      } else {
        this.setState({
          salto: mob,
          switch: true,
          activePage: 4,
          items: [],
          nextItem: {
            q: 'What body position will you maintain from aparatus to landing?',
            names: resThree.names,
            values: resThree.values,
          },
          backQ: arr,
        });
      }
    } else if (currNum === 4) {
      let resFour = parseFour(
        this.state.dir + this.state.fTurn + this.state.salto + this.state.bp
      );
      if (typeof resThree === 'string') {
        let finalAns = final(
          this.state.dir +
            this.state.fTurn +
            this.state.salto +
            this.state.bp +
            this.state.sTurn
        );
        this.setState({
          switch: true,
          finished: true,
          items: [],
          finalV: finalAns,
        });
      } else {
        this.setState({
          bp: mob,
          switch: true,
          activePage: 5,
          items: [],
          nextItem: resFour,
          backQ: arr,
        });
      }
    } else {
      let finalAns = final(
        this.state.dir +
          this.state.fTurn +
          this.state.salto +
          this.state.bp +
          this.state.sTurn
      );
      this.setState({
        switch: true,
        finished: true,
        items: [],
        finalV: finalAns,
      });
    }
  };

  render() {
    const items = this.state.items != [] ? this.state.items[0] : null;
    let currNum = this.state.activePage;
    const currQ =
      currNum === 1
        ? 'dir'
        : currNum === 2
        ? 'fTurn'
        : currNum === 3
        ? 'salto'
        : currNum === 4
        ? 'bp'
        : 'sTurn';
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
        <Animate show={this.state.items != []} type="fade" duration={500}>
          {!this.state.switch ? (
            <Wrapper>
              {items.values.map((aItem, aI) => {
                return (
                  <Item key={items.names[aI] + aI}>
                    <RadioButton
                      type="radio"
                      name={this.state.activePage}
                      value={aItem}
                      checked={this.state[currQ] === aItem}
                      onChange={event => {
                        currNum === 1
                          ? this.handleDir(event)
                          : currNum === 2
                          ? this.handleFTurn(event)
                          : currNum === 3
                          ? this.handleSalto(event)
                          : currNum === 4
                          ? this.handleBP(event)
                          : this.handleSTurn(event);
                      }}
                    />
                    <RadioButtonLabel />
                    <div>{items.names[aI]}</div>
                  </Item>
                );
              })}
            </Wrapper>
          ) : null}
        </Animate>
        <button type="button" onClick={this._back}>
          Back
        </button>
        <button type="button" onClick={this.handleNext}>
          Next
        </button>
      </div>
    );
  }
}

export default VaultComp;
