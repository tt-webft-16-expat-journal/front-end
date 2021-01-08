import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../FormValidation/loginFormSchema";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import { USER_LOGIN_SUCCESS } from "../Actions/authActions";
import { useDispatch } from "react-redux";

const initialFormValues = {
	username: "",
	password: "",
};

const initialFormErrors = {
	username: "",
	password: "",
};

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const initialDisabled = true;

	const [login, setLogin] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const postNewLogin = (newLogin) => {
		axiosWithAuth()
			.post("api/auth/login", newLogin)
			.then((res) => {
				// console.log(res.data);
				setLogin([...login, newLogin]);
				setFormValues(initialFormValues);
				dispatch({
					type: USER_LOGIN_SUCCESS,
					payload: {
						username: res.data.username,
						email: res.data.email,
						password: res.data.password,
					},
				});
				window.localStorage.setItem("token", res.data.token);
				window.location = "/home";
			})
			.catch((err) => {
				alert(
					"There was an error logging you in, please reload the page and try again."
				);
				console.log(err);
			});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		const newLogin = {
			username: formValues.username.trim(),
			password: formValues.password.trim(),
		};
		postNewLogin(newLogin);
	};

	const validate = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		yup
			.reach(schema, name)
			.validate(value)
			.then((valid) => {
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})
			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	useEffect(() => {
		schema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={formSubmit}>
				<label>
					{" "}
					Username <br />
					<input
						type="text"
						name="username"
						value={formValues.username}
						placeholder="Username"
						onChange={validate}
					/>
					<div>{formErrors.username}</div>
				</label>{" "}
				<br />
				<label>
					Password <br />
					<input
						type="password"
						name="password"
						value={formValues.password}
						placeholder="Password"
						onChange={validate}
					/>
				</label>
				<div>{formErrors.password}</div>
				<button type="submit" disabled={disabled} name="loginButton">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
