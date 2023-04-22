import React, {useState} from "react";
import Authentication from "../../components/Authentication";
import ProfileUploadForm from "../../components/ProfileUploadForm";
import {useOutletContext} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {editUser} from "../authentication/AuthenticationRoot";

const SwalWithStyleButtons = Swal.mixin({
	customClass: {
		confirmButton: "my-btn my-btn-primary no-icon fs-5 font-primary fw-semibold",
	},
	buttonsStyling: false,
});
const MySwal = withReactContent(SwalWithStyleButtons);

const Profile = () => {
	const [user, setUser] = useOutletContext();
	const [loading, setLoading] = useState(false);

	const [aliasname, setAliasname] = useState("");
	const [nickname, setNickname] = useState("");

	const editAliasname = () => {
		if (aliasname === "")
			return MySwal.fire({
				title: "แจ้งเตือน!",
				text: "กรุณากรอกฉายาใหม่ที่ต้องการเปลี่ยน",
				icon: "warning",
				confirmButtonText: "รับทราบ",
			}).then();
		setLoading(true);

		const editData = async () => {
			try {
				const newUser = {...user, aliasname: aliasname};
				const data = await editUser(newUser);
				if (data.success) {
					setUser(newUser);
					return MySwal.fire({
						title: "เปลี่ยนฉายาสำเร็จ!",
						text: "ฉายาใหม่ของคุณคือ " + aliasname,
						icon: "success",
						confirmButtonText: "รับทราบ",
					}).then();
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		editData().then();
	};
	const editNickname = () => {
		if (nickname === "")
			return MySwal.fire({
				title: "แจ้งเตือน!",
				text: "กรุณากรอกชื่อเล่นใหม่ที่ต้องการเปลี่ยน",
				icon: "warning",
				confirmButtonText: "รับทราบ",
			}).then();
		setLoading(true);

		const editData = async () => {
			try {
				const newUser = {...user, nickname: nickname};
				const data = await editUser(newUser);
				if (data.success) {
					setUser(newUser);
					return MySwal.fire({
						title: "เปลี่ยนชื่อเล่นสำเร็จ!",
						text: "ชื่อเล่นใหม่ของคุณคือ " + nickname,
						icon: "success",
						confirmButtonText: "รับทราบ",
					}).then();
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		editData().then();
	};

	return (
		<div>
			<Authentication/>
			<div className="container mt-2 mt-lg-5 animate__animated animate__fast animate__fadeIn">
				<div className="d-flex justify-content-center align-items-center flex-wrap gap-4 gap-lg-5 mb-4">
					<ProfileUploadForm onUserChange={[user, setUser]}/>
					<div className="d-flex flex-column fs-5">
						<h1 className="display-3 fw-semibold">{user?.nickname ?? 'unnamed'}</h1>
						<div className="d-flex align-items-center flex-wrap gap-2 gap-lg-4">
							<div>"{user?.aliasname === "" ? "ยังไม่มีฉายา" : user?.aliasname ?? ""}"</div>
							<button className="my-btn my-btn-primary fw-semibold font-primary"
							        data-bs-toggle="modal" data-bs-target="#editAliasnameModal">
								<FontAwesomeIcon className="me-3" icon={solid("pen-to-square")}/>แก้ไขฉายา
							</button>
						</div>
					</div>
				</div>
				<div className="input-container px-0 px-lg-5">
					<div className="row px-0 px-lg-5 gy-4">
						<div className="col-12 col-lg-6">
							<div className="fs-5 mb-2 fw-semibold">Username</div>
							<input readOnly={true} value={user?.username ?? ""} type="text"/>
						</div>
						<div className="col-12 col-lg-6">
							<div className="fs-5 mb-2 fw-semibold">Nickname</div>
							<input readOnly={true} value={user?.nickname === "" ? "ยังไม่มีชื่อเล่น" : user?.nickname ?? ""}
							       type="text"/>
						</div>
						<div className="col-12">
							<button className="fs-5 my-btn my-btn-primary btn-block fw-semibold font-primary"
							        data-bs-toggle="modal" data-bs-target="#editNicknameModal">
								<FontAwesomeIcon className="me-3" icon={solid("user-edit")}/>แก้ไขชื่อเล่น
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="editAliasnameModal">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-profile-edit modal-content">
						<div className="modal-body p-0">
							<div className="modal-box px-3 pt-3 pb-4 m-4">
								<div className="d-flex justify-content-between align-items-baseline">
									<div className="fs-4 mb-2 fw-semibold">แก้ไขฉายาเป็น...</div>
									<button className="my-btn my-btn-primary no-icon d-flex align-items-center justify-content-end"
									        type="button" data-bs-dismiss="modal">
										<FontAwesomeIcon className="fs-4 fa-fw" icon={solid("x")}/>
									</button>
								</div>
								<div className="input-container mb-3 mt-2">
									<input value={aliasname} onChange={e => setAliasname(e.target.value)} className="input-form"
									       type="text"
									       placeholder="ฉายาใหม่"/>
								</div>
								{!loading ?
									<button type="submit" className="fs-5 my-btn my-btn-green btn-block fw-semibold font-primary"
									        onClick={editAliasname}>
										<FontAwesomeIcon className="me-3" icon={solid("check")}/>
										ใช้ฉายาใหม่อันนี้!
									</button>
									:
									<button type="button" className="my-btn my-btn-green disabled fs-5 btn-block">
										<FontAwesomeIcon className="me-3" icon={solid("spinner")} spinPulse/>Loading
									</button>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="editNicknameModal">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-profile-edit modal-content">
						<div className="modal-body p-0">
							<div className="modal-box px-3 pt-3 pb-4 m-4">
								<div className="d-flex justify-content-between align-items-baseline">
									<div className="fs-4 mb-2 fw-semibold">แก้ไขชื่อเล่นเป็น...</div>
									<button className="my-btn my-btn-primary no-icon d-flex align-items-center justify-content-end"
									        type="button" data-bs-dismiss="modal">
										<FontAwesomeIcon className="fs-4 fa-fw" icon={solid("x")}/>
									</button>
								</div>
								<div className="input-container mb-3 mt-2">
									<input value={nickname} onChange={e => setNickname(e.target.value)} className="input-form" type="text"
									       placeholder="ชื่อเล่นใหม่"/>
								</div>
								{!loading ?
									<button className="fs-5 my-btn my-btn-green btn-block fw-semibold font-primary"
									        type="submit" onClick={editNickname}>
										<FontAwesomeIcon className="me-3" icon={solid("check")}/>
										ใช้ชื่อเล่นใหม่อันนี้!
									</button>
									:
									<button type="button" className="my-btn my-btn-green disabled fs-5 btn-block">
										<FontAwesomeIcon className="me-3" icon={solid("spinner")} spinPulse/>Loading
									</button>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;