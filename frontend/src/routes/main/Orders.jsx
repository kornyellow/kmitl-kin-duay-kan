import React from "react";
import Authentication from "../../components/Authentication";
import {Outlet, useOutletContext} from "react-router-dom";
import OrdersNavbar from "../../components/OrdersNavbar";

const Orders = () => {
	const [user, setUser, handlePageChange, setCurrent] = useOutletContext();

	return (
		<div>
			<Authentication/>
			<OrdersNavbar/>
			<Outlet context={[user, setUser, handlePageChange, setCurrent]}/>
		</div>
	);
}

export default Orders;