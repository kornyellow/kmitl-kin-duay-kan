import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {fetchUser} from "../routes/authentication/AuthenticationRoot";

const Authentication = () => {
	const [signIn, setSignIn] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchUser();
				setSignIn(data.success)
			} catch (error) {
				console.log(error);
				setSignIn(false);
			}
		};
		fetchData().then();
	});

	return (
		<div>{signIn === false && <Navigate to={`/`} replace={true}/>}</div>
	);
}

export default Authentication;