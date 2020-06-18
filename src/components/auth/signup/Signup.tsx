import React, { Component } from "react";
import { SignupForm, dirtySignupForm } from "../../../models/Form";
import UpArrow from "../../../shared/svgComponents/components/upArrow";
import Eye from "../../../shared/svgComponents/components/eye";
import Hide from "../../../shared/svgComponents/components/hide";

import {
	checkMinMax,
	checkValueExistence,
	checkPattern,
	checkValuesMatching,
	noNumbers,
	handleKeyPress,
} from "../../../utils/index";
import { limits,validationMsg } from "../../../enums/index";
import {years,months,days} from "../../../utils/index";
import {emailPatterns,noNumbersPatterns } from "../../../regex/index";

const emailRegex = emailPatterns.emailRegex;


interface signupFormState {
	signupForm: SignupForm;
	signupFormErrors: SignupForm;
	confirmPasswordType: string;
	passwordType: string;
	dirty: dirtySignupForm;
	birthDateType: string | null;
	responseStatusCode: number;
	disabledSubmit: boolean;
}

class Signup extends Component<any, signupFormState> {
	_isMounted = false;
	constructor(props: any) {
		super(props);
		this.state = {
			responseStatusCode: 0,
			disabledSubmit: false,
			confirmPasswordType: "password",
			passwordType: "password",
			birthDateType: null,
			signupForm: {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
				day: "",
				month: "",
				year: "",
				gender: "",
				birthDate: "",
			},
			signupFormErrors: {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
				day: "",
				month: "",
				year: "",
				gender: "",
			},
			dirty: {
				firstName: false,
				lastName: false,
				email: false,
				password: false,
				confirmPassword: false,
				day: false,
				month: false,
				year: false,
				gender: false,
			},
		};
	}

	selectorRef:any;

	//////////////// toggle selectors active
	handleSelectorField = (date:string): void => { 
			let {birthDateType}:{birthDateType: string | null} = this.state;
			birthDateType === date ? birthDateType = null : birthDateType = date;
			this.setState({
				birthDateType,
			}, () => {
				if(this.state.birthDateType) {
					window.addEventListener("click",this.hideSelectorField);
				} else {
					window.removeEventListener("click",this.hideSelectorField);
				}
			});
	
	};

	
	hideSelectorField = (e:Event) => {
		if(this.selectorRef && !this.selectorRef.contains(e.target)) {
			this.setState({birthDateType : null})
		}
	}

	/////////// toggle select List
	handleSelectedList = (type:string,date:string | number): void => {  
	
		this.setState((prevState) => ({
			signupForm: {
				...prevState.signupForm,
				[type]: date,
			},
			dirty: {
				...prevState.dirty,
				[type]: true,
			},
			birthDateType:null,
		}));
	};

	//////////////// handle password type
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

	/////////////////////////// handle confirm password type
	handleConfirmPasswordType = (): void => {
		if (this.state.confirmPasswordType === "password") {
			this.setState({
				confirmPasswordType: "text",
			});
		} else {
			this.setState({
				confirmPasswordType: "password",
			});
		}
	};

	//////////////////// toggle checked boxes
	toggleCheckedBox = (e: React.MouseEvent): void => {
		const checkboxElement = (e.target as HTMLAnchorElement).id;

		this.setState((prevState) => ({
			signupForm: {
				...prevState.signupForm,
				gender: checkboxElement,
			},
			dirty: {
				...prevState.dirty,
				gender: true,
			},
		}));
	};

	///////////// handle inputs field change
	handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const {
			name,
			value,
		}: { name: string; value: string } = e.target as HTMLInputElement;

		this.setState((prevState) => ({
			signupForm: {
				...prevState.signupForm,
				[name]: value,
			},
			dirty: {
				...prevState.dirty,
				[name]: true,
			},
		}));
	};

	///////////////// Validate form
	validateForm = (e: React.FormEvent<HTMLInputElement>): void => {
		const {
			value,
			name,
		}: { value: string; name: string } = e.target as HTMLInputElement;

		this.checkFormValidation(name, value);
	};

	resetForm = () => {
		this.setState({
			signupForm: {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
				day: "",
				month: "",
				year: "",
				gender: "",
				birthDate: "",
			},
			dirty: {
				firstName: false,
				lastName: false,
				email: false,
				password: false,
				confirmPassword: false,
				day: false,
				month: false,
				year: false,
				gender: false,
			},
			disabledSubmit: false,
		});
	};

	/////////////////////// handle submit form
	handleSubmitForm = async () => {
		console.log("submitted successfully")
	};



	///////////////////////// check Form Validation
	checkFormValidation = (name: string, value: string): void => {
		const { signupFormErrors, dirty } = this.state;

		switch (name) {
			case "firstName":
				if (dirty[name]) {
					signupFormErrors[name] =
						checkValueExistence(value, validationMsg.firstNameRequiredMsg) ||
						noNumbers(value, validationMsg.noNumbers,noNumbersPatterns) ||
						checkMinMax(
							limits.firstNameMinLimit,
							limits.firstNameMaxLimit,
							value,
							validationMsg.firstNameMinLimitMsg,
							validationMsg.firstNameMaxLimitMsg
						);
				}
				break;

			case "lastName":
				if (dirty[name]) {
					signupFormErrors[name] =
						checkValueExistence(value, validationMsg.lastNameRequiredMsg) ||
						noNumbers(value, validationMsg.noNumbers,noNumbersPatterns) ||
						checkMinMax(
							limits.lastNameMinLimit,
							limits.lastNameMaxLimit,
							value,
							validationMsg.lastNameMinLimitMsg,
							validationMsg.lastNameMaxLimitMsg
						);
				}
				break;
			case "email":
				if (dirty[name]) {
					signupFormErrors[name] =
						checkValueExistence(value, validationMsg.emailRequiredMsg) ||
						checkPattern(emailRegex, value, validationMsg.emailValidMsg);
				}
				break;
			case "password":
				if (dirty[name]) {
					signupFormErrors[name] =
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
			case "confirmPassword":
				if (dirty[name]) {
					signupFormErrors[name] =
						checkValueExistence(
							value,
							validationMsg.confirmPasswordRequiredMsg
						) ||
						checkValuesMatching(
							value,
							this.state.signupForm.password,
							validationMsg.confirmPasswordMatchingMsg
						);
				}
				break;
		}

		this.setState({ signupFormErrors });
	};

	canBeSubmitted = (): boolean => {
		const {
			signupFormErrors,
			dirty,
		}: { signupFormErrors: SignupForm; dirty: dirtySignupForm } = this.state;
		let isValidated = false;

		Object.values(dirty).forEach((val) => !val && (isValidated = true));

		Object.values(signupFormErrors).forEach(
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
						this.handleSubmitForm,
						this.canBeSubmitted,
						this.state.disabledSubmit
					);
				}}
				className="sign-up"
			>
				<div className="sign-up__container">
					<div className="sign-up__form sign-up__form--username">
						<label className="sign-up__form__label">الاسم</label>
						<div className="form-row sign-up__form__content">
							<div className=" col sign-up__form__content--field">
								<input
									onBlur={this.validateForm}
									type="text"
									name="firstName"
									className={`form-control sign-up__form__content-input ${
										this.state.signupFormErrors.firstName
											? "sign-up__form__content-input-valid"
											: ""
									}`}
									placeholder="الاول"
									value={this.state.signupForm.firstName}
									onChange={(e) => this.handleInputChange(e)}
								/>
								<span className={`sign-up__form__content-bar`}></span>
								{this.state.signupFormErrors.firstName ? (
									<span className="sign-up__form__content-valid">
										{this.state.signupFormErrors.firstName}
									</span>
								) : null}
							</div>
							<div className=" col sign-up__form__content-field">
								<input
									onBlur={this.validateForm}
									type="text"
									name="lastName"
									className={`form-control sign-up__form__content-input ${
										this.state.signupFormErrors.lastName
											? "sign-up__form__content-input-valid"
											: ""
									}`}
									placeholder="الثاني"
									onChange={(e) => this.handleInputChange(e)}
									value={this.state.signupForm.lastName}
								/>
								<span className="sign-up__form__content-bar"></span>
								{this.state.signupFormErrors.lastName ? (
									<span className="sign-up__form__content-valid">
										{this.state.signupFormErrors.lastName}
									</span>
								) : null}
							</div>
						</div>
					</div>
					<div className="form-group sign-up__form">
						<label className="sign-up__form__label">البريد</label>
						<div className="form-row sign-up__form__content">
							<input
								onBlur={this.validateForm}
								type="email"
								name="email"
								className={`form-control sign-up__form__content-input ${
									this.state.signupFormErrors.email
										? "sign-up__form__content-input-valid"
										: ""
								}`}
								placeholder="ادخل بريد الكتروني"
								onChange={(e) => this.handleInputChange(e)}
								value={this.state.signupForm.email}
							/>
							<span className="sign-up__form__content-bar"></span>
							{this.state.signupFormErrors.email ? (
								<span className="sign-up__form__content-valid">
									{this.state.signupFormErrors.email}
								</span>
							) : null}
						</div>
					</div>
					<div className="form-group sign-up__form">
						<label className="sign-up__form__label">السر</label>
						<div className="sign-up__form__content">
							<div className="sign-up__form__content-password">
								<div className="signup__form_input-content">
									<input
										onBlur={this.validateForm}
										type={this.state.passwordType}
										name="password"
										className={`form-control sign-up__form__content-input sign-up__form__content-input--password ${
											this.state.signupFormErrors.password
												? "sign-up__form__content-input-valid"
												: ""
										}`}
										placeholder="ادخل كلمة سر"
										onChange={(e) => this.handleInputChange(e)}
										value={this.state.signupForm.password}
									/>
									<span className="sign-up__form__content-bar"></span>
									<button
										onClick={() => this.handlePasswordType()}
										type="button"
										className="sign-up__form-icon"
									>
										{this.state.passwordType === "password" ? (
											<Eye />
										) : (
											<Hide />
										)}
									</button>
								</div>
								{this.state.signupFormErrors.password ? (
									<span className="sign-up__form__content-valid">
										{this.state.signupFormErrors.password}
									</span>
								) : null}
							</div>
							<div className="sign-up__form__content-password">
								<div className="signup__form__input-content">
									<input
										onBlur={this.validateForm}
										type={this.state.confirmPasswordType}
										name="confirmPassword"
										className={`form-control sign-up__form__content-input sign-up__form__content-input--confirm-password ${
											this.state.signupFormErrors.confirmPassword
												? "sign-up__form__content-input-valid"
												: ""
										}`}
										placeholder="تاكيد كلمة السر"
										onChange={(e) => this.handleInputChange(e)}
										value={this.state.signupForm.confirmPassword}
									/>
									<span className="sign-up__form__content-bar"></span>
									<button
										onClick={() => this.handleConfirmPasswordType()}
										type="button"
										className={`sign-up__form-icon ${
											this.state.signupFormErrors.confirmPassword &&
											"sign-up__form-icon-valid"
										}`}
									>
										{this.state.confirmPasswordType === "password" ? (
											<Eye />
										) : (
											<Hide />
										)}
									</button>
								</div>
								{this.state.signupFormErrors.confirmPassword ? (
									<span className="sign-up__form__content-valid">
										{this.state.signupFormErrors.confirmPassword}
									</span>
								) : null}
							</div>
						</div>
					</div>
					<div className="form-group sign-up__form">
						<div className="sign-up__form__selection">
							<h2 className="sign-up__form__selection-title">يوم الميلاد</h2>
							<div 
								className="sign-up__form__selection-container"
								ref={(r) => this.selectorRef = r}
							>
								<div className="sign-up__form__selection-container__select">
									<div
										id="day"
										onClick={() => this.handleSelectorField("day")}
										className={`sign-up__form__selection-container__select-field 
                    						${this.state.birthDateType === "day" && "active"}`}
									>
										<span>
											{this.state.signupForm.day
												? this.state.signupForm.day
											: "اليوم"}
										</span>

										<UpArrow />
									</div>
									{this.state.birthDateType === "day" && <div
										className={`sign-up__form__selection-container__select-list`}
									>
										{days.map((day) => (
											<div
												onClick={() => this.handleSelectedList("day",day)}
												key={day}
												className="sign-up__form__selection-container__select-list-item"
											>
												<input
													type="radio"
													className="sign-up__form__selection-container__select-list-radio"
													name="day"
												/>
												<label className="sign-up__form__selection-container__select-list-label">
													{day}
												</label>
											</div>
										))}
									</div>}
								</div>

								<div className="sign-up__form__selection-container__select">
									<div
										id="month"
										onClick={() => this.handleSelectorField("month")}
										className={`sign-up__form__selection-container__select-field 
                    							${this.state.birthDateType === "month" && "active"}`}
									>
										<span>
											{this.state.signupForm.month
												? this.state.signupForm.month
												: "الشهر"}
										</span>

										<UpArrow />
									</div>
									{this.state.birthDateType === "month" && <div
										className={`sign-up__form__selection-container__select-list`}
									>
										{months.map((month) => (
											<div
												onClick={() => this.handleSelectedList("month",month)}
												key={month}
												className="sign-up__form__selection-container__select-list-item"
											>
												<input
													type="radio"
													className="sign-up__form__selection-container__select-list-radio"
													name="month"
												/>
												<label className="sign-up__form__selection-container__select-list-label">
													{month}
												</label>
											</div>
										))}
									</div>}
								</div>

								<div className="sign-up__form__selection-container__select">
									<div
										id="year"
										onClick={() => this.handleSelectorField("year")}
										className={`sign-up__form__selection-container__select-field 
                    							${this.state.birthDateType === "year" && "active"}`}
									>
										<span>
											{this.state.signupForm.year
												? this.state.signupForm.year
												: "السنة"}
										</span>

										<UpArrow />
									</div>
									{this.state.birthDateType === "year" &&<div
										className={`sign-up__form__selection-container__select-list `}
									>
										{years.map((year, ind) => (
											<div
												onClick={() => this.handleSelectedList("year",year)}
												key={year}
												className="sign-up__form__selection-container__select-list-item"
											>
												<input
													type="radio"
													className="sign-up__form__selection-container__select-list-radio"
													name="year"
												/>
												<label className="sign-up__form__selection-container__select-list-label">
													{year}
												</label>
											</div>
										))}
									</div>}
								</div>
							</div>
						</div>
					</div>
					<div className=" sign-up__form">
						<label className="sign-up__form__label">الجنس</label>

						<div className="sign-up__form__gender">
							<div className="sign-up__form__gender-box">
								<label className="sign-up__form__gender-box-checkbox">
									<input
										type="radio"
										className="sign-up__form__gender-box-checkbox-input"
									/>
									<span
										className={`sign-up__form__gender-box-checkbox-bar ${
											this.state.signupForm.gender === "ذكر"
												? "sign-up__form__gender-box-checkbox-bar-checked"
												: ""
										}`}
										onClick={(e) => this.toggleCheckedBox(e)}
										id="ذكر"
									></span>
								</label>
								<div className="sign-up__form__gender-box-title">ذكر</div>
							</div>

							<div className="sign-up__form__gender-box">
								<label className="sign-up__form__gender-box-checkbox">
									<input
										type="radio"
										className="sign-up__form__gender-box-checkbox-input"
									/>
									<span
										className={`sign-up__form__gender-box-checkbox-bar ${
											this.state.signupForm.gender === "انثى"
												? "sign-up__form__gender-box-checkbox-bar-checked"
												: ""
										}`}
										onClick={(e) => this.toggleCheckedBox(e)}
										id="انثى"
									></span>
								</label>
								<div className="sign-up__form__gender-box-title">انثى</div>
							</div>

							<div className="sign-up__form__gender-box">
								<label className="sign-up__form__gender-box-checkbox">
									<input
										type="radio"
										className="sign-up__form__gender-box-checkbox-input"
									/>
									<span
										className={`sign-up__form__gender-box-checkbox-bar ${
											this.state.signupForm.gender === "غير محدد"
												? "sign-up__form__gender-box-checkbox-bar-checked"
												: ""
										}`}
										onClick={(e) => this.toggleCheckedBox(e)}
										id="غير محدد"
									></span>
								</label>
								<div className="sign-up__form__gender-box-title">غير محدد</div>
							</div>
						</div>

						{this.state.signupFormErrors.gender &&
						!this.state.signupForm.gender ? (
							<span className="sign-up__form__content-valid">
								{this.state.signupFormErrors.gender}
							</span>
						) : null}
					</div>
				</div>
				<div className="sign-up__button-field">
					<button
						onClick={this.handleSubmitForm}
						disabled={isDisabled || this.state.disabledSubmit}
						type="submit"
						className={`btn btn-lg sign-up__button-field-btn ${
							isDisabled || this.state.disabledSubmit
								? ""
								: "sign-up__button-field-btn-enabled"
						}`}
						data-toggle="button"
						aria-pressed="false"
					>
						انضم
					</button>
				</div>
			</div>
		);
	}
}

export default Signup;
