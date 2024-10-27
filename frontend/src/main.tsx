import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Swipe from "./pages/Swipe";
import Company from "./pages/Company";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import { SwipeProvider } from "./context/SwipeContext";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/swipe" element={
					<SwipeProvider>
						<Swipe />
					</SwipeProvider>
				} />
				<Route path="/company" element={<Company />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
