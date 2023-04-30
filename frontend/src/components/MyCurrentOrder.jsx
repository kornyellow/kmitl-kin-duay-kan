import React, {useEffect, useState} from "react";
import CurrentOrderCard from "./CurrentOrderCard";
import BackendServer from "../index";
import {useOutletContext} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import LoadingPlaceHolder from "./LoadingPlaceHolder";

const MyCurrentOrder = () => {
	const [user, , , setCurrent] = useOutletContext();
	const [, setOrders] = useState([]);
	const [currentOrder, setCurrentOrder] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BackendServer + "/api/order");
				const data = await response.json();

				setOrders(data.data);
				if (user != null)
					setCurrentOrder(data.data.find(order => order.rider.username === user.username));
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData().then();
	}, [user]);

	return (
		<div className="animate__animated animate__fadeIn animate__fast mt-2">
			{loading ?
				<div className="container d-flex justify-content-center"><LoadingPlaceHolder/></div>
				:
				currentOrder == null ?
					<div className="container d-flex justify-content-center">
						<div
							className="animate__animated animate__fast animate__bounceIn fs-5 my-text-secondary my-bg-salmon px-3 py-2 fw-semibold text-center">
							คุณยังไม่มีรายการที่กำลังไปฝากซื้อ<FontAwesomeIcon className="ms-3" icon={solid("motorcycle")}/>
						</div>
					</div>
					:
					<CurrentOrderCard setCurrent={setCurrent} user={user} order={currentOrder}/>
			}
		</div>
	);
};

export default MyCurrentOrder;