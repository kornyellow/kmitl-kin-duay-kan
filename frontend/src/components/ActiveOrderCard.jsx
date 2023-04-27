import React, {useEffect, useState} from "react";
import OrderCarousel from "./OrderCarousel";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import ProfileIcon from "./ProfileIcon";
import {OrderModel} from "../Models";
import BackendServer from "../index";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SwalWithStyleButtons = Swal.mixin({
	customClass: {
		confirmButton: "my-btn my-btn-primary no-icon fs-5 font-primary fw-semibold",
	},
	buttonsStyling: false,
});
const MySwal = withReactContent(SwalWithStyleButtons);

const ActiveOrderCard = (props) => {
	const user = props.user;
	const modalId = `order-modal-${props.order.id}`;

	const [orderRecipients, setOrderRecipients] = useState([]);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		reloadCarousel();
	}, [user]);

	const createOrder = async (theMessage) => {
		setSuccess(true);
		try {
			const response = await fetch(BackendServer + "/api/orderRecipient/create", {
				method: "POST", headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					recipient: user, message: theMessage, order: props.order,
				}),
			});
			const data = await response.json();

			if (data.success) {
				MySwal.fire({
					title: "ฝากเพื่อนซื้อสำเร็จ!",
					text: "รอกินของที่คุณสั่งได้เลย~!",
					icon: "success",
					confirmButtonText: "รับทราบ",
					timer: 2000,
					timerProgressBar: true,
				}).then(() => {
					reloadCarousel();
				});
			} else {
				MySwal.fire({
					title: "เกิดข้อผิดพลาด!",
					text: data.message,
					icon: "error",
					confirmButtonText: "รับทราบ",
				}).then();
			}
		} catch (error) {
			MySwal.fire({
				title: "เกิดข้อผิดพลาด!",
				text: error,
				icon: "error",
				confirmButtonText: "รับทราบ",
			}).then();
		}
	}

	const reloadCarousel = () => {
		setLoading(true);
		const fetchOrderRecipients = async () => {
			try {
				const response = await fetch(BackendServer + "/api/orderrecipient/" + props.order.id);
				const data = await response.json();

				setOrderRecipients(data.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchOrderRecipients().then();
	}

	const handleOrder = () => {
		createOrder().then();
	};
	const handleOrderOther = () => {
		createOrder(message).then();
	};

	return (
		<div className="col-12 col-md-6 col-lg-4">
			<div className="order-card animate__animated animate__fast animate__fadeIn">
				<button type="button" className="clickable p-4 w-100 shadow-sm" data-bs-toggle="modal"
				        data-bs-target={`#${modalId}`}>
					<ProfileIcon onUserChange={props.order.rider}/>
					<div className="fs-5 fw-bold">{props.order.rider.nickname}</div>
					<div className="fw-light mb-2 my-text-grey text-truncate">
						"{props.order.rider?.aliasname === "" ? "ยังไม่มีฉายา" : props.order.rider.aliasname}"
					</div>
					<div className="mb-3 text-truncate">{props.order.message}</div>
					<div className="d-flex justify-content-between">
						<div className="my-badge my-bg-primary my-text-black">#{props.order.location.name}</div>
						{!loading ?
							<div
								className={`d-flex align-items-center ${orderRecipients.length === props.order.maxOrder ? "my-text-salmon" : ""}`}>
								<div className="fw-semibold fs-5">{orderRecipients.length}/{props.order.maxOrder}</div>
								<FontAwesomeIcon className="fs-4 ms-3" icon={solid("truck-fast")}/>
							</div>
							:
							<div className="d-flex align-items-center">
								<div className="fw-semibold fs-5">?/?</div>
								<FontAwesomeIcon className="fs-4 ms-3" icon={solid("truck-fast")}/>
							</div>
						}
					</div>
				</button>
			</div>
			<div className="modal fade" id={modalId}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-order-card modal-content">
						<div className="modal-body p-0">
							<div className="d-flex justify-content-end m-3">
								<button className="my-btn my-btn-primary no-icon d-flex align-items-center justify-content-end"
								        type="button" data-bs-dismiss="modal">
									<FontAwesomeIcon className="fs-4 fa-fw" icon={solid("x")}/>
								</button>
							</div>
							<div className="modal-data d-flex flex-column align-items-center px-3 py-3">
								<ProfileIcon onUserChange={props.order.rider}/>
								<div className="w-100 mt-4 mb-3 mt-sm-0 mb-sm-0 d-flex justify-content-between flex-wrap gap-2">
									<div className="my-badge my-bg-primary my-text-black text-truncate">#{props.order.location.name}</div>
									{!loading ?
										<div
											className={`d-flex align-items-center ${orderRecipients.length === props.order.maxOrder ? "my-text-salmon" : ""}`}>
											<div className="fw-semibold fs-5">{orderRecipients.length}/{props.order.maxOrder}</div>
											<FontAwesomeIcon className="fs-4 ms-3" icon={solid("truck-fast")}/>
										</div>
										:
										<div className="d-flex align-items-center">
											<div className="fw-semibold fs-5">?/?</div>
											<FontAwesomeIcon className="fs-4 ms-3" icon={solid("truck-fast")}/>
										</div>
									}
								</div>
								<div className="fs-5 fw-bold">{props.order.rider.nickname}</div>
								<div className="w-100 text-truncate text-center fw-light mb-2 my-text-grey">
									"{props.order.rider?.aliasname === "" ? "ยังไม่มีฉายา" : props.order.rider.aliasname}"
								</div>
								<div className="w-100 text-truncate text-center">{props.order.message}</div>
								<OrderCarousel loading={loading} orderRecipients={orderRecipients}
								               id={`order-carousel-card-${props.order.id}`}/>
								{success || orderRecipients.some((order) => order.recipient.username === user.username) ?
									<div className="w-100 fs-5 mb-2 py-3 rounded-3 fw-semibold text-center my-bg-light-grey my-text-grey">
										<FontAwesomeIcon className="me-3" icon={solid("check-circle")}/>
										คุณได้ฝากเพื่อนคนนี้ซื้อแล้ว รอของมาส่งได้เลย!
									</div>
									:
									orderRecipients.length === props.order.maxOrder ?
										<div className="w-100 fs-5 mb-2 py-3 rounded-3 fw-semibold text-center my-bg-light-grey">
											<FontAwesomeIcon className="me-3 my-text-grey" icon={solid("info-circle")}/>
											ออเดอร์เต็มแล้ว รอครั้งหน้านะ!
										</div>
										:
										user ?
											user.username !== props.order.rider.username ?
												<div>
													<div className="w-100">
														<button onClick={handleOrder}
														        className="fw-semibold text-truncate my-btn my-btn-green btn-block no-icon font-primary fs-5">
															<FontAwesomeIcon className="me-2" icon={solid("hand-point-up")}/>+1
															<span className="ms-3">เอาเหมือนกันเลย</span>
														</button>
													</div>
													<hr className="divider"/>
													<div className="input-container d-flex w-100 gap-2">
														<input className="input-form w-50" type="text" placeholder="ฝากซื้ออย่างอื่น..."
														       value={message} onChange={(event) => setMessage(event.target.value)}/>
														<button onClick={handleOrderOther}
														        className="fw-semibold text-truncate flex-fill my-btn my-btn-primary no-icon font-primary fs-5">
															<FontAwesomeIcon className="me-3" icon={solid("paper-plane")}/>
															<span>ขอเป็นอันนี้ละกัน</span>
														</button>
													</div>
												</div>
												:
												<div></div>
											:
											<div className="w-100 fs-5 mb-2 py-3 rounded-3 fw-semibold text-center my-bg-light-grey">
												<FontAwesomeIcon className="me-3 my-text-grey" icon={solid("info-circle")}/>
												กรุณาเข้าสู่ระบบก่อนฝากเพื่อนซื้อข้าว!
											</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

ActiveOrderCard.propTypes = {
	order: OrderModel,
};

export default ActiveOrderCard;
