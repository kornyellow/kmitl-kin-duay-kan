import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const ErrorPageNotFound = () => {
	return (
		<div className="page-not-found animate__animated animate__fast animate__fadeIn">
			<div className="text-center">
				<div className="mb-4 animate__animated animate__fast animate__bounce">
					<h1 className="display-1 fw-semibold">404</h1>
					<h2 className="display-5 fw-semibold mt-n3">PAGE NOT FOUND</h2>
				</div>
				<p className="mb-5 fs-4">อย่าได้ตกใจไป! <span className="fw-semibold">เกมตัวตึง</span>ได้เอาหน้าเว็บที่คุณต้องการไปซ่อน
					แนะนำให้ไปลองหาที่หน้าหลักที่ปุ่มด้านล่าง</p>
				<Link to={`/`} className="my-btn my-btn-primary fs-3">
					<FontAwesomeIcon className="me-3" icon={solid("home")}/>
					Back to Home
				</Link>
			</div>
		</div>
	);
}

export default ErrorPageNotFound;