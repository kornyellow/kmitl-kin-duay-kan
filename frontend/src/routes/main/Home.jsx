import React from "react";
import Banner from "../../images/banner.png";
import Orders from "../../components/Orders";
import TopPicks from "../../components/TopPicks";
import ScoreBoard from "../../components/ScoreBoard";
import MakeOrder from "../../components/MakeOrder";

const Home = () => {
	return (
		<div className="home">
			<MakeOrder/>
			{/* <img className="my-banner" src={Banner} alt="Banner"/> */}
			{/* <TopPicks/>
			<Orders/>
			<ScoreBoard/>
			<footer class="footer d-flex flex-row justify-content-center align-items-center my-bg-grey">© 2023 Copyright: เกมตัวตึง.com</footer> */}
		</div>
	);
}

export default Home;