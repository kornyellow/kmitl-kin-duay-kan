import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const OrdersNavbar = () => {
	const [current, setCurrent] = useState("CREATE");

	const handleChangePage = (event) => {
		const navId = event.target.getAttribute("data-nav-name");
		console.log(event);
		if (navId === current)
			return;
		const navLinks = document.querySelectorAll(".order-navbar .nav-link");
		navLinks.forEach(link => link.classList.remove("current"));
		event.target.classList.add("current");
		setCurrent(navId);
		console.log(navId);
	}

	return (
		<div className="order-navbar animate__animated animate__fast animate__fadeIn">
			<div className="d-flex justify-content-center">
				<div className="d-flex fw-semibold fs-5 my-3 p-3 my-bg-white rounded-3 shadow-sm gap-2">
					<Link className={`font-primary my-btn no-icon nav-link ${current === "CREATE" && "current"}`}
					      data-nav-name="CREATE" to={`/orders/create`} replace="true" onClick={event => handleChangePage(event)}>
						<FontAwesomeIcon className="me-3" icon={solid("motorcycle")}/>
						ไปซื้อของให้เพื่อน
					</Link>
					<Link className={`font-primary my-btn no-icon nav-link ${current === "ACTIVE" && "current"}`}
					      data-nav-name="ACTIVE" to={`/orders/active`} replace="true" onClick={event => handleChangePage(event)}>
						<FontAwesomeIcon className="me-3" icon={solid("rectangle-list")}/>
						ออเดอร์ที่กำลังไปซื้อ
					</Link>
					<Link className={`font-primary my-btn no-icon nav-link ${current === "HISTORY" && "current"}`}
					      data-nav-name="HISTORY" to={`/orders/history`} replace="true"
					      onClick={event => handleChangePage(event)}>
						<FontAwesomeIcon className="me-3" icon={solid("clock-rotate-left")}/>
						ประวัติการใช้งาน
					</Link>
				</div>
			</div>
		</div>
	);
};

export default OrdersNavbar;