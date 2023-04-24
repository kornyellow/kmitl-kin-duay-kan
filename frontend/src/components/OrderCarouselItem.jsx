import React from "react";
import ProfileIcon from "./ProfileIcon";

const OrderCarouselItem = (props) => {
	return (
		<div className={`carousel-item px-4 py-4 px-sm-5 ${props.isActive && "active"}`}>
			<div className="row g-3">
				<div className="col-12">
					<div className="d-flex flex-wrap gap-3">
						<ProfileIcon profileURL={""}/>
						<div className="flex-fill d-flex flex-column w-50">
							<div className="d-flex flex-wrap align-items-center">
								<div className="my-badge px-2 me-1 my-bg-primary my-text-black text-truncate">#1</div>
								<div className="fs-5 fw-semibold">เกมตัวตึง</div>
							</div>
							<div className="text-truncate fw-light my-text-grey">"เลิกแล้วดื่มเบียร์ มีเมียแล้วดีใจ"</div>
						</div>
					</div>
				</div>
				<div className="col-12 text-wrap">เอาข้าวไก่ย่างถุงนึงเพื่อน</div>
			</div>
		</div>
	);
}

export default OrderCarouselItem;
