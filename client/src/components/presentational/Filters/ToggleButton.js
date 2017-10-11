import React from 'react';
import { ToggleButtonLabel, ToggleButtonInput, ToggleButtonSlider } from './styles';

const ToggleButton = props => (
      <ToggleButtonLabel >
        <ToggleButtonInput onClick={() => props.handleUpdate(props.buttonType)}/>
        <ToggleButtonSlider />
      </ToggleButtonLabel>
    );

export default ToggleButton;
