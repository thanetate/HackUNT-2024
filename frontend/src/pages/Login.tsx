import Header from "../components/Header/page";
import { Link } from "react-router-dom";
import '../styles/login.css';

function Login () {
    return (
        <>
            <Header />
            {/* onsubmit here */}
			<form className="login-form">
				<label className="login-label">Email</label>
				<input
					className="login-input-email"
					type="email"
					placeholder="enter email..."
					// value={data.email}
					// onChange={(e) => setData({ ...data, email: e.target.value })}
				/>
				<label className="login-label">Password</label>
				<input
					className="login-input-password"
					type="password"
					placeholder="enter password..."
					// value={data.password}
					// onChange={(e) => setData({ ...data, password: e.target.value })}
				/>
				<button className="login-button" type="submit">
					Login
				</button>
				<Link to="/signup" className="signup-link">
					Sign up
				</Link>
			</form>
        </>
    );
};

export default Login;