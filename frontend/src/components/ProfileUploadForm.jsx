import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import ProfileIcon from "./ProfileIcon";
import {editUser} from "../routes/authentication/AuthenticationRoot";

const ProfileUploadForm = (props) => {
	const [user, setUser] = props.onUserChange;

	const handleFileInputChange = (event) => {
		event.preventDefault();
		const file = event.target.files[0];
		if (!file)
			return;

		const reader = new FileReader();
		reader.onloadend = () => {
			const editData = async () => {
				try {
					const newUser = {...user, profileImage: reader.result};
					const result = await editUser(newUser);
					if (result.success)
						setUser(newUser);
				} catch (error) {
					console.log(error);
				}
			}
			editData().then();
		};
		reader.readAsDataURL(file);
	};

	return (
		<div className="profile-upload-form">
			<div className="upload-container position-relative">
				<ProfileIcon onUserChange={user}/>
				<input title="" type="file" accept="image/*" onChange={handleFileInputChange}/>
				<FontAwesomeIcon className="icon-edit" icon={solid("camera")}/>
			</div>
		</div>
	);
}

export default ProfileUploadForm;