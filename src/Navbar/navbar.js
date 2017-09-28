import React from 'react';
import ReactDOM from 'react-dom';
import img from "./koala-headphone-logo.jpg"

class NavComponent extends React.Component {
	render() {
		return (
			<nav>
				<div className="Banner">
					<div className="Logo">
						<a href="#"><img src={img} width="100px" height="64px" alt="home" /></a>
					</div>
					<div className="Blank">
					</div>
					<div className="Buttons">
						<button className="Buttons--action"  title="Become a Host">
							<span>Become a Host</span>
						</button>
						<button className="Buttons--action" title="Help">
							<span>Help</span>
						</button>
						<button className="Buttons--action" title="Sign up">
							<span>Sign up</span>
						</button>
						<button className="Buttons--action" title="Log in">
							<span>Log in</span>
						</button>		
					</div>								
				</div>
			</nav>
		);
	}
}

export default NavComponent

