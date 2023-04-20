import React from "react";
import Authentication from "../../components/Authentication";
import ActiveOrders from "../../components/ActiveOrders";

const Orders = () => {
	return (
		<div>
			<Authentication/>
			<ActiveOrders/>
		</div>
	);
}

export default Orders;