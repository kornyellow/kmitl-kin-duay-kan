import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const ProfileIcon = (props) => {
	const [profileURL, setProfileURL] = useState("");

	useEffect(() => {
		setProfileURL(props.profileURL);
	}, [props.profileURL]);

	return (
		<div className="profile-icon">
			{profileURL === "" && <FontAwesomeIcon className="icon-user" icon={solid("circle-user")}/>}
			{profileURL && <div className="preview-img"><img src={profileURL} alt="Preview"/></div>}
		</div>
	);
};

export default ProfileIcon;