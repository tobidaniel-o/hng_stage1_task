import React from "react";
import Profiles from "../components/Profiles";
import "./Home.css";

const Home = () => {
	return (
		<React.Fragment>
			<header>
				<div className="profile-container">
					<div className="profile-pix">
						<img
							src="tobi.jpeg"
							alt=""
							id="profile_img"
							className="img"
						/>
					</div>
					<span className="name">Tobi Okunuga</span>
				</div>
			</header>
			<main>
				<Profiles profileName="Twitter" />
				<Profiles profileName="Zuri Team" />
				<Profiles profileName="Zuri Books" />
				<Profiles profileName="Python Books" />
				<Profiles profileName="Background Check for Coders" />
				<Profiles profileName="Design Books" />
			</main>
		</React.Fragment>
	);
};

export default Home;