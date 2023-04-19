import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const OrderCarousel = () => {
    return (
        <div className="order-carousel mt-3 mb-3">
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div id="carousel1" className="carousel carousel-dark slide">
                    <div className="inner-carousel">
                        <div className="carousel-item active">
                            <div className="box1-1 d-flex flex-column align-items-center justify-content-center my-bg-minigrey rounded-4">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <FontAwesomeIcon className="icon-circle-user-carousel my-text-grey me-2" icon={solid("circle-user")} />
                                    <div className="box1-1-detail-name fs-6">User : เกมตัวตึง 888</div>
                                </div>
                                <div className="menu-name">"กะเพราหมูแต่ใส่ไก่"</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="box1-1 d-flex flex-column align-items-center justify-content-center my-bg-minigrey rounded-4">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <FontAwesomeIcon className="icon-circle-user-carousel my-text-grey me-2" icon={solid("circle-user")} />
                                    <div className="box1-1-detail-name fs-6">User : KUYDEE อิ้_อิ้</div>
                                </div>
                                <div className="menu-name">"กะเพราหมูแต่ใส่ไก่"</div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="box1-1 d-flex flex-column align-items-center justify-content-center my-bg-minigrey rounded-4">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <FontAwesomeIcon className="icon-circle-user-carousel my-text-grey me-2" icon={solid("circle-user")} />
                                    <div className="box1-1-detail-name fs-6">User : เมคนน่ารัก อะหุอะหิ</div>
                                </div>
                                <div className="menu-name">"กะเพราหมูแต่ใส่ไก่"</div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev prev-button" type="button" data-bs-target="#carousel1"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderCarousel;