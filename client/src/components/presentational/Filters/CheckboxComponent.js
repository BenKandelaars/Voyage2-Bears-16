import React from 'react';
import SectionButtons from './SectionButtons';
import { Checkbox, CheckboxStyle, CheckBoxFakeLabel,
   SectionOption, SelectionChoice, SelectionChoiceHeading } from './styles';

const CheckboxComponent = (props) => (
  <SectionOption>
    <CheckboxStyle>
      <Checkbox />
      <CheckBoxFakeLabel />
      <SelectionChoice>
        <SelectionChoiceHeading>{props.value}</SelectionChoiceHeading>
      </SelectionChoice>
    </CheckboxStyle>
  </SectionOption>
);

export default CheckboxComponent;
