import React, {Component} from "react";
import MainNavbar from "../../components/MainNavbar";
import {Outlet} from "react-router-dom";

class MainRoot extends Component {
	render() {
		return <div>
			<MainNavbar/>
			<Outlet/>
		</div>;
	}
}

export default MainRoot;