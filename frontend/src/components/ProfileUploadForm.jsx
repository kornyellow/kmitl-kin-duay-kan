import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import ProfileIcon from "./ProfileIcon";

const ProfileUploadForm = (props) => {
	const [profileURL, setProfileURL] = props.onProfileChange;

	const handleFileInputChange = (event) => {
		event.preventDefault();
		const file = event.target.files[0];
		if (!file)
			return;

		const reader = new FileReader();
		reader.onloadend = () => {
			setProfileURL(reader.result);
		};
		reader.readAsDataURL(file);
	};

	return (
		<div className="profile-upload-form">
			<div className="upload-container position-relative">
				<ProfileIcon profileURL={profileURL}/>
				<input title="" type="file" accept="image/*" onChange={handleFileInputChange}/>
				<FontAwesomeIcon className="icon-edit" icon={solid("camera")}/>
			</div>
		</div>
	);
}

export default ProfileUploadForm;