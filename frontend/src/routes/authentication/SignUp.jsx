import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BackendServer from "../../index";

const MySwal = withReactContent(Swal)

const SignUp = () => {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const username = formData.get("username");
		const nickname = formData.get("nickname");
		const password = formData.get("password");
		const passwordConfirm = formData.get("passwordConfirm");

		if (username === "" || nickname === "" || password === "" || passwordConfirm === "") {
			return MySwal.fire({
				title: "แจ้งเตือน!",
				text: "กรุณากรอกข้อมูลให้ครบถ้วนเพื่อการเป็นลูกสมุนเกมตัวตึง",
				icon: "warning",
				confirmButtonText: "รับทราบ",
			}).then();
		}

		if (password.length < 8) {
			return MySwal.fire({
				title: "แจ้งเตือน!",
				text: "กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัว",
				icon: "warning",
				confirmButtonText: "รับทราบ",
			}).then();
		}

		if (password !== passwordConfirm) {
			return MySwal.fire({
				title: "แจ้งเตือน!",
				text: "กรุณากรอกรหัสผ่านให้ตรงกัน",
				icon: "warning",
				confirmButtonText: "รับทราบ",
			}).then();
		}

		setLoading(true);
		fetch(BackendServer + "/api/user/signup", {
			method: "POST", headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				username: username, nickname: nickname, password: password, passwordConfirm: passwordConfirm,
			}),
		}).then((response) => {
			response.json().then(data => {
				if (data.success) {
					return MySwal.fire({
						title: "ยินดีด้วยยยย!",
						text: "คุณเป็นลูกสมุนของเกมตัวตึงเรียบร้อยแล้ว!",
						icon: "success",
						confirmButtonText: "ยะฮู้วววววว!",
						timer: 2000,
						timerProgressBar: true,
					}).then(() => {
						setSuccess(true);
					});
				}
				MySwal.fire({
					title: "เกิดข้อผิดพลาด!",
					text: data.message,
					icon: "error",
					confirmButtonText: "รับทราบ",
				}).then();
			});
		}).catch(() => {
			MySwal.fire({
				title: "เกิดข้อผิดพลาด!",
				text: "เกมตัวตึงบุกทำลายเว็บไซต์ของเรา ทำให้เว็บไซต์ไม่สามารถใช้งานได้ชั่วคราว ขออภัยด้วยครับ",
				icon: "error",
				confirmButtonText: "รับทราบ",
			}).then();
		}).finally(() => {
			setLoading(false);
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			{success && <Navigate to={`/sign/in`} replace={true}/>}
			<div
				className="animate__animated animate__fadeIn animate__fast authentication-container d-flex align-items-center flex-column">
				<div className="card mb-3">
					<div className="card-body p-5 text-center">
						<h1 className="fw-bold display-4">Sign Up</h1>
						<p className="fs-5 mb-5">กรอกข้อมูลของคุณ เพื่อมาเป็นลูกสมุนเกมตัวตึงด้วยกัน!</p>
						<div className="input-container">
							<input placeholder="Username / Student ID" name="username" type="text" autoComplete="username"
							       autoFocus="true"/>
							<input placeholder="Nickname" name="nickname" type="text" autoComplete="nickname"/>
							<input placeholder="Password" name="password" type="password" autoComplete="new-password"/>
							<input placeholder="Confirm Password" name="passwordConfirm" type="password"
							       autoComplete="new-password"/>
						</div>
						{!loading &&
							<button type="submit" className="my-btn my-btn-green fs-4 btn-block">
								<FontAwesomeIcon className="me-3" icon={solid("right-to-bracket")}/>Sign Up
							</button>
						}
						{loading &&
							<button type="button" className="my-btn my-btn-green disabled fs-4 btn-block">
								<FontAwesomeIcon className="me-3" icon={solid("spinner")} spinPulse/>Loading
							</button>
						}
						<p className="fs-5 mt-4">เป็นลูกสมุนเกมตัวตึงอยู่แล้ว?
							<Link to={`/sign/in`} className="ms-3 my-btn fs-5 fw-bold text-nowrap">
								Sign In
							</Link>
						</p>
					</div>
				</div>
				<div>© 2023 Copyright เกมตัวตึง.com | Privacy Policy</div>
			</div>
		</form>
	);
}

export default SignUp;