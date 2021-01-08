import axios from "axios";

export const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token");
	return axios.create({
		baseURL: "https://expat-16.herokuapp.com/",
		headers: {
			Authorization: token,
		},
	});
};
