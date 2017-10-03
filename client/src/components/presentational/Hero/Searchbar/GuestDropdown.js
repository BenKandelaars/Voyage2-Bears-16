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
    this.AddChild = this.AddChild.bind(this);
    this.AddInfant = this.AddInfant.bind(this);
    this.MinusAdult = this.MinusAdult.bind(this);
    this.MinusChild = this.MinusChild.bind(this);
    this.MinusInfant = this.MinusInfant.bind(this);
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
  AddChild() {
    this.setState({
      Children: this.state.Children + 1,
    });
  }
  MinusChild() {
    this.setState({
      Children: this.state.Children - 1,
    });
  }
  AddInfant() {
    this.setState({
      Infants: this.state.Infants + 1,
    });
  }
  MinusInfant() {
    this.setState({
      Infants: this.state.Infants - 1,
    });
  }

  render() {
    const GuestCounter = props => (
      <CounterWrapper className="Counter-Wrapper">
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
      <GuestWrapper className="Guest-Wrapper">
        <div>
          <GuestMenu className="GuestMenu">
            <GuestCounter
              className="Guest-Counter"
              agegroup={'Adults'}
              number={this.state.Adults}
              add={this.AddAdult}
              minus={this.MinusAdult}
            />
            <GuestCounter
              className="Guest-Counter"
              agegroup={'Children'}
              number={this.state.Children}
              add={this.AddChild}
              minus={this.MinusChild}
            />
            <GuestCounter
              className="Guest-Counter"
              agegroup={'Infants'}
              number={this.state.Infants}
              add={this.AddInfant}
              minus={this.MinusInfant}
            />
          </GuestMenu>
        </div>
      </GuestWrapper>
    );
  }
}
