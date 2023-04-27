import React from "react";
import ProfileIcon from "./ProfileIcon";

const OrderCarouselItem = (props) => {
	return (
		<div className={`carousel-item px-4 py-4 px-sm-5 ${props.isActive && "active"}`}>
			<div className="row g-3">
				<div className="col-12">
					<div className="d-flex flex-wrap gap-3">
						<ProfileIcon onUserChange={props.orderRecipient.recipient}/>
						<div className="flex-fill d-flex flex-column w-50">
							<div className="d-flex flex-wrap align-items-center">
								<div className="my-badge px-2 me-1 my-bg-primary my-text-black text-truncate">#{props.index}</div>
								<div className="fs-5 fw-semibold">
									{props.orderRecipient.recipient.nickname}
								</div>
							</div>
							<div className="text-truncate fw-light my-text-grey">
								"{props.orderRecipient.recipient?.aliasname === "" ? "ยังไม่มีฉายา" : props.orderRecipient.recipient.aliasname}"
							</div>
						</div>
					</div>
				</div>
				<div
					className="col-12 text-wrap">{props.orderRecipient.message === "" ? "+1 เอาเหมือนกัน!" : props.orderRecipient.message}</div>
			</div>
		</div>
	);
}

export default OrderCarouselItem;
