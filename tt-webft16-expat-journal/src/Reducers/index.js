import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { userActionReducer } from "./userActionReducer";

export const rootReducer = combineReducers({
	loginReducer,
	userActionReducer,
});
