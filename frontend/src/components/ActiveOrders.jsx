import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import BackendServer from "../index";
import OrderCard from "./OrderCard";
import LoadingPlaceHolder from "./LoadingPlaceHolder";

const ActiveOrders = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BackendServer + "/api/order");
				const json = await response.json();
				setLoading(false);
				setOrders(json.data);
			} catch (error) {
				setLoading(false);
			}
		};
		fetchData().then();
	}, []);

	return (
		<div className="orders">
			<div className="container pb-5">
				<h2 className="animate__animated animate__fast animate__fadeIn fw-semibold mb-4 display-6">
					<FontAwesomeIcon className="me-4" icon={solid("motorcycle")}/>
					ใครกำลังไปซื้อข้าวตอนนี้?
				</h2>
				<div className="row g-4">
					{loading &&
						<LoadingPlaceHolder/>
					}
					{orders.map((order) => (
						<OrderCard key={order.id} order={order}/>
					))}
					{!loading && orders.length === 0 &&
						<div className="d-flex">
							<div
								className="animate__animated animate__fast animate__bounceIn fs-5 my-text-black my-bg-light-grey px-3 py-2 fw-semibold text-center">
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
