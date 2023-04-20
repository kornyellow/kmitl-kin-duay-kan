import React, { useEffect, useState } from "react";
import BackendServer from "../index";

const ActiveOrderCard = () => {

    return (

        <div class="parent-container">
            <div class="container-active-order">
                <div class="active-item-3">
                    <div class="order-profile">
                        <img src="https://i.pinimg.com/564x/62/8c/a3/628ca307f8b7281bf055ff5894cc78d5.jpg"
                            class="img-fluid rounded-circle"></img>
                    </div>
                </div>
                <div class="active-item-5">
                    <span class="d-flex flex-column align-items-center order-text">
                        <p class="fs-3 fw-medium">“กำลังจะไปซื้อข้าวร้าน เทคโนอินเตอร์”</p>
                        <p class="fs-6 fw-bold">Friday, April 20, 2023 12.33 pm</p>
                        <p>
                            <span class="fs-3 fw-medium">5/5 Order</span>
                            <span>
                                <button type="button" class="btn btn-outline-dark ms-3 confirm-button">CONFIRM</button>
                            </span>
                        </p>
                    </span>
                </div>
                <div class="active-item-4">
                    <div class="box-user">
                        <div id="carousel1" class="carousel carousel-dark slide ">
                            <div class="d-flex flex-row justify-content-center align-items-center">
                                <div class="mini-profile me-3">
                                    <img src="https://i.pinimg.com/564x/62/8c/a3/628ca307f8b7281bf055ff5894cc78d5.jpg"
                                        class="img-fluid rounded-circle" />
                                </div>
                                <div class="box1-1-detail">
                                    <p>User : เกมตัวตึง 888</p>
                                    <p class="mb-0">"กะเพราหมูแต่ใส่ไก่"</p>
                                </div>
                            </div>
                            <div class="d-flex flex-row justify-content-center align-items-center">
                                <div class="mini-profile me-3">
                                    <img src="https://i.pinimg.com/564x/62/8c/a3/628ca307f8b7281bf055ff5894cc78d5.jpg"
                                        class="img-fluid rounded-circle" />
                                </div>
                                <div class="box1-1-detail">
                                    <p>User : เกมตัวตึง 888</p>
                                    <p class="mb-0">"กะเพราหมูแต่ใส่ไก่"</p>
                                </div>
                            </div>
                            <button class="carousel-control-prev prev-button" type="button" data-bs-target="#carousel1"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ActiveOrderCard;
