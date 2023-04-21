import React, { useEffect, useState } from "react";
import BackendServer from "../index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const History = () => {

    return (

        <div className="parent-container">
            <div className="container-active-order">
                <div className="active-item-3">
                    <div className="order-profile">
                        <img src="https://i.pinimg.com/564x/62/8c/a3/628ca307f8b7281bf055ff5894cc78d5.jpg"
                            className="img-fluid rounded-circle"></img>
                    </div>
                </div>
                <div className="active-item-5">
                    <span className="d-flex flex-column align-items-center order-text">
                        <p className="fs-3 fw-medium">“กำลังจะไปซื้อข้าวร้าน เทคโนอินเตอร์”</p>
                        <p className="fs-6 fw-bold">Friday, April 20, 2023 12.33 pm</p>
                        <p>
                            <span className="fs-3 fw-medium">5/5 Order</span> 
                            <span>
                            <button type="button" className="btn btn-success ms-3">SUCCESS</button>
                            </span>
                        </p>
                    </span>
                </div>
                <div className="active-item-4">
                    <div className="box-user">
                        <div id="carousel1" className="carousel carousel-dark slide">
                            <div className="inner-carousel">
                                <div className="carousel-item active">
                                    <div
                                        className="box1-1 d-flex flex-column align-items-center justify-content-center my-bg-minigrey rounded-4">
                                        <div className="d-flex flex-row align-items-center justify-content-center">
                                            <FontAwesomeIcon className="icon-circle-user-carousel my-text-grey me-2" icon={solid("circle-user")} />
                                            <div className="box1-1-detail-name fs-6">User : เกมตัวตึง 888</div>
                                        </div>
                                        <div className="menu-name">"กะเพราหมูแต่ใส่ไก่"</div>
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <div
                                        className="box1-1 d-flex flex-column align-items-center justify-content-center my-bg-minigrey rounded-4">
                                        <div className="d-flex flex-row align-items-center justify-content-center">
                                            <FontAwesomeIcon className="icon-circle-user-carousel my-text-grey me-2" icon={solid("circle-user")} />
                                            <div className="box1-1-detail-name fs-6">User : เกมตัวตึง 888</div>
                                        </div>
                                        <div className="menu-name">"กะเพราหมูแต่ใส่ไก่"</div>
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <div
                                        className="box1-1 d-flex flex-column align-items-center justify-content-center my-bg-minigrey rounded-4">
                                        <div className="d-flex flex-row align-items-center justify-content-center">
                                            <FontAwesomeIcon className="icon-circle-user-carousel my-text-grey me-2" icon={solid("circle-user")} />
                                            <div className="box1-1-detail-name fs-6">User : เกมตัวตึง 888</div>
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
                            <button className ="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default History;
