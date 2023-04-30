import React, {useEffect, useState} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import BackendServer from "../index";
import ProfileIcon from "./ProfileIcon";
import LoadingPlaceHolder from "./LoadingPlaceHolder";

const ScoreBoard = (props) => {
	const user = props.user;
	const [users, setUsers] = useState([]);
	const [maxScore, setMaxScore] = useState(1);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(BackendServer + "/api/user/sort");
				const data = await response.json();

				setUsers(data.data);
				if (data.data.length !== 0)
					setMaxScore(data.data[0].point);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchUsers().then();
	}, [user]);

	return (
		<div className="scoreboard my-bg-white mb-5 shadow shadow-sm">
			<div className="container py-5">
				<div className="animate__animated animate__fast animate__fadeIn fw-semibold mb-4 display-6">
					<FontAwesomeIcon className="me-4 my-text-primary" icon={solid("crown")}/>
					ใครเป็นเบ๊เพื่อนบ่อยสุด
				</div>
				<div className="d-flex flex-column gap-5">
					{loading ?
						<LoadingPlaceHolder/>
						:
						users.length === 0 ?
							<div className="d-flex">
								<div
									className="animate__animated animate__fast animate__bounceIn fs-5 my-text-secondary my-bg-salmon px-3 py-2 fw-semibold text-center">
									ยังไม่มีใครไปซื้อข้าวตอนนี้
									<FontAwesomeIcon className="ms-3" icon={solid("face-sad-tear")}/>
								</div>
							</div>
							:
							users.map((user, index) => (
								user.point > 0 &&
								<div className="scoreboard-progress-bar animate__animated animate__fast animate__fadeIn">
									<div className="d-flex align-items-center gap-lg-5 gap-2">
										<ProfileIcon onUserChange={user}/>
										<div className="flex-grow-1">
											<div className="fs-3 fw-bold mb-2">
												<FontAwesomeIcon className="me-3 my-text-primary" icon={solid("star")}/>
												อันดับ #{index + 1}
											</div>
											<div className="fw-bold mb-1 fs-5">
												{user.nickname}
												<span className="ms-3 fw-light mb-2 my-text-grey">
											"{user.aliasname === "" ? "ยังไม่มีฉายา" : user.aliasname}"
										</span>
											</div>
											<div className="my-text-grey">
												ได้ซื้อข้าวไปให้เพื่อนทั้งหมด {user.point} คน!
											</div>
											<div className="p-2 px-4 bar mt-2 fw-semibold fs-4 rounded-5 shadow-sm shadow"
											     style={{width: `${user.point / maxScore * 100}%`}}>
												{user.point}
											</div>
										</div>
									</div>
								</div>
							))
					}
				</div>
			</div>
		</div>
	);
}

export default ScoreBoard;