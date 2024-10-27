import Header from "../components/Header/page";
import ReviewRotation from "../components/ReviewRotation";
import Footer from "../components/Footer/page";
import '../styles/home.css';
import { useEffect } from "react";



function Home() {

	useEffect(() => {
        const scrollUp = document.querySelector('#scroll-up');
        const handleScrollUp = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        };

        scrollUp?.addEventListener("click", handleScrollUp);

        // Cleanup event listener on component unmount
        return () => {
            scrollUp?.removeEventListener("click", handleScrollUp);
        };
    }, []);

	return (
		<main>
			{/*Header will need logo, links, log in button, and nav */}
			<Header />

			{/* Landing Area */}
			<div className="landing-container">
			<div>
				<h1 className="landing-title">Where Monsters Find Their Matches</h1>
				<button className="landing-button">Get Started</button>
        	</div>
				{/* replace this with svg file */}
				<img
					className="landing-img"
					src="./pumpkin_mainhome_icon.png"
					alt="Monster Match Logo"
				/>
			</div>
			{/* Our Approach */}
			<div className="approach-container">
				<h2 className="approach-title">Our Spooktacular Approach</h2>
				<img className="approach-img" src="./pumpkin_skull.svg" alt="pumpkin" />
				<p className="approach-text">
					We believe that every monster deserves to find their perfect match.
					That's why we've created a platform where monsters can connect with
					other monsters who share their interests, values, and goals.
				</p>
			</div>
			{/* What Other Monsters are Saying / User Feedback */}
			<div className="feedback-container">
				<h2 className="feedback-title">What Other Monsters are Saying</h2>
				<div className="feedback-component"> <ReviewRotation /> </div>
			
			</div>
			{/* <Scroll /> */}
			
			<div className="scroll-up" id="scroll-up">
				<img src="./up_arrow.png" className="up-arrow" alt="up-arrow" />
			</div>
       
			{/* Footer */}
			<Footer />

			
		</main>
	);
}

export default Home;