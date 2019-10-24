import React from 'react';
import ReactDOM from 'react-dom';
import { AnimateGroup, Animate } from 'react-animate-mount';
import {
  Wrapper,
  Item,
  RadioButton,
  RadioButtonLabel,
  Container,
  Question,
} from './VaultComp.css.js';
import { parseThree, parseFour, finalVault } from './helper.js';

import './styles.css';

class VaultComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextItem: {},
      items: [
        {
          q: 'What direction will you face jumping off the springboard?',
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
      activePage: 1,
      switch: false,
      finished: false,
      changing: false,
      reset: false,
      finalV: [],
      final: [],
      backQ: [],
    };
    this._handleBack = this._handleBack.bind(this);
    this._handleNext = this._handleNext.bind(this);
    this._handleDir = this._handleDir.bind(this);
    this._handleFTurn = this._handleFTurn.bind(this);
    this._handleSalto = this._handleSalto.bind(this);
    this._handleBP = this._handleBP.bind(this);
    this._handleSTurn = this._handleSTurn.bind(this);
    this._handleReset = this._handleReset.bind(this);
  }

  componentDidUpdate() {
    if (this.state.switch) {
      if (this.state.reset) {
        setTimeout(() => {
          this.setState({
            nextItem: {
              q: 'What direction will you face jumping off the springboard?',
              names: ['Forward', 'Backward'],
              values: ['f', 'b'],
            },
            dir: 'f',
            fTurn: 'z',
            salto: 'z',
            sTurn: 'z',
            bp: 's',
            backFlag: false,
            complete: 'f',
            activePage: 1,
            finished: false,
            changing: true,
            reset: false,
            finalV: [],
            final: [],
            backQ: [],
          });
        }, 500);
      } else if (this.state.backFlag) {
        let setObj = {
          backFlag: false,
          changing: true,
        };
        let count = this.state.activePage;
        let resThree = parseThree(
          this.state.dir + this.state.fTurn + this.state.salto
        );
        if (count === 1) {
          setObj.nextItem = {
            q: 'What direction will you face jumping off the springboard?',
            names: ['Forward', 'Backward'],
            values: ['f', 'b'],
          };
        } else if (count === 2) {
          setObj.nextItem = {
            q: 'How many turns will you take from springboard to apparatus?',
            names: ['0', '1 (180°)', '2 (360°)'],
            values: ['z', 'o', 't'],
          };
        } else if (count === 3) {
          setObj.nextItem = {
            q: 'How many saltos will you perform?',
            names: ['0', '1', '2'],
            values: ['z', 'o', 't'],
          };
        } else if (count === 4) {
          setObj.nextItem = {
            q:
              'What body position will you maintain from apparatus to landing?',
            names: resThree.names,
            values: resThree.values,
          };
        }
        setTimeout(() => {
          this.setState({ ...this.state, ...setObj });
        }, 500);
      } else {
        if (!this.state.finished) {
          if (this.state.changing) {
            setTimeout(() => {
              let hold = [this.state.nextItem];
              this.setState({
                items: hold,
                nextItem: {},
                switch: false,
                changing: false,
              });
            }, 500);
          } else {
            let setObj = {
              backFlag: false,
              changing: true,
            };
            let currNum = this.state.activePage;
            let arr = this.state.backQ;
            arr.push(currNum);
            setObj.backQ = arr;
            if (currNum === 1) {
              setObj.nextItem = {
                q:
                  'How many turns will you take from springboard to apparatus?',
                names: ['0', '1 (180°)', '2 (360°)'],
                values: ['z', 'o', 't'],
              };
              setObj.activePage = 2;
            } else if (currNum === 2) {
              setObj.activePage = 3;
              setObj.nextItem = {
                q: 'How many saltos will you perform?',
                names: ['0', '1', '2'],
                values: ['z', 'o', 't'],
              };
            } else if (currNum === 3) {
              let resThree = parseThree(
                this.state.dir + this.state.fTurn + this.state.salto
              );
              if (typeof resThree === 'string') {
                if (resThree === 'finished') {
                  let ans = finalVault(
                    this.state.dir +
                      this.state.fTurn +
                      this.state.salto +
                      this.state.bp +
                      this.state.sTurn
                  );
                  setObj.finished = true;
                  setObj.finalV = ans;
                } else {
                  let skipParse = parseFour(
                    this.state.dir +
                      this.state.fTurn +
                      this.state.salto +
                      resThree
                  );
                  setObj.activePage = 5;
                  setObj.bp = resThree;
                  setObj.nextItem = {
                    q:
                      'How many turns will you take from apparatus to landing?',
                    names: skipParse.names,
                    values: skipParse.values,
                  };
                }
              } else {
                setObj.nextItem = {
                  q:
                    'What body position will you maintain from apparatus to landing?',
                  names: resThree.names,
                  values: resThree.values,
                };
                setObj.activePage = 4;
              }
            } else if (currNum === 4) {
              let resFour = parseFour(
                this.state.dir +
                  this.state.fTurn +
                  this.state.salto +
                  this.state.bp
              );
              if (typeof resFour === 'string') {
                let finalAns = finalVault(
                  this.state.dir +
                    this.state.fTurn +
                    this.state.salto +
                    this.state.bp +
                    this.state.sTurn
                );
                setObj.items = [];
                setObj.finished = true;
                setObj.finalV = finalAns;
              } else {
                setObj.activePage = 5;
                setObj.nextItem = {
                  q: 'How many turns will you make from apparatus to landing?',
                  ...resFour,
                };
              }
            } else {
              let finalAns = finalVault(
                this.state.dir +
                  this.state.fTurn +
                  this.state.salto +
                  this.state.bp +
                  this.state.sTurn
              );
              setObj.finished = true;
              setObj.items = [];
              setObj.finalV = finalAns;
            }
            setTimeout(() => {
              this.setState({
                ...this.state,
                ...setObj,
              });
            }, 500);
          }
        } else {
          setTimeout(() => {
            this.setState({
              switch: false,
              nextItem: {},
              final: this.state.finalV,
            });
          }, 500);
        }
      }
    }
  }

  _handleDir = event => {
    const value = event.target.value;
    this.setState({ dir: value });
  };
  _handleFTurn = event => {
    const value = event.target.value;
    this.setState({ fTurn: value });
  };
  _handleSalto = event => {
    const value = event.target.value;
    this.setState({ salto: value });
  };
  _handleBP = event => {
    const value = event.target.value;
    this.setState({ bp: value });
  };
  _handleSTurn = event => {
    const value = event.target.value;
    this.setState({ sTurn: value });
  };
  _handleBack = () => {
    let arr = this.state.backQ;
    let next = arr.pop();
    this.setState({
      switch: true,
      activePage: next,
      backQ: arr,
      backFlag: true,
    });
  };

  _handleNext = event => {
    this.setState({ switch: true });
  };

  _handleReset = event => {
    this.setState({ switch: true, reset: true });
  };

  render() {
    const currState = this.state;
    const items = currState.items != [] ? currState.items[0] : null;
    const currNum = currState.activePage;
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
      <Container>
        <Animate show={!currState.switch} type="slide" duration={500}>
          {!currState.finished && currState.final != [] ? (
            <Wrapper>
              {!currState.changing ? (
                <Question>{currState.items[0].q}</Question>
              ) : null}
              {!currState.changing
                ? items.values.map((aItem, aI) => {
                    return (
                      <Item key={items.names[aI] + aI}>
                        <RadioButton
                          type="radio"
                          name={currState.activePage}
                          value={aItem}
                          checked={currState[currQ] === aItem}
                          onChange={event => {
                            currNum === 1
                              ? this._handleDir(event)
                              : currNum === 2
                              ? this._handleFTurn(event)
                              : currNum === 3
                              ? this._handleSalto(event)
                              : currNum === 4
                              ? this._handleBP(event)
                              : this._handleSTurn(event);
                          }}
                        />
                        <RadioButtonLabel />
                        <div>{items.names[aI]}</div>
                      </Item>
                    );
                  })
                : null}
            </Wrapper>
          ) : (
            <div>
              <h1>{currState.final[0]}</h1>
              <h1>{currState.final[1]}</h1>
              <h1>{currState.final[2]}</h1>
            </div>
          )}
          {!currState.finished ? (
            <div>
              <div>
                {currState.activePage > 1 ? (
                  <h1>
                    Direction: {currState.dir === 'f' ? 'Forward' : 'Backward'}
                  </h1>
                ) : null}
                {currState.activePage > 2 ? (
                  <h1>
                    Turns On:
                    {currState.fTurn === 'z'
                      ? '0'
                      : currState.fTurn === 'o'
                      ? '1'
                      : '2'}
                  </h1>
                ) : null}
                {currState.activePage > 3 ? (
                  <h1>
                    Saltos:
                    {currState.dir === 'z'
                      ? '0'
                      : currState.dir === 'o'
                      ? '1'
                      : '2'}
                  </h1>
                ) : null}
                {currState.activePage > 4 ? (
                  <h1>
                    Body Position:
                    {currState.bp === 's'
                      ? 'Straight'
                      : currState.fTurn === 't'
                      ? 'Tucked'
                      : 'Piked'}
                  </h1>
                ) : null}
              </div>
              <div>
                <button type="button" onClick={this._handleBack}>
                  Back
                </button>
                <button type="button" onClick={this._handleNext}>
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div>
              <button type="button" onClick={this._handleReset}>
                Build Another Vault!
              </button>
            </div>
          )}
        </Animate>
      </Container>
    );
  }
}

export default VaultComp;
