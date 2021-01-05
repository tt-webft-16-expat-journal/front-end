import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div className="headernav">
			<header>
				<nav id="hnavbuttons">
					<NavLink className="main-nav" activeClassName="active" to="/signup">
						SignUp .
					</NavLink>
					<NavLink className="main-nav" activeClassName="active" to="/login">
						Log In .
					</NavLink>
					<NavLink className="main-nav" activeClassName="active" to="/home">
						Home
					</NavLink>
				</nav>
			</header>
		</div>
	);
};

export default Nav;
