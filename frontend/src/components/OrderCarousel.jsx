import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import OrderCarouselItem from "./OrderCarouselItem";
import LoadingPlaceHolder from "./LoadingPlaceHolder";

const OrderCarousel = (props) => {
	const orderRecipients = props.orderRecipients;
	const loading = props.loading;

	return (
		<div className="order-carousel w-100 my-4">
			<div className="carousel slide" id={props.id}>
				<div className="carousel-inner">
					{loading &&
						<LoadingPlaceHolder/>
					}
					{orderRecipients.map((orderRecipient, index) => (
						<OrderCarouselItem isActive={index === 0} index={index + 1} key={orderRecipient.id}
						                   orderRecipient={orderRecipient}/>
					))}
					{!loading && orderRecipients.length === 0 &&
						<div className="carousel-item px-4 py-4 px-sm-5 active">
							<div
								className="animate__animated animate__fast animate__bounceIn fs-5 my-text-secondary my-bg-salmon px-3 py-2 fw-semibold text-center">
								ยังไม่มีใครสั่งข้าวตอนนี้
								<FontAwesomeIcon className="ms-3" icon={solid("face-sad-tear")}/>
							</div>
						</div>
					}
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
					<FontAwesomeIcon className="fs-5" icon={solid("chevron-left")}/>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
					<FontAwesomeIcon className="fs-5" icon={solid("chevron-right")}/>
				</button>
			</div>
		</div>
	);
}

export default OrderCarousel;