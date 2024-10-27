import { useEffect, useState } from "react";
import axios from "axios";
interface UserData {
	name: string;
	email: string;
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
		value={"Zombie"}
        readOnly
        // onChange={handleOptionChange}
      />
            <div className="middle-des-title">Description</div>
			<textarea
				className="middle-des-box"
				// value={longdesc}
				// onChange={handleLongDescChange}
			></textarea>

            <div className="main-profile-pic">
				{/* Calls avatar and bc avatar is set to a url we can just src the url */}
				{/* {avatar && <img src={avatar} alt="User Avatar" />} */}
                .
			</div>
			<button className="middle-change-btn">
				<img src="./img.svg" alt="picture icon" />
				Change
			</button>
			<button className="middle-remove-btn">
				<img src="./trash.svg" alt="trash icon" />
				Remove
			</button>

		</>
	);
}

export default AccountPreferences;
