import React from "react";
import ScoreBoard from "../../components/ScoreBoard";
import {useOutletContext} from "react-router-dom";

const TopScore = () => {
	const [user] = useOutletContext();

	return (
		<div className="mt-5">
			<ScoreBoard user={user}/>
		</div>
	);
}

export default TopScore;