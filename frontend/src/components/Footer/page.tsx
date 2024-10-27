import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
	return (
		<>
        <footer>
        <div className="footer-container">
            <div className="footer-left">

            <h1 className="footer-title">Monster Mash</h1>
            
            {/*Logos*/}
            <div className="footer-logos">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <img className="x-logo" src="./X Logo.png" alt="X (Twitter)" />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img  className="instagram-logo" src="./Logo Instagram.png" alt="Instagram" />
                </a>

                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img className="youtube-logo" src="./Logo YouTube.png" alt="YouTube" />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin-logo" src="./LinkedIn.png" alt="LinkedIn" />
                </a>

            </div>
            </div>
            

            <div className="footer-text">
            
            {/*Explore*/}
            <div className="explore">
                <h4>Explore</h4>
                <br></br>
                <a href="./dashboard">Dashboard</a>
                <br></br>
                <br></br>
                <a href="./swipe">Swipe</a>
            </div>


            {/*About*/}
            <div className="about">
                <h4>About Us</h4>
                <br></br>
                <Link to="/company">Our Company</Link>
                <br></br>
                <br></br>
                <Link to="/careers">Careers</Link>
            </div>

            {/*Contact*/}
            <div className="Contact">
                <h4>Contact</h4>
                <br></br>
                <a href="mailto:monstermash@gmail.com">Email</a>
                <br></br>
                <br></br>
                <a href="./contact">Contact Us</a>
            </div>

            <img className="footer-logo" src="./skull_candles.svg" alt="Monster Match Logo" />

            </div>
        </div>
        </footer>
		</>
	);
};

export default Footer;
