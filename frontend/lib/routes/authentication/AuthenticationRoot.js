import React, {Component} from "react";
import {Outlet} from "react-router-dom";
import AuthenticationNavbar from "../../components/AuthenticationNavbar";

class AuthenticationRoot extends Component {
	render() {
		return <div>
			<AuthenticationNavbar/>
			<Outlet/>
		</div>;
	}
}

export default AuthenticationRoot;