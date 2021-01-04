import {
	FETCH_USER_START,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
} from "../Actions/userActions";

export const initialState = {
	user: [],
	isFetching: false,
	id: "",
	error: "",
};

export const userActionReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_START:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				isFetching: false,
				id: action.payload,
			};
		case FETCH_USER_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
