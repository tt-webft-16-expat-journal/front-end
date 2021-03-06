import { ADD_POST, UPDATE_POST } from "../Actions/index";

const initialState = {
	posts: {
		title: "Your Title Here",
		story: "Ipsum Lorem. On repeat.",
		image_url: "",
		user_id: "",
		id: 0,
	},
};

export function postReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: action.payload,
			};
		case UPDATE_POST:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
}
