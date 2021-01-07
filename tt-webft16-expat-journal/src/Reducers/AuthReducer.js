import {
	USER_LOGIN_START,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
} from "../Actions/index";

const initialState = {
	userData: {
		username: "",
		password: "",
		email: "",
		isLoggedIn: false,
		isFetching: false,
		error: "",
	},
};

export const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_LOGIN_START:
			return {
				...state,
				isFetching: true,
			};
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				user: {
					username: payload.username,
					password: payload.password,
					email: payload.email,
					isLoggedIn: true,
				},
				isFetching: false,
			};
		case USER_LOGIN_FAILURE:
			return {
				...state,
				error: payload,
				isFetching: false,
			};
		default:
			return state;
	}
};
