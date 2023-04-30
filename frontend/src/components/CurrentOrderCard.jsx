import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BackendServer from "../index";
import OrderCarousel from "./OrderCarousel";
import {Navigate} from "react-router-dom";

const SwalWithStyleButtons = Swal.mixin({
	customClass: {
		confirmButton: "my-btn my-btn-primary no-icon fs-5 font-primary fw-semibold",
	},
	buttonsStyling: false,
});
const MySwal = withReactContent(SwalWithStyleButtons);

const CurrentOrderCard = (props) => {
	const user = props.user;
	const setCurrent = props.setCurrent;

	const [orderRecipients, setOrderRecipients] = useState([]);
	const [loading, setLoading] = useState(false);
	const [complete, setComplete] = useState(false);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		reloadCarousel();
	}, [user]);

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

	const handleComplete = () => {
		setComplete(true);
		setTimeout(() => {
			const setCompleteOrder = async () => {
				try {
					const response = await fetch(BackendServer + "/api/order/complete", {
						method: "POST", headers: {"Content-Type": "application/json"},
						body: JSON.stringify({
							rider: user, id: props.order.id,
						}),
					});
					const data = await response.json();

					if (data.success) {
						MySwal.fire({
							title: "ทำออเดอร์สำเร็จ!!!",
							text: "คุณได้คะแนน " + orderRecipients.length + " คะแนน!",
							icon: "success",
							confirmButtonText: "กลับสู่หน้าหลัก",
							timer: 2000,
							timerProgressBar: true,
						}).then(() => {
							setSuccess(true);
							setCurrent("HOME");
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
			setCompleteOrder().then();
		}, 2000);
	}

	return (
		<div className="container">
			{success && <Navigate to={`/`} replace={true}/>}
			{complete ?
				<div className="animate__animated animate__flipInX animate__fast">
					<div
						className="animate__animated animate__flipOutX animate__fast animate__delay-2s my-bg-green my-text-secondary py-5 display-4 rounded-3 shadow-sm shadow fw-bold text-center">
						<div className="animate__delay-1s animate__animated animate__rubberBand">
							<FontAwesomeIcon className="me-3" icon={solid("check-circle")}/>
							Order Complete!
						</div>
						<div className="fw-semibold fs-4 mt-3">
							ขอบคุณที่ซื้อข้าวให้คนในชุมชนของพวกเรา :)
						</div>
					</div>
				</div>
				:
				<div className="animate__animated animate__fast animate__fadeIn my-bg-white p-4 rounded-3 shadow-sm shadow">
					<div className="d-flex flex-wrap gap-2 justify-content-between">
						<div className="w-100">
							<div className="fs-3 fw-bold mb-3">
								<FontAwesomeIcon className="fs-4 me-3" icon={solid("list")}/>
								ออเดอร์ที่คุณกำลังไปซื้อให้เพื่อน!
							</div>
							<div className="mb-3 text-truncate">{props.order?.message}</div>
							<div className="d-flex justify-content-between">
								<div className="my-badge my-bg-primary my-text-black">#{props.order?.location.name}</div>
								{!loading ?
									<div
										className={`d-flex align-items-center ${orderRecipients?.length === props.order?.maxOrder ? "my-text-salmon" : ""}`}>
										<div className="fw-semibold fs-5">{orderRecipients?.length}/{props.order?.maxOrder}</div>
										<FontAwesomeIcon className="fs-4 ms-3" icon={solid("truck-fast")}/>
									</div>
									:
									<div className="d-flex align-items-center">
										<div className="fw-semibold fs-5">?/?</div>
										<FontAwesomeIcon className="fs-4 ms-3" icon={solid("truck-fast")}/>
									</div>
								}
							</div>
						</div>
						<div className="w-100">
							<OrderCarousel loading={loading} orderRecipients={orderRecipients}
							               id={`order-carousel-card-${props.order.id}`}/>
						</div>
					</div>
					<button type="button" onClick={handleComplete}
					        className="my-btn my-btn-green font-primary fs-4 fw-semibold btn-block">
						<FontAwesomeIcon className="me-3" icon={solid("check-circle")}/>
						ปิดออเดอร์ / หยุดรับฝาก
					</button>
				</div>
			}
		</div>
	);
}

export default CurrentOrderCard;
