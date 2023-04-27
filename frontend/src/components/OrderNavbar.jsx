import React, {useState} from "react";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const OrderNavbar = () => {
	const [current, setCurrent] = useState("HOME");

	const handleChangePage = (event) => {
		const navId = event.target.innerHTML;
		if (navId === current)
			return;
		const navLinks = document.querySelectorAll(".nav-link");
		navLinks.forEach(link => link.classList.remove("current"));
		event.target.classList.add("current");
		setCurrent(event.target.innerHTML);
	}

	return (
		<nav className="main navbar navbar-expand-lg font-secondary text-nowrap">
			<button className="navbar-toggler toggler" type="button" data-bs-toggle="collapse"
			        data-bs-target="#navbarNav">
				<FontAwesomeIcon className="fa-xl" icon={solid("bars")}/>
			</button>
			<div className="collapse navbar-collapse gap-4 text-center" id="navbarNav">
				<ul className="navbar-nav ms-auto text-center gap-2 fs-5 mt-4 mt-lg-0">

					<li className="nav-item">
						<Link onClick={handleChangePage} className={`nav-link ${current === "MAKE ORDER" && 'current'}`}
						      to={`/top-score`}><span>MAKE ORDER</span></Link>
					</li>
					{user != null &&
						<li className="nav-item">
							<Link onClick={handleChangePage} className={`nav-link ${current === "ACTIVE ORDER" && 'current'}`}
							      to={`/orders`}><span>ACTIVE ORDER</span></Link>
						</li>
					}
					{user != null &&
						<li className="nav-item">
							<Link onClick={handleChangePage} className={`nav-link ${current === "HISTORY" && 'current'}`}
							      to={`/profile`}><span>HISTORY</span></Link>
						</li>
					}
				</ul>

			</div>

		</nav>
	);
}
export default OrderNavbar;
