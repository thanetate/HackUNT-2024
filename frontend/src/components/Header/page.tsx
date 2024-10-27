import "../../styles/dash.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
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
          <Link to={isAuthenticated ? "/dashboard" : "/login"}>
            <p className="redirects">Dashboard</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
