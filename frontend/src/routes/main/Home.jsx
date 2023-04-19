import React from "react";
import Orders from "../../components/Orders";
import ScoreBoard from "../../components/ScoreBoard";
import Banner from "../../components/Banner";

const Home = () => {
	return (
		<div className="home">
			<Banner/>
			<Orders/>
			<ScoreBoard/>
			<footer className="footer d-flex flex-row justify-content-center align-items-center my-bg-grey">© 2023
				Copyright: เกมตัวตึง.com
			</footer>
		</div>
	);
}

export default Home;