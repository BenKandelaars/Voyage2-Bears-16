import React from 'react';
import styled from 'styled-components';

export const CounterContainer = styled.div`
display: table;
width: 110px;
`;

export const MinusButtonContainer = styled.div`
display: table-cell;
text-align: left;
`;

export const MinusButton = styled.button`
background-color: #FFF;
border: 1px solid #008489;
opacity: ${props => !props.isActive && '.5' };
border-radius: 50%;
color: #008489;
width: 30px;
height: 30px;
position: relative;
text-align: left;
outline: none;
:after {
  font-size: 16px;
  content: "_";
  position: absolute;
  top: -1px;
  left: 10px;
}

:active {
  box-shadow: 0px 0px 4px 2px #008489;
}
`;

export const PlusButtonContainer = MinusButtonContainer.extend`
text-align: right;
`;

export const PlusButton = MinusButton.extend`
text-align: right;
opacity: 1;
:after {
  content: "+";
  top: 4px;
  left: 9px;
}
`;

export const CounterNumber = styled.div`
display: table-cell;
text-align: center;
font-size: 20px;
vertical-align: middle !important;
`;

const Counter = props => (
  <CounterContainer>
    <MinusButtonContainer>
      <MinusButton
        onClick={() => props.handleMinusButtonClick(props.clickedCounter)}
        isActive={props.count > 0}
      />
    </MinusButtonContainer>
  <CounterNumber>{props.count}{props.plusSign && "+"}</CounterNumber>
    <PlusButtonContainer>
      <PlusButton onClick={() => props.handlePlusButtonClick(props.clickedCounter)}/>

    </PlusButtonContainer>
  </CounterContainer>
);

export default Counter;
