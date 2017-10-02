import React from 'react';
import img from './Airbnb_Logo_Bélo.svg_.png';

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.showmenu = this.showmenu.bind(this);
  }

  showmenu() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <nav>
        <div className="Banner">
          <a href="" className="Logo1" > <img className="Logo1__position" src={img} width="30px" alt="home" /> </a>
          <button className="Logo" onClick={this.showmenu} tabIndex="0">
            <img src={img} width="30px" alt="menu" />
          </button>
          <div className="Blank" />
          <div className={`Buttons ${this.state.show ? 'Show' : ''}`}>
            <button className="Buttons--action" title="Become a Host" aria-hidden="true">
              <span>Become a Host</span>
            </button>
            <button className="Buttons--action" title="Help" aria-hidden="true">
              <span>Help</span>
            </button>
            <button className="Buttons--action" title="Sign up" aria-hidden="true">
              <span>Sign up</span>
            </button>
            <button className="Buttons--action" title="Log in" aria-hidden="true">
              <span>Log in</span>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;
