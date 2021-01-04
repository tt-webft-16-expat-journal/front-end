import axios from "axios";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const login = (dispatch) => {
	dispatchEvent({ type: USER_LOGIN_START });

	axios
		.get("")
		.then((res) => {
			dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: USER_LOGIN_FAILURE, payload: err.message });
		});
};
