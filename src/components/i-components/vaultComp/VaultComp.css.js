import styled from 'styled-components';

export const Container = styled.div`
display: block;
height: 25vh;
margin: 0 2.8vw;
`

export const FlexBottom = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 4rem;
margin: 2rem;
`

export const FinalContainer = styled.div`
  padding-left: 4vw;
  padding-right: 4vw;

  h1 {
    display: block;
    padding-bottom: 6vh;
    font-weight: 500;
    font-size: 7rem;
  }
  h2 {
    display: block;
    font-weight: 500;
    font-size: 4rem;
  }
`;

export const ListText = styled.h1`
font-size: 3.5rem;
font-weight: 450;
padding-bottom: 2vh;
`

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
`

export const Question = styled.h1`
font-size: 4rem;
padding-bottom: 5vh;
`

export const Big = styled.span`
display: block;
font-size: 4rem;
.hide {
    opacity: 0;
    transition: opacity 1s;
}
`;

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

export const Item = styled.div`
  display: flex;
  font-size: 1.5em;
  font-weight: 400;
  align-items: center;
  height: 48px;
  position: relative;
  transition: 0.3s;
  &:hover {
    background: blue;
  }
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
export const RadioButton = styled.input`
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