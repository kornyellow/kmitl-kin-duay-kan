import React, {useState} from "react";

import MainNavbar from "../../components/MainNavbar";
import {Outlet} from "react-router-dom";

const MainRoot = () => {
	const [profileURL, setProfileURL] = useState("");
	return (
		<div>
			<MainNavbar profileURL={profileURL}/>
			<Outlet context={[profileURL, setProfileURL]}/>
		</div>
	);
}

export default MainRoot;