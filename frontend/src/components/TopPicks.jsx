import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const TopPicks =()=> {
    return (
        <div className="Toppicks my-bg-newWhite h-14">
            <div className="container">
                <div className="d-flex flex-row justify-content-center">
                    <div className="Toppicks-head px-5 mt-3 mb-4 justify-content-center">
                            <span className="fw-bold fs-2">Top Picks</span>
                            <span><FontAwesomeIcon className="ms-3 fs-2" icon={solid("utensils")} /></span>
                    </div>
                </div>
                <div className="d-flex flex-column gap-3">

                    <div className="d-flex flex-row justify-content-around">   
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-around">
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>
                        <div className="nav nav-pills mx-2">
                            <li className="nav-item my-bg-grey rounded-3">
                                <a className="nav-link my-text-black"># เทคโนอินเตอร์</a>
                            </li>
                        </div>      
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TopPicks;
