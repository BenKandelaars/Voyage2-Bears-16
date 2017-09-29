import React from 'react';
import img from "./koala-headphone-logo.jpg"

class NavComponent extends React.Component {

	showmenu() {
		let menu = document.querySelector('.Buttons');
		if (menu.style.display === 'block') {
			menu.style.display = 'none';
		} else {
			menu.style.display = 'block';
		}
	}
	render() {
		return (
			<nav>
				<div className="Banner">
					<div className="Logo" onClick={this.showmenu}>
						<a href="#"><img src={img} width="100px" height="64px" alt="home" /></a>
					</div>
					<div className="Blank">
					</div>
					<div className="Buttons">	
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
					<div className="Overlay">
					</div>							
				</div>
			</nav>
		);
	}
}

export default NavComponent

