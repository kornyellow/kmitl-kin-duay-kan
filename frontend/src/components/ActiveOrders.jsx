import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import BackendServer from "../index";
import ActiveOrderCard from "./ActiveOrderCard";
import LoadingPlaceHolder from "./LoadingPlaceHolder";

const ActiveOrders = (props) => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const user = props.user;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BackendServer + "/api/order");
				const data = await response.json();

				setOrders(data.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData().then();
	}, [user]);

	return (
		<div className="orders">
			<div className="container pb-5 pt-3">
				<h2 className="animate__animated animate__fast animate__fadeIn fw-semibold mb-3 display-6">
					<FontAwesomeIcon className="me-4 my-text-salmon" icon={solid("location-dot")}/>
					ใครกำลังไปซื้อข้าวตอนนี้
				</h2>
				<div className="row g-4">
					{loading &&
						<LoadingPlaceHolder/>
					}
					{orders.map((order) => (
						<ActiveOrderCard key={`active-order-${order.id}`} order={order} user={user}/>
					))}
					{!loading && orders.length === 0 &&
						<div className="d-flex">
							<div
								className="animate__animated animate__fast animate__bounceIn fs-5 my-text-secondary my-bg-salmon px-3 py-2 fw-semibold text-center">
								ยังไม่มีใครไปซื้อข้าวตอนนี้
								<FontAwesomeIcon className="ms-3" icon={solid("face-sad-tear")}/>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default ActiveOrders;