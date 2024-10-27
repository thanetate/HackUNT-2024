import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
	return (
		<>
    <footer className="footer">

        <div className="footer-container">
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

            <div className="footer-text">
            
            {/*Contact*/}
            <div className="user-cases">
                <h4>Contact Us</h4>
                <br></br>
                <a href="">Email</a>
                <br></br>
                <a href="">Phone</a>
            </div>

            {/*Explore*/}
            <div className="explore">
                <h4>Explore</h4>
                <br></br>
                <a href="">Design</a>
                <br></br>
                <a href="">Prototyping</a>
            </div>

            {/*Resources*/}
            <div className="resources">
                <h4>Resources</h4>
                <br></br>
                <a href="">Blog</a>
                <br></br>
                <a href="">Best Practices</a>
            </div>

            </div>
        </div>
    </footer>
		</>
	);
};

export default Footer;
