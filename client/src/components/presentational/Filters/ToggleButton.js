import React from 'react';
import { ToggleButtonLabel, ToggleButtonInput, ToggleButtonSlider } from './styles';

const ToggleButton = props => (
      <ToggleButtonLabel >
        <ToggleButtonInput defaultChecked={props.selectedOptions} onClick={() => props.handleUpdate(props.buttonType)}/>
        <ToggleButtonSlider />
      </ToggleButtonLabel>
    );

export default ToggleButton;
