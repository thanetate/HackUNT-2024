import React, { useState } from "react";
import Header from "../components/Header/page";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      const success = response.status === 200;
      if (success) navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      // Optionally, you can set an error state to display an error message to the user
    }
  };

  return (
    <>
      <Header />
      <form className="login-form" onSubmit={handleLogin}>
        <label className="login-label">Email</label>
        <input
          className="login-input-email"
          type="email"
          placeholder="enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label className="login-label">Password</label>
        <input
          className="login-input-password"
          type="password"
          placeholder="enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Don't have an account? Sign up</Link>
    </>
  );
}

export default Login;
