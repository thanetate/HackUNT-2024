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

function Identifiers() {
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
			<h1>Identifiers</h1>

			<div className="middle-username-title">
				If you could join a monster clan, which one would it be?
			</div>
			<select
				className="middle-select-box"
				value={userData ? userData['id-1'] : ""}
				// value={selectedOption}
				// onChange={handleOptionChange}
			>
                <option value="Select">Select</option>
				<option value="Ghostly Guild">Ghostly Guild</option>
				<option value="Dragon Kin">Dragon Kin</option>
				<option value="Goblin Tribe">Goblin Tribe</option>
				<option value="Troll Troop">Troll Troop</option>
				<option value="Fairy Circle">Fairy Circle</option>
			</select>
			<div className="middle-spooky-title">
				If you could haunt any place, where would it be?
			</div>
			<select
				className="middle-select-box"
				value={userData ? userData['id-2'] : ""}
				// value={selectedOption}
				// onChange={handleOptionChange}
			>
				<option value="Select">Select</option>
				<option value="Old Mansion">Old Mansion</option>
				<option value="Abandoned Hospital">Abandoned Hospital</option>
				<option value="Creepy Forest">Creepy Forest</option>
				<option value="Ancient Castle">Ancient Castle</option>
				<option value="Haunted Hotel">Haunted Hotel</option>
			</select>
			<div className="middle-des-title">What`s your favorite spooky snack?</div>
			<select
				className="middle-select-box"
				// value={selectedOption}
				// onChange={handleOptionChange}
				value={userData ? userData['id-3'] : ""}
			>
				<option value="Select">Select</option>
				<option value="Eyeball Soup">Eyeball Soup</option>
				<option value="Bat Wings">Bat Wings</option>
				<option value="Witch's Brew">Witch`s Brew</option>
				<option value="Zombie Brains">Zombie Brains</option>
				<option value="Ghostly Marshmallows">Ghostly Marshmallows</option>
			</select>
		</>
	);
}

export default Identifiers;
