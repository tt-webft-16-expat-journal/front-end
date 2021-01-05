import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { userActionReducer } from "./userActionReducer";

export const rootReducer = combineReducers({
	authReducer,
	userActionReducer,
});
