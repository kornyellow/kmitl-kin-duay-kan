import React, {Component} from "react";
import KinDuayKanLogo from "../logo.svg";

class AuthenticationNavbar extends Component {
	render() {
		return <div>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<a className="navbar-brand d-flex align-items-center gap-2" href="/">
						<img src={KinDuayKanLogo} alt="Logo"/>
						<div className="d-none d-lg-flex fw-bold fs-4 align-items-baseline gap-2">
							<div className="fs-2">Kin</div>
							<div>Duay</div>
							<div>Kan</div>
						</div>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse gap-4 text-center" id="navbarNav">
						<ul className="navbar-nav ms-auto text-center fs-5">
							<li className="nav-item">
								<a href={`/home`}>HOME</a>
							</li>
						</ul>
						<div className="my-3 my-lg-0 d-flex gap-2 justify-content-center">
							<img src={KinDuayKanLogo} alt="Profile"/>
							<a href={`/sign/in`} className="btn btn-success fs-5">Login</a>
						</div>
					</div>
				</div>
			</nav>
		</div>;
	}
}

export default AuthenticationNavbar;