import TinderCards from "../components/TinderCards/TinderCards";
import Header from "../components/Header/page";
import { Link } from "react-router-dom";
import "../styles/swipe.css";

function Swipe() {
	return (
		<>
        
			<Header />
			<div className="swiper-page">
				<TinderCards /> {/* Displaying the TinderCards component */}
				<div className="swiper-left-card">
					<div className="left-card-profile">
						<div className="myprofile">
							<Link to="/dashboard" className="link">
								My Profile
							</Link>
						</div>
						<div className="match-title">Recent Matches</div>
						<div className="match-card-container">
							<div className="match-card-row">
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
							</div>
							<div className="match-card-row">
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
							</div>
							<div className="match-card-row">
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
								<div className="match-card">
									<img src="/ooze.jpg" alt="" width="50px" height="auto" />
									<div className="match-name">Dracula's Mom</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Swipe;
