import React from "react";
import Authentication from "../../components/Authentication";
import {Outlet} from "react-router-dom";
import OrdersNavbar from "../../components/OrdersNavbar";

const Orders = () => {
	return (
		<div>
			<Authentication/>
			<OrdersNavbar/>
			<Outlet/>
		</div>
	);
}

export default Orders;