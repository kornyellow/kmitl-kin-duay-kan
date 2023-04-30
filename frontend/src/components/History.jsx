import React, {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import BackendServer from "../index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import LoadingPlaceHolder from "./LoadingPlaceHolder";

const History = () => {
	const [user] = useOutletContext();

	const [orders, setOrders] = useState([]);
	const [loadingOrder, setLoadingOrder] = useState(false);

	const [orderRecipients, setOrderRecipients] = useState([]);
	const [loadingOrderRecipient, setLoadingOrderRecipient] = useState(false);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await fetch(BackendServer + "/api/order/complete/" + user.username);
				const data = await response.json();

				setOrders(data.data);
				console.log(data.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingOrder(false);
			}
		};
		const fetchOrderRecipients = async () => {
			try {
				const response = await fetch(BackendServer + "/api/orderrecipient/complete/" + user.username);
				const data = await response.json();

				setOrderRecipients(data.data);
				console.log(data.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingOrderRecipient(false);
			}
		}
		if (user) {
			fetchOrders().then();
			fetchOrderRecipients().then();
		}
	}, [user])

	const dateOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: false,
		timeZone: "Asia/Bangkok"
	};

	return (
		<div className="animate__animated animate__fadeIn animate__fast mt-2">
			<div className="container">
				<div className="my-bg-white p-4 rounded-3 shadow-sm shadow">
					<div className="row">
						<div className="col-12 col-lg-6">
							<div className="fs-3 fw-bold mb-1">
								<FontAwesomeIcon className="fs-4 me-3" icon={solid("motorcycle")}/>
								ออเดอร์ที่คุณไปซื้อให้เพื่อน
							</div>
							<div>
								{loadingOrder ?
									<LoadingPlaceHolder/>
									:
									orders.length === 0 ?
										<div className="d-flex mt-2">
											<div
												className="animate__animated animate__fast animate__bounceIn fs-5 my-text-secondary my-bg-salmon px-3 py-2 fw-semibold text-center">
												คุณยังไม่ได้ทำรายการตอนนี้
												<FontAwesomeIcon className="ms-3" icon={solid("face-sad-tear")}/>
											</div>
										</div>
										:
										orders.map((order) => (
											<div className="border-bottom py-3" key={`order-history-${order.id}`}>
												<div className="fs-6 my-text-grey">
													คุณได้ไปซื้อของให้เพื่อนทั้งหมด {order.orderCount} คน
												</div>
												<div className="d-flex align-items-center gap-2">
													<div className="fs-5 fw-semibold">{order.message} @</div>
													<div
														className="my-badge my-bg-primary my-text-black text-truncate">#{order.location.name}</div>
												</div>
												<div className="mt-1">
													<small className="my-text-grey">
														{new Date(order.dateTime).toLocaleDateString("th-TH", dateOptions)}
													</small>
												</div>
											</div>
										))
								}
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="fs-3 fw-bold mb-1">
								<FontAwesomeIcon className="fs-4 me-3" icon={solid("boxes-stacked")}/>
								ออเดอร์ที่คุณฝากเพื่อนซื้อ
							</div>
							<div>
								{loadingOrderRecipient ?
									<LoadingPlaceHolder/>
									:
									orderRecipients.length === 0 ?
										<div className="d-flex mt-2">
											<div
												className="animate__animated animate__fast animate__bounceIn fs-5 my-text-secondary my-bg-salmon px-3 py-2 fw-semibold text-center">
												คุณยังไม่ได้ทำรายการตอนนี้
												<FontAwesomeIcon className="ms-3" icon={solid("face-sad-tear")}/>
											</div>
										</div>
										:
										orderRecipients.map((orderRecipient) => (
											<div className="border-bottom py-3" key={`order-recipient-history-${orderRecipient.id}`}>
												<div className="fs-6 my-text-grey">
													คุณได้ฝาก <span
													className="fw-semibold">{orderRecipient.order.rider.nickname} "{orderRecipient.order.message}"</span> ซื้อ
												</div>
												<div className="d-flex align-items-center gap-2">
													<div
														className="fs-5 fw-semibold">{orderRecipient.message === "" ? "เหมือนกับคนฝาก!" : orderRecipient.message} @
													</div>
													<div
														className="my-badge my-bg-primary my-text-black text-truncate">#{orderRecipient.order.location.name}</div>
												</div>
												<div className="mt-1">
													<small className="my-text-grey">
														{new Date(orderRecipient.order.dateTime).toLocaleDateString("th-TH", dateOptions)}
													</small>
												</div>
											</div>
										))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default History;
