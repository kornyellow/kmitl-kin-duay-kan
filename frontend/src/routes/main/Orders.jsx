import React from "react";
import Authentication from "../../components/Authentication";
import {Outlet, useOutletContext} from "react-router-dom";
import OrdersNavbar from "../../components/OrdersNavbar";

const Orders = () => {
	const [user, setUser] = useOutletContext();

	return (
		<div>
			<Authentication/>
			<OrdersNavbar/>
			<Outlet context={[user, setUser]}/>
		</div>
	);
}

export default Orders;