import React, { Component } from 'react';
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
background: transparent;
border: 1px solid #008489;
border-radius: 50%;
color: #008489;
cursor: pointer;
height: 30px;
opacity: ${props => !props.isActive && '.5' };
outline: none;
position: relative;
width: 30px;
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

:disabled {
  cursor: default;
}
`;

export const PlusButtonContainer = MinusButtonContainer.extend`
text-align: right;
`;

export const PlusButton = MinusButton.extend`
opacity: 1;
:after {
  content: "+";
  top: 4px;
  left: 9px;
}
`;

export const CounterNumber = styled.div`
display: table-cell;
font-size: 20px;
text-align: center;
vertical-align: middle !important;
`;

const Counter = props => (
  <CounterContainer>
    <MinusButtonContainer>
      <MinusButton
        onClick={() => props.handleMinusButtonClick(props.clickedCounter, props.isHalfSize)}
        isActive={props.count > 0}
        disabled={props.count === 0}
      />
    </MinusButtonContainer>
  <CounterNumber>{props.count}{props.plusSign && "+"}</CounterNumber>
    <PlusButtonContainer>
      <PlusButton onClick={() => props.handlePlusButtonClick(props.clickedCounter, props.isHalfSize)}/>

    </PlusButtonContainer>
  </CounterContainer>
);

export default Counter;
