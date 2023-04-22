import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BackendServer from "../../index";
import {fetchSignOut} from "./AuthenticationRoot";

const SwalWithStyleButtons = Swal.mixin({
	customClass: {
		confirmButton: "my-btn my-btn-primary no-icon fs-5 font-primary fw-semibold",
	},
	buttonsStyling: false,
});
const MySwal = withReactContent(SwalWithStyleButtons);

const SignIn = () => {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const username = formData.get("username");
		const password = formData.get("password");

		if (username === "" || password === "") {
			return MySwal.fire({
				title: "แจ้งเตือน!",
				text: "กรุณากรอกข้อมูลให้ครบถ้วน",
				icon: "warning",
				confirmButtonText: "รับทราบ",
			}).then();
		}

		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(BackendServer + "/api/user/signin", {
					method: "POST", headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
						username: username, password: password,
					}),
				});
				const data = await response.json();

				if (data.success) {
					MySwal.fire({
						title: "ยินดีด้วยยยย!",
						text: "เข้าสู่ระบบสำเร็จ",
						icon: "success",
						confirmButtonText: "กลับสู่หน้าหลัก",
						timer: 2000,
						timerProgressBar: true,
					}).then(() => {
						fetchSignOut().then(() => {
							sessionStorage.setItem("token", data.data.id);
							setSuccess(true);
							setLoading(false);
						});
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
					text: "เกมตัวตึงบุกทำลายเว็บไซต์ของเรา ทำให้เว็บไซต์ไม่สามารถใช้งานได้ชั่วคราว ขออภัยด้วยครับ",
					icon: "error",
					confirmButtonText: "รับทราบ",
				}).then();
			} finally {
				setLoading(false);
			}
		};
		fetchData().then();
	};

	return (
		<form onSubmit={handleSubmit}>
			{success && <Navigate to={`/`} replace={true}/>}
			<div
				className="animate__animated animate__fadeIn animate__fast authentication-container d-flex align-items-center flex-column">
				<div className="card mb-3">
					<div className="card-body p-5 text-center">
						<h1 className="fw-bold display-4">Sign In</h1>
						<p className="fs-5 mb-5">กรอกข้อมูลของคุณ เพื่อมากินอาหารด้วยกันนน!</p>
						<div className="input-container d-flex flex-column gap-3 mb-3">
							<input placeholder="Username / Student ID" name="username" type="text" autoComplete="username"
							       autoFocus={true}/>
							<input placeholder="Password" name="password" type="password" autoComplete="current-password"/>
						</div>
						{!loading ?
							<button type="submit" className="my-btn my-btn-primary fs-4 btn-block">
								<FontAwesomeIcon className="me-3" icon={solid("right-to-bracket")}/>Sign In
							</button>
							:
							<button type="button" className="my-btn my-btn-primary disabled fs-4 btn-block">
								<FontAwesomeIcon className="me-3" icon={solid("spinner")} spinPulse/>Loading
							</button>
						}
						<p className="fs-5 mt-4">ยังไม่เป็นลูกสมุนของเกมตัวตึงอีกหรอ?
							<Link to={`/sign/up`} className="ms-3 my-btn fs-5 fw-bold text-nowrap">
								Sign Up
							</Link>
						</p>
					</div>
				</div>
				<div>© 2023 Copyright เกมตัวตึง.com | Privacy Policy</div>
			</div>
		</form>
	);
}

export default SignIn;