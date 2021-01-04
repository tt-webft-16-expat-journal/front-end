import axios from "axios";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUser = (dispatch) => {
	dispatch({ type: FETCH_USER_START });

	axios
		.get("")
		.then((res) => {
			dispatch({ type: FETCH_USER_SUCCESS, paylaod: res.data });
		})
		.catch((err) => {
			dispatch({ type: FETCH_USER_FAILURE, payload: err.message });
		});
};
