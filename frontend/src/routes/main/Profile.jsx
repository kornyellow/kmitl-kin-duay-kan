import React, {useState} from "react";
import Authentication from "../../components/Authentication";
import ProfileUploadForm from "../../components/ProfileUploadForm";
import {useOutletContext} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const Profile = () => {
	const [username, setUsername] = useState(null);
	const [nickname, setNickname] = useState(null);
	const [password, setPassword] = useState(null);
	const [aliasname, setAliasname] = useState(null);

	const [profileURL, setProfileURL] = useOutletContext();
	return (
		<div className="animate__animated animate__fast animate__fadeIn">
			<Authentication/>
			<div className="container mt-2 mt-lg-5">
				<div className="d-flex justify-content-center align-items-center flex-wrap gap-4 gap-lg-5 mb-4">
					<ProfileUploadForm onProfileChange={[profileURL, setProfileURL]}/>
					<div className="d-flex flex-column fs-5">
						<h1 className="display-3 fw-semibold">Porpor สีฟ้า</h1>
						<div className="d-flex align-items-center flex-wrap gap-2 gap-lg-4">
							<div>"ฉายาของคุณ"</div>
							<button className="my-btn my-btn-primary fw-semibold">
								<FontAwesomeIcon className="me-3" icon={solid("pen-to-square")}/>Edit
							</button>
						</div>
					</div>
				</div>
				<div className="input-container px-0 px-lg-5">
					<div className="row px-0 px-lg-5 gy-4">
						<div className="col-12 col-lg-6">
							<div className="fs-5 mb-2 fw-semibold">Username</div>
							<input readOnly={true} value={"porporth"} type="text"/>
						</div>
						<div className="col-12 col-lg-6">
							<div className="fs-5 mb-2 fw-semibold">Nickname</div>
							<input readOnly={true} value={"Porpor สีฟ้า"} type="text"/>
						</div>
						<div className="col-12">
							<button className="fs-5 my-btn my-btn-primary btn-block fw-semibold">
								<FontAwesomeIcon className="me-3" icon={solid("user-edit")}/>Edit Profile
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;