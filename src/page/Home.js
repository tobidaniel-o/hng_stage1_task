import React from "react";
import Profiles from "../components/Profiles";
import "./Home.css";
import { Github, Slack } from "../components/Icons";
import Footer from "../components/Footer";

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
				<Profiles
					profileName="Twitter"
					id="twitter"
					url="https://twitter.com/digital_prnt"
				/>
				<Profiles
					profileName="Zuri Team"
					id="btn-zuri"
					url="https://training.zuri.team"
				/>
				<Profiles
					profileName="Zuri Books"
					id="books"
					url="http://books.zuri.team"
				/>
				<Profiles
					profileName="Python Books"
					id="books_python"
					url="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
				/>
				<Profiles
					profileName="Background Check for Coders"
					id="pitch"
					url="https://background.zuri.team"
				/>
				<Profiles
					profileName="Design Books"
					id="book_design"
					url="https://books.zuri.team/design-rules"
				/>
				<div className="social-icons">
					<a href="" className="icon">
						<div style={{ display: "none" }}>Username: Toby</div>
						<Slack />
					</a>

					<a
						href="https://github.com/tobidaniel-o/hng_stage1_task"
						className="icon"
					>
						<Github />
					</a>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
