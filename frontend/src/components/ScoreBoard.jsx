import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const ScoreBoard = () => {
    return (
      <div className="top-score my-bg-white h-38">
          <div className="container">
              <div className="d-flex flex-column">
                  <div className="top-score-head px-5 mt-5 mb-5">
                      <span className="fw-bold me-3">TOPSCORE</span>
                      <span><FontAwesomeIcon className="my-text-primary" icon={solid("crown")}/></span>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                      <div className="d-flex flex-column align-items-center">
                          <FontAwesomeIcon className="icon-circle-user my-text-grey mb-2" icon={solid("circle-user")}/>
                          <div>เกมตัวตึงRider</div>
                      </div>
                      <div className="progresss me-4 ms-3">
                          <div className="progress" role="progressbar">
                              <div className="progress-bar progress-bar-1 my-bg-primary w-92 rounded-4"></div>
                          </div>
                      </div>
                      <div className="bar-point fs-3 my-text-primary">92 Point.</div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default ScoreBoard;