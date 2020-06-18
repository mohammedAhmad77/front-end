import * as React from "react";
import { Component } from "react";
import Login from "../../components/auth/login/Login";
import Signup from "../../components/auth/signup/Signup";
import Switchbtn from "../../shared/components/switchButton/Switchbtn";


interface AuthState {
	authController: string;
	passwordType: string;
	forgetPassword: boolean;
}

class AuthenticationPage extends Component<any, AuthState> {
	constructor(props: any) {
		super(props);
		this.state = {
			authController: "Login",
			passwordType: "password",
			forgetPassword: false,
		};
	}

	handleSwitchChange = (switchControl: string): void => {
		this.setState({
			authController: switchControl,
		});
	};

	checkForgotPassword = (page: boolean): void => {
		this.setState({
			forgetPassword: page,
		});
	};

	handleUIChange = (): React.ComponentState => {
		if (this.state.authController === "Login") {
			return (
				<Login
					proState={this.state}
				/>
			);
		} else {
			return <Signup proState={this.state} />;
		}
	};

	render() {
		return (
			<div className="welcome-page">
				<div className="welcome-page__auth-box">
					<div className="welcome-page__form">
						<div className="welcome-page__form-switch">
							<Switchbtn handleSwitch={this.handleSwitchChange} />
						</div>

						{this.handleUIChange()}
					</div>
					<div className="welcome-page__image-container">
						<img
							className="welcome-page__image-container__image"
							src="/assets/images/awraq.jpeg"
							alt="awraq-illustration"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default AuthenticationPage;
