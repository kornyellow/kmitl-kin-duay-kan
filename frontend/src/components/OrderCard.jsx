import React from "react";
import OrderCarousel from "./OrderCarousel";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import ProfileIcon from "./ProfileIcon";

const OrderCard = (props) => {
	return (
		<div className="col-12 col-md-6 col-lg-4">
			<div className="order-card animate__animated animate__fast animate__fadeIn">
				<button className="shadow shadow-sm p-4 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
					<ProfileIcon profileURL={""}/>
					<div className="fs-5 fw-bold">{props.order.rider.nickname}</div>
					<div className="fw-light mb-2 my-text-grey">"{props.order.rider.nickname}"</div>
					<div className="mb-3 text-truncate">{props.order.message}</div>
					<div className="d-flex justify-content-between">
						<div className="my-badge my-bg-primary my-text-black">#{props.order.location.name}</div>
						<div className="d-flex align-items-center">
							<div className="fw-semibold">3/5 Order</div>
							<FontAwesomeIcon className="fs-4 ms-3" icon={solid("circle-chevron-down")}/>
						</div>
					</div>
				</button>
			</div>
			<div className="modal fade" id="exampleModal">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="btn-close" data-bs-dismiss="modal"
							        aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div
								className="box-modal d-flex flex-column align-items-center my-bg-white rounded-5">
								<FontAwesomeIcon className="icon-circle-user-modal my-text-grey mt-4"
								                 icon={solid("circle-user")}/>
								<div className="fs-3 lh-2">เกมตัวตึงRider</div>
								<div className="fs-6 lh-1 my-text-primary">51 Point.</div>
								<div className="fs-5 lh-5">“กำลังจะไปซื้อข้าวร้าน เทคโนอินเตอร์”</div>
								<div className="d-flex flex-row justify-content-center align-items-center tag">
									<div className="fs-6">Tag :</div>
									<div className="nav nav-pills mx-2">
										<li className="nav-item my-bg-salmon rounded-3">
											<a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
										</li>
									</div>
								</div>
								<div className="fs-3 lh-2">3/5 Order</div>
								<OrderCarousel/>
								<form className="d-flex flex-row align-items-center">
									<div>
										<input className="input-form fs-4 rounded-3" type="text"
										       placeholder="Press Order Here ...."/>
										<button type="submit" className="btn">
											<FontAwesomeIcon className="my-text-primary icon-add mb-3"
											                 icon={solid("square-plus")}/>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderCard;
