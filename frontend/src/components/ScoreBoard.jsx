import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

const ScoreBoard = () => {
	return (
		<div className="top-score my-bg-white">
			<div className="container py-5">
				<h2 className="animate__animated animate__fast animate__fadeIn fw-semibold mb-4 display-6">
					<FontAwesomeIcon className="me-4 my-text-primary" icon={solid("crown")}/>
					ใครเป็นเบ๊เพื่อนบ่อยสุด
				</h2>
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
	);
}

export default ScoreBoard;