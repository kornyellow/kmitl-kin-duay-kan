import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import ProfileIcon from "./ProfileIcon";
import {editUser} from "../routes/authentication/AuthenticationRoot";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SwalWithStyleButtons = Swal.mixin({
	customClass: {
		confirmButton: "my-btn my-btn-primary no-icon fs-5 font-primary fw-semibold",
	},
	buttonsStyling: false,
});
const MySwal = withReactContent(SwalWithStyleButtons);

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
					MySwal.fire({
						title: "เกิดข้อผิดพลาด!",
						text: error,
						icon: "error",
						confirmButtonText: "รับทราบ",
					}).then();
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