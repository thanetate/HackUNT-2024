import Header from "../components/Header/page";
import ReviewRotation from "../components/ReviewRotation";
//import { Link } from "react-router-dom";
import '../styles/home.css';

function Home() {
	return (
		<main>
			{/*Header will need logo, links, log in button, and nav */}
			<Header />
			{/* <button>
				<Link to="/signup">Signup</Link>
			</button>
			<button>
				<Link to="/login">Login</Link>
			</button> */}
			{/* Landing Area */}
			<div className="landing-container">
			<div>
				<h1 className="landing-title">Where Monsters Find Their Matches</h1>
				<button className="landing-button">Get Started</button>
        	</div>
				{/* replace this with svg file */}
				<img
					className="landing-img"
					src="./pumpkin_mainhome_icon.png"
					alt="Monster Match Logo"
				/>
			</div>
			{/* Our Approach */}
			<div className="approach-container">
				<h2 className="approach-title">Our Spooktacular Approach</h2>
				<img className="approach-img" src="./pumpkin_skull.svg" alt="pumpkin" />
				<p className="approach-text">
					We believe that every monster deserves to find their perfect match.
					That's why we've created a platform where monsters can connect with
					other monsters who share their interests, values, and goals.
				</p>
			</div>
			{/* What Other Monsters are Saying / User Feedback */}
			<div className="feedback-container">
				<h2 className="feedback-title">What Other Monsters are Saying</h2>
				<div> <ReviewRotation /> </div>
			
			</div>
			{/* Footer */}
		</main>
	);
}

export default Home;