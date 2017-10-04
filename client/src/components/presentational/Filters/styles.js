import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  height: 58px;
  font-size: 14px;
  color: #767676;
  position: relative;
  // border-bottom: 1px solid #767676;
`;

export const EachMenuContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 18px 0 0 18px;
  cursor: pointer;
`;

export const EachFilterContainer = styled.div` 
`;

export const FilterOption = styled.div`
  padding: 8px;
  border-radius: 3px;
  position: relative;
  &:hover {
    background-color: #F2F2F2;
  }
  background-color: ${props => props.isOpen ? '#F2F2F2' : '#FFF'};
`;

export const ArrowIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
  transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
  transition: transform .3s;
`;

export const SectionContainer = styled.div`
  position: absolute;
  top: 58px;
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
    border: 1px solid #DBDBDB;
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

export const SliderContainer = styled.div `
  width: 100%
`;

export const Slider = styled.input.attrs({
  type: 'range',
})`
  
`;

// Instant Book Menu Styling
export const InstantBookMenuContainer = styled.div`
  position: absolute;
  top: 58px;
  border: 1px solid grey;
  border-radius: 3px;
  width: 320px;
  height: 140px;
  padding: 18px;

  div:first-child {
    display: inline-block;
    width: 200px;
    margin-right: 30px;
  }
`;

// Toggle Button
export const ToggleButtonLabel = styled.label`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 48px;
  height: 32px;
`;

export const ToggleButtonInput = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;

  &:checked + span {
    background-color: #008489;
    border: solid 1px #008489;
    box-shadow: 0px 0px 10px #008489;
  }

  &:focus + span{
    box-shadow: 0px 0px 10px #008489;
  }

  &:checked + span:before {
    transform: translateX(18px);
    border: 1px solid #008489;
  }
`;

export const ToggleButtonSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #DBDBDB;
  border-radius: 34px;
  border: solid 1px #F2F2F2;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 28px;
    width: 28px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    border: 1px solid #F2F2F2;
    border-radius: 50%;
    transition: .4s;
  }
`;

// More filters Styling

export const MoreFiltersContainer = styled.div`
  width: 70%;
  position: absolute;
  top: 48px; 
  left: 18px;
  padding: 30px 0;
  `;

export const EachOptionContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
`;

export const MoreFiltersHeading = styled.h2`
`;

export const MoreFiltersOptionContainer = styled.div`
  display: flex;  
  justify-content: space-between;
  width: 45%;
  margin-bottom: 20px;
  p {
    margin: 0;
  }
`;

export const MoreFiltersOptionStyle = styled.div`
  font-size: 18px;
`;

// More options 


// Counter 

export const CounterContainer = styled.div`
  display: table;
  width: 110px;
`;

export const MinusButton = styled.div`
  border: 1px solid;
  border-radius: 50%;
  color: #008489;
  display: table-cell;
  width: 30px;
  height: 30px;
  position: relative;
  text-align: left;
  :after {
    font-size: 16px;
    content: "_";
    position: absolute;
    top: -1px;
    left: 10px;
  }
`;

export const PlusButton = styled.div`
  border: 1px solid;
  border-radius: 50%;
  color: #008489;
  display: table-cell;
  width: 30px;
  height: 30px;
  position: relative;
  text-align: right;
  :after {
    font-size: 16px;
    content: "+";
    position: absolute;
    top: 3px;
    left: 9px;
  }
`;

export const Counter = styled.div`
  display: table-cell;
  text-align: center;
  font-size: 20px;
  vertical-align: middle !important;
`;

// Cancel and Apply buttons
export const SectionButtonsContainer = styled.div`
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
  padding: 0;
`;

export const ApplyButton = styled.button`
  position: absolute;
  right: 0;
  color: #008489;
  padding: 0;
`;
