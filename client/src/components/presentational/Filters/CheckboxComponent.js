import React from 'react';
import styled from 'styled-components';

export const CheckboxStyle = styled.label`
   cursor: pointer;
   display: table-cell;
   vertical-align: top;
   padding-left: 25px;
   position: relative;
 `;

 export const CheckboxContainer = styled.div`
 width: ${props => props.entireDiv ? '100%' : '50%'};
 margin-bottom: 10px;
`;
 
 export const Checkbox = styled.input.attrs({
   type: 'checkbox',
   id: 'checkbox',
 })`
     display: none;
     + span {
       &:after {
         color: #FFF;
       } 
     }
 
     &:checked + span {
       &:before {
       background-color: #008489;
     } &:after {
       color: #FFF;
     }
 `;
 
 export const CheckBoxFakeLabel = styled.span`
   &:before {
     content: "";
     height: 16px;
     width: 16px;
     border: 1px solid #DBDBDB;
     border-radius: 2px;
     position: absolute;
     top: 3px;
     left: 0;
   }
   &:after {
     content: "";
     width: 9px;
     height: 6px;
     border-left: 2px solid;
     border-bottom: 2px solid;
     transform: rotate(-45deg);
     position: absolute;
     top: 6px;
     left: 3px; 
   } 
 `;

export const SelectionChoice = styled.div`
`;

export const SelectionChoiceHeading = styled.div`
  font-size: 18px;
`;

export const SelectionChoiceSubHeading = styled.div`
  font-size: 14px;  
  padding-top: 5px;
`;

const CheckboxComponent = (props) => (
  <CheckboxContainer entireDiv={props.entireDiv} >
    <CheckboxStyle>
      <Checkbox
        onClick={() => props.handleUpdate(props.checkboxName, props.sectionName)}
      />
      <CheckBoxFakeLabel />
      <SelectionChoice>
        <SelectionChoiceHeading>{props.heading}</SelectionChoiceHeading>
        {(props.subheading && <SelectionChoiceSubHeading>{props.subheading}</SelectionChoiceSubHeading>)}
      </SelectionChoice>
    </CheckboxStyle>
  </CheckboxContainer>
);

export default CheckboxComponent;
