import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

export const ArrowIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
  transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
  transition: transform .3s;
  `;

const Arrow = props => (
  <ArrowIcon isOpen={props.isOpen}>
  <FontAwesome
    name="angle-down"
    size={props.size}
    style={{
      color: props.color,
    }}
  />
  </ArrowIcon>
);

export default Arrow;
