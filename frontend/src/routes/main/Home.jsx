import React from "react";
import ActiveOrders from "../../components/ActiveOrders";
import ScoreBoard from "../../components/ScoreBoard";
import Banner from "../../components/Banner";
import TopPicks from "../../components/TopPicks";

const Home = () => {
	return (
		<div className="home">
			<Banner/>
			<TopPicks/>
			<ActiveOrders/>
			<ScoreBoard/>
		</div>
	);
}

export default Home;