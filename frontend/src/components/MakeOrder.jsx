import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const MakeOrder = () => {
	return (
		<div className="animate__animated animate__fadeIn animate__fast mt-2">
			<div className="container make-order">
				<div className="input-container px-0 px-lg-5">
					<div className="row px-0 px-lg-5 gy-4">
						<div className="col-12">
							<div className="fs-5 mb-2 fw-semibold">ไปซื้ออะไร</div>
							<input type="text" placeholder="เช่น จะไปซื้อข้าวหมูทอด ใครอยากกินอะไรมั้ย"/>
						</div>
						<div className="col-12">
							<div className="fs-5 mb-2 fw-semibold">ไปซื้อที่ไหน</div>
							<select>
								<option selected disabled hidden>กดเพื่อเลือกที่ที่จะไปซื้อ</option>
								<option>ร้านอิสลาม</option>
								<option>ร้านตามสั่ง</option>
							</select>
						</div>
						<div className="col-12">
							<div className="fs-5 mb-2 fw-semibold">จำนวนที่รับฝากซื้อมากที่สุด</div>
							<div className="d-flex gap-2">
								<button className="my-btn my-btn-salmon no-icon">
									<FontAwesomeIcon icon={solid("minus")}/>
								</button>
								<input readOnly={true} value={3} type="number"/>
								<button className="my-btn my-btn-green no-icon d-flex align-items-center">
									<FontAwesomeIcon icon={solid("plus")}/>
								</button>
							</div>
						</div>
						<div className="col-12">
							<button className="fs-5 my-btn my-btn-primary btn-block fw-semibold font-primary">
								<FontAwesomeIcon className="me-3" icon={solid("paper-plane")}/>
								สร้างโพสต์เลย!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MakeOrder;
