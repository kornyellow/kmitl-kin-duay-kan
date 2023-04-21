import React from "react";
import OrderCarousel from "./OrderCarousel";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import ProfileIcon from "./ProfileIcon";
import {OrderModel} from "../Models";

const ActiveOrderCard = (props) => {
	const modalId = `order-modal-${props.order.id}`;

	return (
		<div className="col-12 col-md-6 col-lg-4">
			<div className="order-card animate__animated animate__fast animate__fadeIn">
				<button type="button" className="clickable p-4 w-100 shadow-sm" data-bs-toggle="modal"
				        data-bs-target={`#${modalId}`}>
					<ProfileIcon profileURL={props.order.rider.profileImage}/>
					<div className="fs-5 fw-bold">{props.order.rider.nickname}</div>
					<div className="fw-light mb-2 my-text-grey text-truncate">"{props.order.rider.aliasname}"</div>
					<div className="mb-3 text-truncate">{props.order.message}</div>
					<div className="d-flex justify-content-between">
						<div className="my-badge my-bg-primary my-text-black">#{props.order.location.name}</div>
						<div className="d-flex align-items-center">
							<div className="fw-semibold fs-5">{props.order.currentOrder}/{props.order.maxOrder}</div>
							<FontAwesomeIcon className="fs-4 ms-3" icon={solid("truck-fast")}/>
						</div>
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
								<ProfileIcon profileURL={props.order.rider.profileImage}/>
								<div className="w-100 mt-4 mb-3 mt-sm-0 mb-sm-0 d-flex justify-content-between flex-wrap gap-2">
									<div className="my-badge my-bg-primary my-text-black text-truncate">#{props.order.location.name}</div>
									<div className="d-flex align-items-center">
										<div className="fw-semibold fs-5">{props.order.currentOrder}/{props.order.maxOrder}</div>
										<FontAwesomeIcon className="fs-4 ms-3" icon={solid("truck-fast")}/>
									</div>
								</div>
								<div className="fs-5 fw-bold">{props.order.rider.nickname}</div>
								<div
									className="w-100 text-truncate text-center fw-light mb-2 my-text-grey">"{props.order.rider.aliasname}"
								</div>
								<div className="w-100 text-truncate text-center">{props.order.message}</div>
								<OrderCarousel id={`order-carousel-card-${props.order.id}`}/>
								<div className="w-100">
									<button className="fw-semibold text-truncate my-btn my-btn-green btn-block no-icon font-primary fs-5">
										<FontAwesomeIcon className="me-2" icon={solid("hand-point-up")}/>+1
										<span className="ms-3">เอาเหมือนกันเลย</span>
									</button>
								</div>
								<hr className="divider"/>
								<div className="input-container d-flex w-100 gap-2">
									<input className="input-form w-50" type="text" placeholder="ฝากซื้ออย่างอื่น..."/>
									<button
										className="fw-semibold text-truncate flex-fill my-btn my-btn-primary no-icon font-primary fs-5">
										<FontAwesomeIcon className="me-3" icon={solid("paper-plane")}/>
										<span>ขอเป็นอันนี้ละกัน</span>
									</button>
								</div>
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
