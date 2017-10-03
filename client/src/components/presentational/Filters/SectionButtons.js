import React from 'react';
import { SectionButtonsContainer, CancelButton, ApplyButton } from './styles';

const SectionButtons = () => {
  return (
    <SectionButtonsContainer>
      <CancelButton>Cancel</CancelButton>
      <ApplyButton>Apply</ApplyButton>
    </SectionButtonsContainer>
  );
};


export default SectionButtons;
