import React, {useState} from "react";
import KinDuayKanLogo from "../logo.svg";
import {Link, Navigate} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import ProfileIcon from "./ProfileIcon";
import {UserModel} from "../Models";
import {fetchSignOut} from "../routes/authentication/AuthenticationRoot";

const MainNavbar = (props) => {
	const user = props.onUserChange;
	const loading = props.loading;
	const [current, handleChangePage] = props.onCurrentChange;
	const [signOut, setSignOut] = useState(false);

	const handleSignout = () => {
		fetchSignOut().then(() => {
			sessionStorage.removeItem("token");
			setSignOut(true);
		});
	}

	return (
		<nav className="main navbar navbar-expand-lg font-secondary text-nowrap">
			{signOut && <Navigate to={`/sign/in`} replace={true}/>}
			<div className={`container ${!loading && "show"}`}>
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
							      data-link-id="HOME" to={`/`}>HOME</Link>
						</li>
						<li className="nav-item">
							<Link onClick={handleChangePage} className={`nav-link ${current === "TOP SCORE" && 'current'}`}
							      data-link-id="TOP SCORE" to={`/top-score`}>TOP SCORE</Link>
						</li>
						{user != null &&
							<li className="nav-item">
								<Link onClick={handleChangePage} className={`nav-link ${current === "ORDERS" && 'current'}`}
								      data-link-id="ORDERS" to={`/orders`}>ORDERS</Link>
							</li>
						}
						{user != null &&
							<li className="nav-item">
								<Link onClick={handleChangePage} className={`nav-link ${current === "PROFILE" && 'current'}`}
								      data-link-id="PROFILE" to={`/profile`}>PROFILE</Link>
							</li>
						}
					</ul>
					<div className="my-3 my-lg-0 d-flex gap-4 justify-content-center align-items-center">
						<ProfileIcon onUserChange={user}/>
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

MainNavbar.propTypes = {
	user: UserModel,
};

export default MainNavbar;
