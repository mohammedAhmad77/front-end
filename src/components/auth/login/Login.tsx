import React from "react";
import Eye from "../../../shared/svgComponents/components/eye";
import Hide from "../../../shared/svgComponents/components/hide";
import { LoginForm, dirtyLoginForm } from "../../../models/Form";
import {
	checkMinMax,
	checkValueExistence,
	checkPattern,
	handleKeyPress
} from "../../../utils/index";
import { validationMsg,limits } from "../../../enums/index";
import {emailPatterns} from "../../../regex/index";


interface LoginFormState {
	formErrors: string;
	loginForm: LoginForm;
	loginFormErrors: LoginForm;
	passwordType: string;
	dirty: dirtyLoginForm;
	disabledSubmit: boolean;
	responseStatusCode: number;
	isLoggedIn: boolean;
}

const emailRegex = emailPatterns.emailRegex;

class Login extends React.Component<any, LoginFormState> {
	constructor(props: any) {
		super(props);

		this.state = {
			disabledSubmit: false,
			responseStatusCode: 0,
			passwordType: "password",
			formErrors: "",
			loginForm: {
				email: "",
				password: "",
			},
			loginFormErrors: {
				email: "",
				password: "",
			},
			dirty: {
				email: false,
				password: false,
			},
			isLoggedIn: false,
		};
	}

	/////////////////// check password type
	handlePasswordType = (): void => {
		if (this.state.passwordType === "password") {
			this.setState({
				passwordType: "text",
			});
		} else {
			this.setState({
				passwordType: "password",
			});
		}
	};

	////////////// handle inputs change
	handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		const { name, value }: { name: string; value: string } = e.target;

		this.setState((prevState) => ({
			loginForm: {
				...prevState.loginForm,
				[name]: value,
			},
			dirty: {
				...prevState.dirty,
				[name]: true,
			},
		}));
	};

	///////////////////// validate Focus input
	validateForm = (e: React.FormEvent): void => {
		e.preventDefault();
		const {
			name,
			value,
		}: { name: string; value: string } = e.target as HTMLInputElement;
		this.checkFormValidation(name, value);
	};

	checkFormValidation = (name: string, value: string): void => {
		const {
			loginFormErrors,
			dirty,
		}: { loginFormErrors: LoginForm; dirty: dirtyLoginForm } = this.state;

		switch (name) {
			case "email":
				if (dirty[name]) {
					loginFormErrors[name] =
						checkValueExistence(value, validationMsg.emailRequiredMsg) ||
						checkPattern(emailRegex, value, validationMsg.emailValidMsg);
				}
				break;
			case "password":
				if (dirty[name]) {
					loginFormErrors[name] =
						checkValueExistence(value, validationMsg.passwordRequiredMsg) ||
						checkMinMax(
							limits.passwordMinLimit,
							limits.passwordMaxLimit,
							value,
							validationMsg.passwordMinLimitMsg,
							validationMsg.passwordMaxLimitMsg
						);
				}
				break;
		}

		this.setState({
			loginFormErrors,
		});
	};

	submitHandler = async () => {
		console.log("logged In successfully")
		
	};



	////////////////////// check if should submit
	canBeSubmitted = (): boolean => {
		const {
			loginFormErrors,
			dirty,
		}: { loginFormErrors: LoginForm; dirty: dirtyLoginForm } = this.state;
		let isValidated = false;

		Object.values(dirty).forEach((val) => !val && (isValidated = true));

		Object.values(loginFormErrors).forEach(
			(val) => val && (isValidated = true)
		);

		return isValidated;
	};

	render() {
		const isDisabled = this.canBeSubmitted();

		return (
			<div
				onKeyPress={(e) => {
					handleKeyPress(
						e,
						this.submitHandler,
						this.canBeSubmitted,
						this.state.disabledSubmit
					);
				}}
				className="login"
			>
				<div className="login__container">
					<div className="form-group login__form">
						<label className="login__form-label">البريد</label>
						<input
							onChange={(e) => this.handleInputChange(e)}
							onBlur={this.validateForm}
							name="email"
							type="email"
							value={this.state.loginForm.email}
							className={`form-control login__form-input ${
								this.state.loginFormErrors.email
									? "login__form-input-valid"
									: ""
							}`}
							placeholder="ادخل بريدك الالكتروني"
						/>
						<span className="login__form-bar"></span>
						{this.state.loginFormErrors.email ? (
							<span className="login__form-valid">
								{this.state.loginFormErrors.email}
							</span>
						) : null}
					</div>
					<div className="form-group login__form">
						<div className="form-group login__form">
							<label className="login__form-label">كلمة السر</label>
							<div className="login__form__input-content">
								<input
									onChange={(e) => this.handleInputChange(e)}
									onBlur={this.validateForm}
									name="password"
									type={this.state.passwordType}
									value={this.state.loginForm.password}
									className={`form-control login__form-input ${
										this.state.loginFormErrors.password
											? "login__form-input-valid"
											: ""
									}`}
									placeholder="ادخل كلمة سرك"
								/>
								<span className="login__form-bar"></span>
								<button
									onClick={() => this.handlePasswordType()}
									type="button"
									className="login__form-icon"
								>
									{this.state.passwordType === "password" ? <Eye /> : <Hide />}
								</button>
							</div>
							{this.state.loginFormErrors.password ? (
								<span className="login__form-valid">
									{this.state.loginFormErrors.password}
								</span>
							) : null}
						</div>

						<div className="login__form__forgetPassword">
							<button
								className="text-primary login__form__forgetPassword-link"
								type="button"
							>
								نسيت كلمة السر؟
							</button>
						</div>
					</div>
				</div>

				<div className="login__button-field">
					<button
						disabled={isDisabled || this.state.disabledSubmit}
						type="submit"
						className={`btn btn-lg login__button-field-btn ${
							isDisabled || this.state.disabledSubmit
								? ""
								: "login__button-field-btn-enabled"
						}`}
						data-toggle="button"
						aria-pressed="false"
						onClick={this.submitHandler}
					>
						دخول
					</button>
				</div>
			</div>
		);
	}
}

export default Login;
