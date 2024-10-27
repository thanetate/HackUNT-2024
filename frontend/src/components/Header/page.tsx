import "../../styles/dash.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className="nav-container">
				<div className="title">Monster Match</div>
				<div className="nav-links-container">
					<Link to="/">
						<p className="redirects">Home</p>
					</Link>
					<div className="bar">|</div>
					<Link to="/swipe">
						<p className="redirects">Swipes</p>
					</Link>
					<div className="bar">|</div>
					<Link to="/dashboard">
						<p className="redirects">Dashboard</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Header;
