import React, {useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import BackendServer from "../index";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {Navigate, useOutletContext} from "react-router-dom";
import LoadingPlaceHolder from "./LoadingPlaceHolder";

const SwalWithStyleButtons = Swal.mixin({
	customClass: {
		confirmButton: "my-btn my-btn-primary no-icon fs-5 font-primary fw-semibold",
	},
	buttonsStyling: false,
});
const MySwal = withReactContent(SwalWithStyleButtons);

const MakeOrder = () => {
	const [user, , , setCurrent] = useOutletContext();
	const [topPicks, setTopPicks] = useState([]);
	const [loading, setLoading] = useState(true);

	const [success, setSuccess] = useState(false);
	const [createLoading, setCreateLoading] = useState(false);

	const [messageInput, setMessageInput] = useState("");
	const [locationInput, setLocationInput] = useState("");
	const [maxOrderInput, setMaxOrderInput] = useState(3);

	const [orders, setOrders] = useState([]);
	const [orderLoading, setOrderLoading] = useState(true);

	useEffect(() => {
		const fetchOrderRecipients = async () => {
			try {
				const response = await fetch(BackendServer + "/api/order");
				const data = await response.json();

				setOrders(data.data);
			} catch (error) {
				console.log(error);
			} finally {
				setOrderLoading(false);
			}
		};
		fetchOrderRecipients().then();
		const fetchData = async () => {
			try {
				const response = await fetch(BackendServer + "/api/location");
				const data = await response.json();

				setTopPicks(data.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData().then();
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		if (messageInput === "" || locationInput === "") {
			return MySwal.fire({
				title: "แจ้งเตือน!",
				text: "กรุณากรอกข้อมูลให้ครบถ้วน",
				icon: "warning",
				confirmButtonText: "รับทราบ",
			}).then();
		}

		setCreateLoading(true);
		const createPost = async () => {
			try {
				const response = await fetch(BackendServer + "/api/order/create", {
					method: "POST", headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
						rider: user, message: messageInput,
						location: {id: locationInput}, maxOrder: maxOrderInput,
					}),
				});
				const data = await response.json();

				if (data.success) {
					MySwal.fire({
						title: "รอเพื่อนฝากซื้อของได้เลย!",
						text: "หากสำเร็จคุณจะได้คะแนนมากที่สุด " + maxOrderInput + " คะแนน!",
						icon: "success",
						confirmButtonText: "กลับสู่หน้าหลัก",
						timer: 2000,
						timerProgressBar: true,
					}).then(() => {
						setSuccess(true);
						setCreateLoading(false);
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
			} finally {
				setCreateLoading(false);
			}
		}
		createPost().then();
	};

	return (
		<div className="animate__animated animate__fadeIn animate__fast mt-2">
			{success && <Navigate to={`/`} replace={true}/>}
			{orderLoading ?
				<div className="container d-flex justify-content-center"><LoadingPlaceHolder/></div>
				:
				orders.some(order => order.rider.username === user.username) ?
					<div className="container d-flex justify-content-center">
						<div
							className="animate__animated animate__fast animate__bounceIn fs-5 my-text-secondary my-bg-salmon px-3 py-2 fw-semibold text-center">
							คุณกำลังไปซื้อของให้เพื่อนอยู่<FontAwesomeIcon className="ms-3" icon={solid("motorcycle")}/>
						</div>
					</div>
					:
					<div className="container make-order">
						<form className="input-container px-0 px-lg-5" onSubmit={handleSubmit}>
							<div className="row px-0 px-lg-5 gy-4">
								<div className="col-12">
									<div className="fs-5 mb-2 fw-semibold">ไปซื้ออะไร</div>
									<input type="text" placeholder="เช่น จะไปซื้อข้าวหมูทอด ใครอยากกินอะไรมั้ย"
									       onChange={(event) => setMessageInput(event.target.value)}/>
								</div>
								<div className="col-12">
									<div className="fs-5 mb-2 fw-semibold">ไปซื้อที่ไหน</div>
									<select defaultValue={locationInput} onChange={(event) => setLocationInput(event.target.value)}>
										{loading ?
											<option value="" disabled hidden>กำลังโหลด...</option>
											:
											<option value="" disabled hidden>กดเพื่อเลือกที่ที่จะไปซื้อ</option>
										}
										{topPicks.map((topPick) => (
											<option key={`top-pick-option-${topPick.id}`} value={topPick.id}>{topPick.name}</option>
										))}
									</select>
								</div>
								<div className="col-12">
									<div className="fs-5 mb-2 fw-semibold">จำนวนที่รับฝากซื้อมากที่สุด</div>
									<div className="d-flex gap-2">
										<button className="my-btn my-btn-salmon no-icon" type="button"
										        onClick={() => setMaxOrderInput(Math.max(1, maxOrderInput - 1))}>
											<FontAwesomeIcon icon={solid("minus")}/>
										</button>
										<input readOnly={true} value={maxOrderInput} type="number"/>
										<button className="my-btn my-btn-green no-icon d-flex align-items-center" type="button"
										        onClick={() => setMaxOrderInput(Math.min(5, maxOrderInput + 1))}>
											<FontAwesomeIcon icon={solid("plus")}/>
										</button>
									</div>
								</div>
								<div className="col-12">
									{!createLoading ?
										<button type="submit" className="fs-5 my-btn my-btn-primary btn-block fw-semibold font-primary">
											<FontAwesomeIcon className="me-3" icon={solid("paper-plane")}/>
											สร้างโพสต์เลย!
										</button>
										:
										<button type="button" className="fs-5 my-btn my-btn-primary disabled btn-block">
											<FontAwesomeIcon className="me-3" icon={solid("spinner")} spinPulse/>
											Loading
										</button>
									}
								</div>
							</div>
						</form>
					</div>
			}
		</div>
	);
};

export default MakeOrder;
