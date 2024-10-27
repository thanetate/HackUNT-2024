import { useState } from "react";
import AccountPreferences from "../components/AccountPreferences/page";
import Identifiers from "../components/Identifiers/page";
import Header from "../components/Header/page";
import '../styles/dash.css';

function Dashboard() {
    const [currentCard, setCurrentCard] = useState("account-preferences");

	return (
		<>
			<Header />
			<div className="dash-page">
				<div className="left-card-container">
					<div className="redirect-container">
						<img src="./ghost.svg" alt="ghost icon" />
						<button onClick={() => setCurrentCard("account-preferences")}>
							Account Preferences
						</button>
					</div>
					<div className="redirect-container">
						<img src="./skull.svg" alt="skull icon" />
						<button onClick={() => setCurrentCard("identifiers")}>
							Identifiers
						</button>
					</div>
				</div>
				<div className="right-card-container">
					{currentCard === "account-preferences" && <AccountPreferences />}
					{currentCard === "identifiers" && <Identifiers />}
				</div>
			</div>
		</>
	);
}

export default Dashboard;
