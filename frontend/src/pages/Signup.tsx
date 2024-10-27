import Header from "../components/Header/page";


function Signup () {
    return (
        <>
            <Header />
            {/* Register user on submit */}
			<form className="register-form">
				<label className="register-label">Name</label>
				<input
					className="register-input-name"
					type="text"
					placeholder="enter name..."
					// value={data.name}
					// onChange={(e) => setData({ ...data, name: e.target.value })}
				/>
				<label className="register-label">Email</label>
				<input
					className="register-input-email"
					type="email"
					placeholder="enter email..."
					// value={data.email}
					// onChange={(e) => setData({ ...data, email: e.target.value })}
				/>
				<label className="register-label">Password</label>
				<input
					className="register-input-password"
					type="password"
					placeholder="enter password..."
					// value={data.password}
					// onChange={(e) => setData({ ...data, password: e.target.value })}
				/>
				<button className="register-button" type="submit">
					Submit
				</button>
			</form>
        </>
    );
};

export default Signup;