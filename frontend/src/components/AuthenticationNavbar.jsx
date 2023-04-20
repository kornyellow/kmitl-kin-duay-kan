import React from "react";
import KinDuayKanLogo from "../logo.svg";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const AuthenticationNavbar = () => {
	return (
		<nav
			className="authentication navbar navbar-expand-lg font-secondary text-nowrap">
			<div className="animate__animated animate__fadeInDown animate__fast container">
				<Link to={`/`} className="navbar-brand d-flex align-items-center gap-2">
					<img src={KinDuayKanLogo} alt="Logo"/>
					<div className="font-display d-flex fs-4 align-items-baseline gap-1">
						<div className="fs-2">Kin</div>
						<div>Duay</div>
						<div>Kan</div>
					</div>
				</Link>
				<button className="navbar-toggler toggler" type="button" data-bs-toggle="collapse"
				        data-bs-target="#navbarNav">
					<FontAwesomeIcon className="fa-xl" icon={solid("bars")}/>
				</button>
				<div className="collapse navbar-collapse gap-4 justify-content-end" id="navbarNav">
					<div className="my-3 my-lg-0 d-flex gap-3 justify-content-center align-items-center">
						<FontAwesomeIcon className="fs-4" icon={solid("globe")}/>
						<Link to={`/sign/up`} className="my-btn my-btn-transparent fs-5">
							<FontAwesomeIcon className="me-3" icon={solid("right-to-bracket")}/>
							Sign Up
						</Link>
						<Link to={`/`} className="my-btn my-btn-primary fs-5">
							<FontAwesomeIcon className="me-3" icon={solid("home")}/>
							Home
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default AuthenticationNavbar;