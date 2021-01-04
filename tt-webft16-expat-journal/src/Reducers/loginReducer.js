import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
} from "../Actions/loginActions";

export const initialState = {
	credentials: {
		username: "",
		password: "",
		email: "",
		error: "",
	},
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				username: action.payload,
				password: action.payload,
				email: action.payload,
			};
		case USER_LOGIN_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
