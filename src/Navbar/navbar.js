import React from 'react';
import ReactDOM from 'react-dom';
import img from "./koala-headphone-logo.jpg"
//import './styles.css/';

class NavComponent extends React.Component {
	render() {
		return (
			<nav>
				<div class="Banner">		
					<div className="Logo">
						<a href="#"><img src={img} alt="home" /></a>
					</div>
					<div className="Blank">
					</div>
					<div className="Buttons">
						<button className="Buttons--actions"  title="Become a Host">
							<span>Become a Host</span>
						</button>
						<button className="Buttons--actions" title="Help">
							<span>Help</span>
						</button>
						<button className="Buttons--actions" title="Sign up">
							<span>Sign up</span>
						</button>
						<button className="Buttons--actions" title="Log in">
							<span>Log in</span>
						</button>		
					</div>
				</div>
			</nav>
		);
	}
}

export default NavComponent

