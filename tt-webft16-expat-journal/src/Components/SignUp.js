import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import * as yup from "yup";
import signupSchema from "../FormValidation/signupFormSchema";
import "../App.css";

const INITIAL_FORM_STATE = {
	username: "",
	email: "",
	password: "",
};

const INITIAL_ERROR_STATE = {
	username: "",
	password: "",
	email: "",
};

const SignUp = (props) => {
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);
	const [responseMsg, setResponseMsg] = useState({ success: null, msg: "" });
	const [formErrors, setFormErrors] = useState(INITIAL_ERROR_STATE);
	const [disabled, setDisabled] = useState(true);
	const [formChanged, setFormChanged] = useState(false);

	useEffect(() => {
		if (props && props.userData) {
			setFormState(props.userData);
		}
	}, [props]);

	const handleInputChange = (e) => {
		const target = e.target;

		validate(target.name, target.value);

		setFormState({ ...formState, [target.name]: target.value });
	};

	const validate = (name, value) => {
		yup
			.reach(signupSchema, name)
			.validate(value)
			.then((valid) => {
				setFormChanged(true);
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
	};

	useEffect(() => {
		signupSchema.isValid(formState).then((valid) => {
			setDisabled(!valid);
		});
	}, [formState]);

	useEffect(() => {
		signupSchema.isValid(formChanged).then((valid) => {
			setDisabled(!valid);
		});
	}, [formChanged]);

	const onFormSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post("api/auth/register", formState)
			.then((res) => {
				console.log(res);
				if (res.statusText === "Created") {
					console.log("New account is created successfully.");
					const successMsg = props.btn
						? "Account is updated successfully."
						: "New account is created successfully.";
					setFormState(INITIAL_FORM_STATE);
					setResponseMsg({
						success: true,
						msg: successMsg,
					});
				}
				window.location = "/login";
			})
			.catch((err) => {
				// debugger;
				if (err.response) {
					console.log(err.response);
					setResponseMsg({
						success: false,
						msg: err.response.data.message,
					});
				}
			});
	};

	return (
		<div>
			<h1>Sign Up</h1>
			{responseMsg.success !== null && (
				<p
					className={`text-center ${
						responseMsg.success ? "text-success" : "text-danger"
					}`}
				>
					{responseMsg.msg}
				</p>
			)}
			<form onSubmit={onFormSubmit}>
				<label>
					Username <br />
					<input
						name="username"
						type="text"
						placeholder="Username"
						value={formState.username}
						onChange={handleInputChange}
					/>
					<div className="text-danger">{formErrors.username}</div>
				</label>
				<label>
					Email <br />
					<input
						name="email"
						type="email"
						placeholder="Your email"
						value={formState.email}
						onChange={handleInputChange}
					/>
					<div className="text-danger">{formErrors.email}</div>
				</label>
				<label>
					Password <br />
					<input
						name="password"
						type="password"
						value={formState.password}
						onChange={handleInputChange}
					/>
					<div className="text-danger">{formErrors.password}</div>
				</label>
				<button type="submit" disabled={disabled} name="loginButton">
					submit
				</button>
			</form>
		</div>
	);
};

export default SignUp;
