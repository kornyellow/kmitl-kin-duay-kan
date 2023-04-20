import React, {useState} from "react";

import MainNavbar from "../../components/MainNavbar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";

const MainRoot = () => {
	const [profileURL, setProfileURL] = useState("");
	return (
		<div className="vh-100 d-flex flex-column">
			<MainNavbar className="flex-shrink-0" profileURL={profileURL}/>
			<main className="flex-fill">
				<Outlet context={[profileURL, setProfileURL]}/>
			</main>
			<Footer className="flex-shrink-0"/>
		</div>
	);
}

export default MainRoot;