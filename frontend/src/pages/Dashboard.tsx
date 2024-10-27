import { useEffect, useState } from "react";
import AccountPreferences from "../components/AccountPreferences/page";
import Identifiers from "../components/Identifiers/page";
import Header from "../components/Header/page";
import "../styles/dash.css";
import axios from "axios";

interface UserData {
  name: string;
  email: string;
  // Add other properties as needed
}

function Dashboard() {
  const [currentCard, setCurrentCard] = useState("account-preferences");
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Function to decode JWT token
    const decodeToken = (token: string) => {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    };

    // Fetch user information when the component mounts
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decoded = decodeToken(token);
          const userId = decoded.user_id;
          const response = await axios.get(
            `http://localhost:3000/user?userId=${userId}`
          );
          console.log(response.data.email);
          console.log(response.data.name);
          setUserData(response.data);
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

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
          {userData && (
            <div className="user-info">
              <h2>Welcome, {userData.name}</h2>
              <p>Email: {userData.email}</p>
              {/* Add more user information as needed */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
