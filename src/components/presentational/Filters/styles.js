import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  height: 58px;
  font-size: 14px;
  color: #767676;
  // border-bottom: 1px solid #767676;
`;

export const EachFilterContainer = styled.div`
  display: inline-block;
  margin: 14px 0 0 14px;
  cursor: pointer;
`;

export const FilterOption = styled.div`
  padding: 8px;
  background-color: pink;
  border-radius: 3px;
  position: relative;
`;

export const SectionContainer = styled.div`
  position: absolute;
  top: 58px;
  left: 14px;
  border: 1px solid grey;
  border-radius: 3px;
  width: 420px;
  height: 280px;
  padding: 18px;
`;

export const SectionOption = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const CheckboxStyle = styled.label`
  cursor: pointer;
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
  id: 'checkbox',
})`
    opacity: 0;

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
    display: inline-block;
    height: 16px;
    width: 16px;
    border: 1px solid #008489;
    border-radius: 2px;
    position: absolute;
    top: 3px;
    left: 0;
  }
  &:after {
    content: "";
    display: inline-block;
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
  display: inline-block;
  width: 300px;
  margin-left: 10px;
`;

export const SectionIcon = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;

export const SelectionChoiceHeading = styled.div`
  font-size: 18px;
`;

export const SelectionChoiceSubHeading = styled.div`
  font-size: 14px;  
  padding-top: 5px;
`;

export const SectionButtons = styled.div`
  position: relative;
  margin-top: 20px;
  button {
    border: none;
    background-color: #fff;
    font-size: 16px;
  }
`;

export const CancelButton = styled.button`
  position: absolute;
  left: 0;
  color: #767676;
`;

export const ApplyButton = styled.button`
  position: absolute;
  right: 0;
  color: #008489;
`;
