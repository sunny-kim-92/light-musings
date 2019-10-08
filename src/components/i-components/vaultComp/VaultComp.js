import React from 'react';
import styled from 'styled-components';
const { useState } = React;

const VaultComp = () => {
  const [select, setSelect] = useState('betterPriceOnly');
  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="betterPriceOnly"
          checked={select === 'betterPriceOnly'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Auto accept better price only</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="anyPriceChange"
          checked={select === 'anyPriceChange'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Auto accept any price change</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="neverAutoAccept"
          checked={select === 'neverAutoAccept'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Never auto accept a price change</div>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  transition: 0.3s;
  &:hover {
    background: blue;
  }
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #db7290;
    border: 1px solid #db7290;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;

export default VaultComp;
