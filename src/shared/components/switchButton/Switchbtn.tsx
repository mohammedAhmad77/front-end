import React,{Component} from "react";


interface SwitchState {
	switchType:string;
}

class SwitchAuth extends Component<any,SwitchState>  {
	constructor(props:any){
		super(props);
		this.state = {
		switchType:"Login",
		}
	}
	//  handleLogin = (loginSwitch: any, e: any) => {
	// 	loginSwitch("Login");
	// 	const btnElements = e.target.parentNode.childNodes;
	// 	btnElements.forEach((btn: any) => {
	// 		btn.classList.remove("active");
	// 	});
	// 	e.target.classList.add("active");
	// };
	
	//  handleSignup = (signupSwitch: any, e: any) => {
	// 	signupSwitch("Signup");
	// 	const btnElements = e.target.parentNode.childNodes;
	// 	btnElements.forEach((btn: any) => {
	// 		btn.classList.remove("active");
	// 	});
	// 	e.target.classList.add("active");
	// };

	handleSwitch = (type:string) => {
		const {handleSwitch} = this.props;
		handleSwitch(type);
		this.setState({switchType:type});
	}

	render(){
		return (
			<div
				className=" w btn-group switch-controller"
				role="group"
				aria-label="Basic example"
			>
				<button
					onClick={() => this.handleSwitch("Login")}
					type="button"
					className={`btn switch-controller__btn--login switch-controller__btn ${this.state.switchType === "Login" && "active"}`}
				>
					دخول
				</button>
				<button
					onClick={() => this.handleSwitch("Signup")}
					type="button"
					className={`btn switch-controller__btn--signup switch-controller__btn ${this.state.switchType === "Signup" && "active"}`}
				>
					انضم لنا
				</button>
			</div>
		);
	}
	
};

export default SwitchAuth;
