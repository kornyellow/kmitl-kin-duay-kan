import React from "react";
import OrderCarousel from "./OrderCarousel";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const OrderCard = () => {
    return (
        <div className="order-card my-bg-secondary">
            <div className="container">
                {/* ORDER TEXT */}
                <div className="d-flex flex-row mt-5">
                    <div className="order-head px-5">
                        <span className="fw-bold">ORDER</span>
                        <span><FontAwesomeIcon className="my-text-black ms-3" icon={solid("scroll")} /></span>
                    </div>
                </div>
                {/* ORDER BOX */}
                <div className="d-flex flex-row justify-content-around mt-5 px-5">
                    {/* box1 }
                    <div className="box d-flex flex-column align-items-center my-bg-white rounded-5">
                        <FontAwesomeIcon className="icon-circle-user my-text-grey" icon={solid("circle-user")} />
                        <div className="fs-5 lh-2">เกมตัวตึงRider</div>
                        <div className="fs-6 lh-2">“ใครไม่ตึง แต่เกมตัวตึง”</div>
                        <div className="fs-6 lh-1">......</div>
                        <div className="d-flex flex-row justify-content-center mt-4 align-items-center">
                            <div className="fs-6">Tag :</div>
                            <div className="nav nav-pills mx-2">
                                <li className="nav-item my-bg-salmon rounded-3">
                                    <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                                </li>
                            </div>
                            <div className="fs-5 ms-2">3/5 Order</div>
                            <FontAwesomeIcon className="fs-4 ms-3" icon={solid("circle-chevron-down")} />
                        </div>
                    </div>

                    { box2 */}
                    {/* Trigger Modal */}
                    <button className="box d-flex flex-column align-items-center my-bg-white rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <FontAwesomeIcon className="icon-circle-user my-text-grey" icon={solid("circle-user")} />
                        <div className="fs-5 lh-2">เกมตัวตึงRider</div>
                        <div className="fs-6 lh-2">“ใครไม่ตึง แต่เกมตัวตึง”</div>
                        <div className="fs-6 lh-1">......</div>
                        <div className="d-flex flex-row justify-content-center mt-4 align-items-center">
                            <div className="fs-6">Tag  :  </div>
                            <div className="nav nav-pills mx-2">
                                <li className="nav-item my-bg-salmon rounded-3">
                                    <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                                </li>
                            </div>
                            <div className="fs-5 ms-2">3/5 Order</div>
                            <FontAwesomeIcon className="fs-4 ms-3" icon={solid("circle-chevron-down")} />
                        </div>
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="box-modal d-flex flex-column align-items-center my-bg-white rounded-5">
                                        <FontAwesomeIcon className="icon-circle-user-modal my-text-grey mt-4" icon={solid("circle-user")} />
                                        <div className="fs-3 lh-2">เกมตัวตึงRider</div>
                                        <div className="fs-6 lh-1 my-text-primary">51 Point.</div>
                                        <div className="fs-5 lh-5">“กำลังจะไปซื้อข้าวร้าน เทคโนอินเตอร์”</div>
                                        <div className="d-flex flex-row justify-content-center align-items-center tag">
                                            <div className="fs-6">Tag  :  </div>
                                            <div className="nav nav-pills mx-2">
                                                <li className="nav-item my-bg-salmon rounded-3">
                                                    <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                                                </li>
                                            </div>
                                        </div>
                                        <div className="fs-3 lh-2">3/5 Order</div>
                                        <OrderCarousel />
                                        <form className="d-flex flex-row align-items-center">
                                            <div>
                                                <input className="input-form fs-4 rounded-3" type="text" placeholder="Press Order Here ...." />
                                                <button type="submit" className="btn">
                                                    <FontAwesomeIcon className="my-text-primary icon-add mb-3" icon={solid("square-plus")} />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default OrderCard;
