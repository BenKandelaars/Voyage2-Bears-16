import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import SectionButtons from './SectionButtons';
import { SectionContainer, SelectionChoiceHeading, SelectionChoiceSubHeading, SliderContainer } from './styles';

const SliderComponent = props => (
  <SliderContainer>
    <Range
      allowCross={false}
      defaultValue={[0, 1000]}
      min={9}
      max={1000}
      onChange={(value) => props.onValueChange(value)}
      onAfterChange={(value) => props.onMouseDownEvent(value)}
      />
  </SliderContainer>
);


class PriceRangeOption extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: [9, 1000],
    };
  }

  onValueChange = (value) => {
    this.setState(({
      value
    }));
    
  }

  onMouseDownEvent = (value) => {
    this.props.handlePriceRangeChange(value);
  }
    
  render() {
    return (
      <SectionContainer>
        <SelectionChoiceHeading>
        €{this.state.value[0]} - {this.state.value[1]}
        </SelectionChoiceHeading>
        <SelectionChoiceSubHeading>
          The average nightly price is $77.      
        </SelectionChoiceSubHeading>
        <SliderComponent onValueChange={this.onValueChange} onMouseDownEvent={this.onMouseDownEvent} />
        <SectionButtons />
      </SectionContainer>
    );
  }
};

export default PriceRangeOption;
