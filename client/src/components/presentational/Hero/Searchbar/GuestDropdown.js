import React, { Component } from 'react';
import '../../../assets/font-awesome-4.7.0/css/font-awesome.css';
import { GuestMenu, GuestWrapper } from './styles';

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
    return (
      <GuestWrapper>
        <div>
          <GuestMenu>
            <div>
              Adults
              <span className="fa fa-minus-circle" aria-hidden="true" />
              {this.state.Adults}
              <span className="fa fa-plus-circle" aria-hidden="true" />
            </div>
            <div>
              Children
              <span className="fa fa-minus-circle" aria-hidden="true" />
              {this.state.Children}
              <span className="fa fa-plus-circle" aria-hidden="true" />
            </div>
            <div>
              Infants
              <span className="fa fa-minus-circle" aria-hidden="true" />
              {this.state.Infants}
              <span className="fa fa-plus-circle" aria-hidden="true" />
            </div>
          </GuestMenu>
        </div>
      </GuestWrapper>
    );
  }
}
