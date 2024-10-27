import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import Header from "../components/Header/page";

function Signup() {
  // navigate
  const navigate = useNavigate();

  // default data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // function that registers the user to the db
  const registerUser = async (e: React.FormEvent) => {
    // prevents default form submit
    e.preventDefault();
    // destruct's the email and password
    const { name, email, password } = data;
    try {
      // sends a POST request to the /signup endpoint
      const response = await axios.post("http://localhost:3000/signup", {
        name,
        email,
        password,
      });
      const { token } = response.data; // Destructure token and user from response
      console.log(response.data);
      localStorage.setItem("token", token);

      const success = response.status === 201;
      console.log(success);
      if (success) navigate("/dashboard");
    } catch (error) {
      console.error("Error registering user:", error);
      // Optionally, you can set an error state to display an error message to the user
    }
  };

  return (
    // <form onSubmit={registerUser}>
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={data.email}
    //     onChange={(e) => setData({ ...data, email: e.target.value })}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={data.password}
    //     onChange={(e) => setData({ ...data, password: e.target.value })}
    //   />
    //   <button type="submit">Sign Up</button>
    // </form>
    <>
      <Header />
      <form className="register-form" onSubmit={registerUser}>
        <label className="register-label">Name</label>
        <input
          className="register-input-name"
          type="text"
          placeholder="enter name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label className="register-label">Email</label>
        <input
          className="register-input-email"
          type="email"
          placeholder="enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label className="register-label">Password</label>
        <input
          className="register-input-password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="register-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;
