import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const MakeOrder = () => {
    return (
        <div className="animate__animated animate__fadeIn animate__fast authentication-container">
            <div className="container my-bg-salmon make-order-container">
                <div className="make-order-object m-4 fw-bold">
                    <div className="d-flex align-items-baseline gap-3">
                        <div>POST</div>
                        <FontAwesomeIcon icon={solid("paper-plane")} />
                    </div>
                    <div class="input-group my-3">
                        <textarea
                            class="form-control"
                            placeholder="Press word here . . . . . . . . . . . . . ."
                            aria-label="Post input"
                            aria-describedby="Input group1"
                        ></textarea>
                    </div>
                    <div>เลือกร้านอาหาร</div>
                    <select
                        class="form-select from-select-restaurant my-3"
                        aria-label="Select restaurant"
                    >
                        <option selected>Select Restaurant</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div>ต้องการรับกี่ order ?</div>
                    <input
                        type="range"
                        class="form-range my-3"
                        min="0"
                        max="5"
                        id="customRange2"
                    ></input>
                    <div className="d-flex align-items-center flex-column my-3">
                        <button type="done" className="my-btn my-btn-primary fs-4">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default MakeOrder;
