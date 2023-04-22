import React from "react";

import {Outlet} from "react-router-dom";
import AuthenticationNavbar from "../../components/AuthenticationNavbar";
import BackendServer from "../../index";

export const fetchSignOut = async () => {
	try {
		const token = sessionStorage.getItem("token");
		if (!token)
			return;
		const response = await fetch(BackendServer + "/api/user/signout", {
			method: "POST", headers: {"Content-Type": "application/json"},
			body: JSON.stringify({id: token}),
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export const fetchUser = async () => {
	try {
		const token = sessionStorage.getItem("token");
		const response = await fetch(BackendServer + "/api/user/token", {
			method: "POST", headers: {"Content-Type": "application/json"},
			body: JSON.stringify({id: token}),
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const editUser = async (user) => {
	try {
		user.password = sessionStorage.getItem("token");
		const response = await fetch(BackendServer + "/api/user/edit", {
			method: "POST", headers: {"Content-Type": "application/json"},
			body: JSON.stringify(user),
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

const AuthenticationRoot = () => {
	return (
		<div>
			<AuthenticationNavbar/>
			<Outlet/>
		</div>
	);
}

export default AuthenticationRoot;