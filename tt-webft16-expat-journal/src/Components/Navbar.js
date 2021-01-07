import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const logOut = () => {
		window.localStorage.removeItem("token");
		window.location = "/login";
	};

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
						Home .
					</NavLink>
					<button className="main-nav" onClick={logOut}>
						Sign Out
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Nav;
