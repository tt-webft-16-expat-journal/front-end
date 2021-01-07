import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

//styles

const NavBar = styled.div`
	display: flex;
	justify-content: center;
	align-item: center;
	padding: 2%;
`;

const Nav = () => {
	const logOut = () => {
		window.localStorage.removeItem("token");
		window.location = "/login";
	};

	return (
		<NavBar className="headernav">
			<header>
				<nav id="hnavbuttons">
					<NavLink className="main-nav" activeClassName="active" to="/signup">
						SignUp
					</NavLink>
					<NavLink className="main-nav" activeClassName="active" to="/login">
						Log In
					</NavLink>
					<NavLink className="main-nav" activeClassName="active" to="/home">
						Home
					</NavLink>
					<button className="main-nav" onClick={logOut}>
						Sign Out
					</button>
				</nav>
			</header>
		</NavBar>
	);
};

export default Nav;
