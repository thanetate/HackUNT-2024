import { useSwipes } from "../context/SwipeContext";
import TinderCards from "../components/TinderCards/TinderCards";
import Header from "../components/Header/page";
import { Link } from "react-router-dom";
import "../styles/swipe.css";

const Swipe: React.FC = () => {
    const { recentMatches } = useSwipes();

    // Divide recentMatches into groups of three to match the row structure
    const matchRows = [];
    for (let i = 0; i < recentMatches.length; i += 3) {
        matchRows.push(recentMatches.slice(i, i + 3));
    }

    return (
        <>
            <Header />
            <div className="swiper-page">
                <TinderCards />
                <div className="swiper-left-card">
                    <div className="left-card-profile">
                        <div className="myprofile">
                            <Link to="/dashboard" className="link">
                                My Profile
                            </Link>
                        </div>
                        <div className="match-title">Recent Matches</div>
							<div className="match-card-container">
								{matchRows.map((row, rowIndex) => (
									<div className="match-card-row" key={rowIndex}>
										{row.map((match, matchIndex) => (
											<div className="match-card" key={matchIndex}>
												<img
													src={`/${match.swipedOnId.toLowerCase()}.jpg`}
													alt={match.swipedOnId}
													width="50px"
													height="auto"
												/>
												<div className="match-name">{match.swipedOnId}</div>
											</div>
										))}
									</div>
								))}
							</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Swipe;
