import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import BackendServer from "../index";

export const getUser = () => {
	const token = sessionStorage.getItem("token");
	if (!token)
		return Promise.resolve({success: false});

	return fetch(BackendServer + "/api/user/token", {
		method: "POST", headers: {"Content-Type": "application/json"},
		body: JSON.stringify({id: token}),
	}).then((response) => {
		return response.json();
	}).catch(() => {
		return {success: false};
	});
};

const Authentication = () => {
	const [signIn, setSignIn] = useState(null);

	useEffect(() => {
		getUser().then((data) => {
			setSignIn(data.success);
		})
	}, []);

	return (
		<div>{signIn === false && <Navigate to={`/`} replace={true}/>}</div>
	);
}

export default Authentication;