import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const LoadingPlaceHolder = () => {
	return (
		<div className="d-flex">
			<div
				className="animate__animated animate__fast animate__fadeIn fs-5 my-text-secondary my-bg-grey px-3 py-2 fw-semibold text-center">
				Loading
				<FontAwesomeIcon className="ms-3" icon={solid("spinner")} spinPulse/>
			</div>
		</div>
	);
}

export default LoadingPlaceHolder;