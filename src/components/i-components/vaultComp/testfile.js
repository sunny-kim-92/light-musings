import React, { Component } from 'react';
import {
  Wrapper,
  Item,
  RadioButton,
  RadioButtonLabel,
  Big,
} from './VaultComp.css.js';

class VaultComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ffwrd: 'f',
      Fturn: 'z',
      Ssalto: 'z',
      BP: 's',
      Sturn: 'z',
      ActivePage: 1,
    };
    this.handleDirChange = this.handleDirChange.bind(this);
    this.handleFTurnChange = this.handleFTurnChange.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  handleDirChange = event => {
    const value = event.target.value;
    this.setState({ Ffwrd: value });
  };

  handleFTurnChange = event => {
    const value = event.target.value;
    this.setState({ Fturn: value });
  };

  next = e => {
    const curr = this.state.ActivePage + 1;
    this.setState({
      ActivePage: curr,
    });
  }

  back = e => {
    const curr = this.state.ActivePage - 1;
    this.setState({
      ActivePage: curr,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {/* <Big>{this.state.Ffwrd}</Big>
        <span>{this.state.Fturn}</span> */}
        {this.state.ActivePage === 1 ? (
          <Wrapper>
            <Item>
              <RadioButton
                type="radio"
                name="radio"
                value="f"
                checked={this.state.Ffwrd === 'f'}
                onChange={event => this.handleDirChange(event)}
              />
              <RadioButtonLabel />
              <div>Forward (Handspring Forward)</div>
            </Item>
            <Item>
              <RadioButton
                type="radio"
                name="radio"
                value="b"
                checked={this.state.Ffwrd === 'b'}
                onChange={event => this.handleDirChange(event)}
              />
              <RadioButtonLabel />
              <div>Backward (Round off, flic-flac)</div>
            </Item>
          </Wrapper>
        ) :
        this.state.ActivePage === 2 ? (
          <Wrapper>
            <Item>
              <RadioButton
                type="radio"
                name="two"
                value="z"
                checked={this.state.Fturn === 'z'}
                onChange={event => this.handleFTurnChange(event)}
              />
              <RadioButtonLabel />
              <div>0</div>
            </Item>
            <Item>
              <RadioButton
                type="radio"
                name="two"
                value="o"
                checked={this.state.Fturn === 'o'}
                onChange={event => this.handleFTurnChange(event)}
              />
              <RadioButtonLabel />
              <div>1</div>
            </Item>
            <Item>
              <RadioButton
                type="radio"
                name="two"
                value="t"
                checked={this.state.Fturn === 't'}
                onChange={event => this.handleFTurnChange(event)}
              />
              <RadioButtonLabel />
              <div>2</div>
            </Item>
          </Wrapper>
        ) :
        (<Wrapper>
        <Item>
          <RadioButton
            type="radio"
            name="three"
            value="s"
            checked={this.state.BP === 's'}
            onChange={event => this.handleDirChange(event)}
          />
          <RadioButtonLabel />
          <div>Straight</div>
        </Item>
        <Item>
          <RadioButton
            type="radio"
            name="three"
            value="s"
            checked={this.state.BP === 'p'}
            onChange={event => this.handleDirChange(event)}
          />
          <RadioButtonLabel />
          <div>Piked</div>
        </Item>
        </Wrapper>)}
        <button type="button" onClick={this.back}>
          Back
        </button>
        <button type="button" onClick={this.next}>
          Next
        </button>
      </div>
    );
  }
}

export default VaultComp;
