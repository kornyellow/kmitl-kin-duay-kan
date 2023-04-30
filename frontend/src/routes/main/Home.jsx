import React from "react";
import ScoreBoard from "../../components/ScoreBoard";
import Banner from "../../components/Banner";
import TopPicks from "../../components/TopPicks";
import ActiveOrders from "../../components/ActiveOrders";
import {useOutletContext} from "react-router-dom";

const Home = () => {
	const [user, , handleChangePage] = useOutletContext();

	return (
		<div className="home">
			<Banner/>
			<TopPicks user={user} onPageChange={handleChangePage}/>
			<ActiveOrders user={user}/>
			<ScoreBoard user={user}/>
		</div>
	);
}

export default Home;