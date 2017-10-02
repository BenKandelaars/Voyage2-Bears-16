import React, { Component } from 'react';
import '../../../assets/font-awesome-4.7.0/css/font-awesome.css';
import { GuestMenu, GuestWrapper, CounterWrapper } from './styles';

export default class GuestDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      Adults: 1,
      Children: 0,
      Infants: 0,
    };
  }

  render() {

    const GuestCounter = props => (
      <CounterWrapper>
        <div>
          {props.agegroup}
          <span className="fa fa-minus-circle" aria-hidden="true" />
          {props.number}
          <span className="fa fa-plus-circle" aria-hidden="true" />
        </div>
      </CounterWrapper>
    );

    return (
      <GuestWrapper>
        <div>
          <GuestMenu>
            <GuestCounter
              agegroup={'Adults'}
              number={this.state.Adults}
            />
            <GuestCounter
              agegroup={'Children'}
              number={this.state.Children}
            />
            <GuestCounter
              agegroup={'Infants'}
              number={this.state.Infants}
            />
          </GuestMenu>
        </div>
      </GuestWrapper>
    );
  }
}
