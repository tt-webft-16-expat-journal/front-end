export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";

export function addPost(newPost) {
	return {
		type: ADD_POST,
		payload: newPost,
	};
}

export function updatePost(updatedPost) {
	return {
		type: UPDATE_POST,
		payload: updatedPost,
	};
}
