import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Link} from "react-router-dom";
import BackendServer from "../index";
import LoadingPlaceHolder from "./LoadingPlaceHolder";

const TopPicks = (props) => {
	const handleChangePage = props.onPageChange;
	const user = props.user;

	const [topPicks, setTopPicks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BackendServer + "/api/location");
				const data = await response.json();

				setTopPicks(data.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData().then();
	}, []);

	return (
		<div>
			<div className="animate__animated animate__fast animate__fadeIn container pt-3 pt-lg-4 pb-4">
				<div className="d-flex flex-wrap gap-2">
					{loading &&
						<LoadingPlaceHolder/>
					}
					{topPicks.map((topPick) => (
						<button key={`top-pick-button-${topPick.id}`}
						        className="my-badge my-bg-primary my-text-black">#{topPick.name}</button>
					))}
					{!loading && topPicks.length === 0 &&
						<div className="d-flex">
						</div>
					}
				</div>
				{user &&
					<Link onClick={handleChangePage} to={`/orders`} data-link-id="ORDERS"
					      className="font-primary my-btn my-btn-green btn-block fw-semibold fs-4 mt-3 text-center text-truncate">
						<FontAwesomeIcon className="me-3" icon={solid("motorcycle")}/>
						ซื้อข้าวให้เพื่อน แง๊น แง๊นน~~
					</Link>
				}
			</div>
		</div>
	);
}

export default TopPicks;
