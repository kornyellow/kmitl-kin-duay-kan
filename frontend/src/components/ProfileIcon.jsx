import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const ProfileIcon = (props) => {
	const user = props.onUserChange;

	return (
		<div className="profile-icon">
			{user != null && user.profileImage === "" && <FontAwesomeIcon className="icon-user" icon={solid("circle-user")}/>}
			{user != null && user.profileImage &&
				<div className="preview-img"><img src={user.profileImage} alt="Preview"/></div>}
			{user == null && <FontAwesomeIcon className="icon-user" icon={solid("circle-user")}/>}
		</div>
	);
};

export default ProfileIcon;