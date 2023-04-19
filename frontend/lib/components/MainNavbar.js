import {faUserSecret as _faUserSecret} from "@fortawesome/free-solid-svg-icons/faUserSecret";
import React, {Component} from "react";
import KinDuayKanLogo from "../logo.svg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class MainNavbar extends Component {
	render() {
		return <div>
			<nav className="navbar navbar-expand-lg font-secondary">
				<div className="container">
					<Link to={`/`} className="navbar-brand d-flex align-items-center gap-2">
						<img src={KinDuayKanLogo} alt="Logo"/>
						<div className="font-display d-none d-lg-flex fs-4 align-items-baseline gap-1 fw-semibold">
							<div className="fs-2">Kin</div>
							<div>Duay</div>
							<div>Kan</div>
							<FontAwesomeIcon icon={_faUserSecret}/>
						</div>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse gap-4 text-center" id="navbarNav">
						<ul className="navbar-nav ms-auto text-center gap-2 fs-5 mt-4 mt-lg-0">
							<li className="nav-item">
								<Link to={`/`} className="nav-link" aria-current="page"><span>HOME</span></Link>
							</li>
							<li className="nav-item">
								<Link to={`/`} className="nav-link"><span>TOP SCORE</span></Link>
							</li>
							<li className="nav-item">
								<Link to={`/`} className="nav-link"><span>MY ORDER</span></Link>
							</li>
							<li className="nav-item">
								<Link to={`/`} className="nav-link"><span>PROFILE</span></Link>
							</li>
						</ul>
						<div className="my-3 my-lg-0 d-flex gap-3 justify-content-center align-items-center">
							<img src={KinDuayKanLogo} alt="Profile"/>
							<Link to={`/login`} className="login-button fs-5">Login</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>;
	}
}

export default MainNavbar;