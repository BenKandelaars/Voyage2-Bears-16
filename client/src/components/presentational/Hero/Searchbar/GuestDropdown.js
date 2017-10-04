import React, { Component } from 'react';
import '../../../assets/font-awesome-4.7.0/css/font-awesome.css';
import { GuestMenu, GuestWrapper, CounterWrapper, Overlay, OverlayContent, CloseBTN } from './styles';

export default class GuestDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
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
    this.CloseOverlay = this.CloseOverlay.bind(this);
  }

  AddAdult() {
    this.setState({
      Adults: this.state.Adults + 1,
    }, this.AddAllGuests);
  }
  MinusAdult() {
    this.setState({
      Adults: this.state.Adults - 1,
    }, this.AddAllGuests);
  }
  AddChild() {
    this.setState({
      Children: this.state.Children + 1,
    }, this.AddAllGuests);
  }
  MinusChild() {
    this.setState({
      Children: this.state.Children - 1,
    }, this.AddAllGuests);
  }
  AddInfant() {
    this.setState({
      Infants: this.state.Infants + 1,
    }, this.AddAllGuests);
  }
  MinusInfant() {
    this.setState({
      Infants: this.state.Infants - 1,
    }, this.AddAllGuests);
  }

  AddAllGuests() {
    this.props.addGuests(this.state.Adults + this.state.Children + this.state.Infants);
  }

  CloseOverlay() {
    this.props.showing(this.setState({ show: true }));
  }

  render() {
    const GuestCounter = props => (
      <CounterWrapper className="Counter-Wrapper">
        <div className="age-group-row">
          <div>
            {props.agegroup}
          </div>
          <div>
            <button onClick={props.minus} className="button-">
              <span className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            {props.number}
            <button onClick={props.add} className="button+">
              <span className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          </div>
        </div>
      </CounterWrapper>
    );

    return (
      <GuestWrapper className="Guest-Wrapper">
        <div>
          {this.AddAllGuests}
          <GuestMenu className="GuestMenu" style={{ display: this.props.showing ? 'block' : 'none' }} >
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
        <Overlay className="overlay" style={{ width: this.props.showing ? '100%' : '0%' }} >

          <CloseBTN className="closebtn" onClick={this.props.click2show}>&times;</CloseBTN>

          <OverlayContent class="overlay-content">
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
          </OverlayContent>

        </Overlay>
      </GuestWrapper>
    );
  }
}

GuestDropdown.propTypes = {
  showing: React.PropTypes.bool.isRequired,
  addGuests: React.PropTypes.func.isRequired,
  click2show: React.PropTypes.func.isRequired,
};
