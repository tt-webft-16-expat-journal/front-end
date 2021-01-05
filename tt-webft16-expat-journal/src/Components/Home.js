import React, { useEffect } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const Home = () => {
	const logOut = () => {
		window.localStorage.removeItem("token");
		window.location = "/login";
	};

	useEffect(() => {
		axiosWithAuth()
			.get("api/posts")
			.then((res) => {
				console.log("response -->", res.data);
			})
			.catch((err) => {
				console.log("error --> ", err);
			});
	}, []);

	return (
		<div>
			<h1>Posts Go Here.</h1>
			<button onClick={logOut}>Sign Out</button>
		</div>
	);
};

export default Home;
