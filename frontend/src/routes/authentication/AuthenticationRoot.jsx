import React from "react";

import {Outlet} from "react-router-dom";
import AuthenticationNavbar from "../../components/AuthenticationNavbar";

const AuthenticationRoot = () => {
	return (
		<div>
			<AuthenticationNavbar/>
			<Outlet/>
		</div>
	);
}

export default AuthenticationRoot;