import React, {useEffect, useState} from "react";

import MainNavbar from "../../components/MainNavbar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";
import {fetchUser} from "../authentication/AuthenticationRoot";

const MainRoot = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [current, setCurrent] = useState("HOME");

	const handleChangePage = (event) => {
		const navId = event.target.getAttribute("data-link-id");
		if (navId === current)
			return;
		const navLinks = document.querySelectorAll(".navbar.main .nav-link");
		navLinks.forEach(link => link.classList.remove("current"));
		event.target.classList.add("current");
		setCurrent(navId);
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchUser();
				if (data.success) {
					setUser(data.data);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		fetchData().then();
	}, []);

	return (
		<div className="vh-100 d-flex flex-column">
			<MainNavbar className="flex-shrink-0" onCurrentChange={[current, handleChangePage]} onUserChange={user}
			            loading={loading}/>
			<main className="flex-fill">
				<Outlet context={[user, setUser, handleChangePage]}/>
			</main>
			<Footer className="flex-shrink-0"/>
		</div>
	);
}

export default MainRoot;