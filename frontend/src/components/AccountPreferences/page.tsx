import { useEffect, useState } from "react";
import axios from "axios";
interface UserData {
	avatar: string;
	description: string;
	email: string;
	'id-1': string;
	'id-2': string;
	'id-3': string;
	monster: string;
	name: string;
	password: string;
	user_id: string;
	_id: string;
	// Add other properties as needed
  }
function AccountPreferences() {
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
			// console.log(response.data.email);
			// console.log(response.data.name);
			console.log(response.data);
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
			<h1>Account Preferences</h1>
			<div className="middle-username-title">User Name</div>
			<input
				className="middle-username-box"
				value={userData ? userData.name : ""}
				// value={name}
				// onChange={handleNameChange}
			/>
			<div className="middle-spooky-title">What kind of monster are you?</div>
            <input
        className="middle-select-box"
		value={userData ? userData.monster : ""}
        readOnly
        // onChange={handleOptionChange}
      />
            <div className="middle-des-title">Description</div>
			<textarea
				className="middle-des-box"
				value={userData ? userData.description : ""}
				// onChange={handleLongDescChange}
			></textarea>

            <div className="main-profile-pic">
				{/* Calls avatar and bc avatar is set to a url we can just src the url */}
				{/* {avatar && <img src={avatar} alt="User Avatar" />} */}
				{userData ? <img src={userData.avatar} alt="User Avatar" className="avatar" /> : ""}
			</div>
			<button className="middle-change-btn">
				<img src="./img.svg" alt="picture icon" />
				Change
			</button>
			<button className="middle-remove-btn">
				<img src="./trash.svg" alt="trash icon" />
				Remove
			</button>
			<div className="ghosts">
				<img src="./g-3.png" alt="" className="g4-1" />
				<img src="./g-4.png" alt="" className="g5-1" />
				<img src="./g-2.png" alt="" className="g2-1" />
				<img src="./g-1.png" alt="" className="g3-1" />
			</div>

		</>
	);
}

export default AccountPreferences;
