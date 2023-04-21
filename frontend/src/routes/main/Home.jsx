import React from "react";
import ScoreBoard from "../../components/ScoreBoard";
import Banner from "../../components/Banner";
import TopPicks from "../../components/TopPicks";
import ActiveOrders from "../../components/ActiveOrders";

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