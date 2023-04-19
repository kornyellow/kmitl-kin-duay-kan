import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

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
				{profileURL === "" && <FontAwesomeIcon className="icon-user shadow shadow-lg" icon={solid("circle-user")}/>}
				{profileURL && <div className="preview-img"><img src={profileURL} alt="Preview"/></div>}
				<input title="" type="file" accept="image/*" onChange={handleFileInputChange}/>
				<FontAwesomeIcon className="icon-edit shadow shadow-lg" icon={solid("camera")}/>
			</div>
		</div>
	);
}

export default ProfileUploadForm;