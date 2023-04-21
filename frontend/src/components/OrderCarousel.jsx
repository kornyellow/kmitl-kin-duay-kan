import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import OrderCarouselItem from "./OrderCarouselItem";

const OrderCarousel = (props) => {
	return (
		<div className="order-carousel w-100 my-4">
			<div className="carousel slide" id={props.id}>
				<div className="carousel-inner">
					<OrderCarouselItem isActive={true}/>
					<OrderCarouselItem/>
					<OrderCarouselItem/>
					<OrderCarouselItem/>
					<OrderCarouselItem/>
					<OrderCarouselItem/>
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