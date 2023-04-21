import React from "react";
import Authentication from "../../components/Authentication";

import OrderNavbar from "../../components/OrderNavbar";
import ActiveOrderCard from "../../components/ActiveOrderCard";


const Orders = () => {
	return (
		<div>
			<Authentication/>
			<ActiveOrderCard/>
	
			
		</div>
	);
}

export default Orders;