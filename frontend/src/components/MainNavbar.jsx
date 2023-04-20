import React, {useEffect, useState} from "react";
import KinDuayKanLogo from "../logo.svg";
import {Link, Navigate} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {getUser} from "./Authentication";
import ProfileIcon from "./ProfileIcon";

const MainNavbar = (props) => {
	const [user, setUser] = useState(null);
	const [signOut, setSignOut] = useState(false);
	const [profileURL, setProfileURL] = useState("");
	const [current, setCurrent] = useState("HOME");

	const handleSignout = () => {
		sessionStorage.removeItem("token");
		setSignOut(true);
	}

	const handleChangePage = (event) => {
		const navId = event.target.innerHTML;
		if (navId === current)
			return;
		const navLinks = document.querySelectorAll(".nav-link");
		navLinks.forEach(link => link.classList.remove("current"));
		event.target.classList.add("current");
		setCurrent(event.target.innerHTML);
	}

	useEffect(() => {
		getUser().then((data) => {
			if (data.success) {
				setUser(data.data);
			}
		});

		setProfileURL(props.profileURL);
	}, [props.profileURL]);

	return (
		<nav className="main navbar navbar-expand-lg font-secondary text-nowrap">
			{signOut && <Navigate to={`/sign/in`} replace={true}/>}
			<div className="container animate__animated animate__fadeInDown animate__fast">
				<Link to={`/`} className="navbar-brand d-flex align-items-center gap-2">
					<img src={KinDuayKanLogo} alt="Logo"/>
					<div className="font-display d-none d-lg-flex fs-4 align-items-baseline gap-1">
						<div className="fs-2">Kin</div>
						<div>Duay</div>
						<div>Kan</div>
					</div>
				</Link>
				<button className="navbar-toggler toggler" type="button" data-bs-toggle="collapse"
				        data-bs-target="#navbarNav">
					<FontAwesomeIcon className="fa-xl" icon={solid("bars")}/>
				</button>
				<div className="collapse navbar-collapse gap-4 text-center" id="navbarNav">
					<ul className="navbar-nav ms-auto text-center gap-2 fs-5 mt-4 mt-lg-0">
						<li className="nav-item">
							<Link onClick={handleChangePage} className={`nav-link ${current === "HOME" && 'current'}`}
							      to={`/`}><span>HOME</span></Link>
						</li>
						<li className="nav-item">
							<Link onClick={handleChangePage} className={`nav-link ${current === "TOP SCORE" && 'current'}`}
							      to={`/top-score`}><span>TOP SCORE</span></Link>
						</li>
						{user != null &&
							<li className="nav-item">
								<Link onClick={handleChangePage} className={`nav-link ${current === "ORDERS" && 'current'}`}
								      to={`/orders`}><span>ORDERS</span></Link>
							</li>
						}
						{user != null &&
							<li className="nav-item">
								<Link onClick={handleChangePage} className={`nav-link ${current === "PROFILE" && 'current'}`}
								      to={`/profile`}><span>PROFILE</span></Link>
							</li>
						}
					</ul>
					<div className="my-3 my-lg-0 d-flex gap-4 justify-content-center align-items-center">
						<ProfileIcon profileURL={profileURL}/>
						{user == null &&
							<Link to={`/sign/in`} className="my-btn my-btn-green fs-5">
								<FontAwesomeIcon className="me-3" icon={solid("right-to-bracket")}/>Sign In
							</Link>
						}
						{user != null &&
							<button onClick={handleSignout} className="my-btn my-btn-salmon fs-5">
								<FontAwesomeIcon className="me-3" icon={solid("right-to-bracket")}/>Sign Out
							</button>
						}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default MainNavbar;
