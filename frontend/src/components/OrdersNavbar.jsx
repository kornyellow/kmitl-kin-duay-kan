import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const OrdersNavbar = () => {
	const [current, setCurrent] = useState("CREATE");

	const handleChangePage = (event, page) => {
		if (page === current)
			return;
		const navLinks = document.querySelectorAll(".order-navbar .nav-link");
		navLinks.forEach(link => link.classList.remove("current"));
		event.target.classList.add("current");
		setCurrent(page);
	}

	return (
		<div className="order-navbar animate__animated animate__fast animate__fadeIn">
			<div className="d-flex justify-content-center">
				<div className="d-flex flex-wrap fw-semibold fs-5 my-3 p-3 my-bg-white rounded-3 shadow-sm gap-2">
					<Link className={`font-primary my-btn no-icon nav-link ${current === "CREATE" && "current"}`}
					      to={`/orders/create`} replace="true" onClick={event => handleChangePage(event, "CREATE")}>
						<FontAwesomeIcon className="me-3" icon={solid("motorcycle")}/>
						ไปซื้อของให้เพื่อน
					</Link>
					<Link className={`font-primary my-btn no-icon nav-link ${current === "ACTIVE" && "current"}`}
					      to={`/orders/active`} replace="true" onClick={event => handleChangePage(event, "ACTIVE")}>
						<FontAwesomeIcon className="me-3" icon={solid("rectangle-list")}/>
						ออเดอร์ที่คุณกำลังไปซื้อ
					</Link>
					<Link className={`font-primary my-btn no-icon nav-link ${current === "HISTORY" && "current"}`}
					      to={`/orders/history`} replace="true" onClick={event => handleChangePage(event, "HISTORY")}>
						<FontAwesomeIcon className="me-3" icon={solid("clock-rotate-left")}/>
						ประวัติการใช้งาน
					</Link>
				</div>
			</div>
		</div>
	);
};

export default OrdersNavbar;