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

    this.AddAdult = this.AddAdult.bind(this);
    this.MinusAdult = this.MinusAdult.bind(this);
  }

  AddAdult() {
    this.setState({
      Adults: this.state.Adults + 1,
    });
  }
  MinusAdult() {
    this.setState({
      Adults: this.state.Adults - 1,
    });
  }

  render() {
    const GuestCounter = props => (
      <CounterWrapper>
        <div>
          {props.agegroup}
          <button onClick={props.minus}>
            <span className="fa fa-minus-circle" aria-hidden="true" />
          </button>
          {props.number}
          <button onClick={props.add}>
            <span className="fa fa-plus-circle" aria-hidden="true" />
          </button>
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
              add={this.AddAdult}
              minus={this.MinusAdult}
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
