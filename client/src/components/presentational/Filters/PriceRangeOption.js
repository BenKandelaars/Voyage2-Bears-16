import React, { Component } from 'react';
import SectionButtons from './SectionButtons';
import { SectionContainer, SelectionChoiceHeading, SelectionChoiceSubHeading,
  SliderContainer } from './styles';

const Slider = props => (
  <SliderContainer>
    <input
      type="range"
      value={props.min_value}
      name="min_value"
      min="9"
      max="1000"
      onChange={(e) => {props.handleChange(e)}}
    />
    <input
      type="range"
      value={props.max_value}
      name="max_value"
      min="9"
      max="1000"
      onChange={(e) => {props.handleChange(e)}}
    />
  </SliderContainer>
);



class PriceRangeOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      min_value: 9,
      max_value: 1000,
    };
  }
  handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (e.target.name === "min_value" && value < this.state.max_value) {
      this.setState({
        min_value: value,
      });
    } else if (value > this.state.min_value) {
      this.setState({
        max_value: value,
      });
    }
    // let obj = {};
    // obj[e.target.name] = value;
    // this.setState(obj);
  }
    
  render() {
    return (
      <SectionContainer>
        <SelectionChoiceHeading>
          ${this.state.min_value} - ${this.state.max_value}
        </SelectionChoiceHeading>
        <SelectionChoiceSubHeading>
          The average nightly price is $77.      
        </SelectionChoiceSubHeading>
        <SliderContainer>
          <Slider 
            min_value={this.state.min_value}
            max_value={this.state.max_value}
            handleChange={this.handleChange}
          />
        </SliderContainer>
        <SectionButtons />
      </SectionContainer>
    );
  }
};

export default PriceRangeOption;
