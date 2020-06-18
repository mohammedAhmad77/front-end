import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import AuthenticationPage from "./pages/authentication/Authentication";
import { PageRoutes } from "./enums/index";

const pageRoutes = (props: any) => {
	return (
		<Router>
			<Switch>
				<Route
					path={PageRoutes.INDEX}
					render={() =>
						<AuthenticationPage />
					}
					exact
				/>
			</Switch>
		</Router>
	);
};

export default pageRoutes;
