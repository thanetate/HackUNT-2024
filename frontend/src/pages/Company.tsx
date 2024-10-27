import Header from "../components/Header/page";
import '../styles/company.css';

function Company() {
    return (
    <>
        <Header />
        <div className="about-container">

            {/* About Monster Mash */}
            <div className="about-t-d">
            <h1 className="about-title">About Monster Mash</h1>
            <p className="about-description">
                Welcome to Monster Mash, where we believe every monster deserves to find their perfect match! 
                Founded in 2023, our platform is dedicated to connecting monsters of all kinds based on shared interests, values, and goals.
            </p>
            </div>

            {/* Mission container */}
            {/* <div className="mission-container">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-description">
                At Monster Mash, our mission is to create a fun and inclusive space for monsters to meet, mingle, and make meaningful connections. 
                Whether you’re a friendly ghost, a goofy ghoul, or a sophisticated skeleton, our goal is to help you find your match in the monster world.
            </p>
            </div> */}

            {/* Vision container */}
            {/* <div className="vision-container">
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-description">
                We envision a community where monsters can embrace their uniqueness and find companionship without fear of judgment. 
                Through innovative features and a user-friendly interface, we strive to make the matchmaking process enjoyable and effective.
            </p>
            </div> */}

            {/* Values container */}
            {/* <div className="values-container">
            <h2 className="values-title">Our Values</h2>
            <ul className="values-list">
                <li>Inclusivity: We celebrate diversity and welcome all monsters.</li>
                <li>Empowerment: We empower our users to express themselves freely.</li>
                <li>Fun: We believe in the power of fun in making connections.</li>
                <li>Safety: We prioritize the safety and privacy of our users.</li>
            </ul>
            </div> */}

            <div className="who-we-are-container">
                <h2 className="who-we-are-title">Who We Are</h2>
                <p className="who-we-are-description">
                At Monster Mash, we are a vibrant community of creatures that celebrates the 
                unique connections between monsters of all kinds. Founded on the principles of 
                inclusivity and fun, our platform is designed for those seeking companionship 
                in a judgment-free zone. Whether you’re a quirky ghost, a playful werewolf, or a 
                charming vampire, we believe that everyone deserves to find their perfect match. 
                
                Our team is passionate about creating a safe and engaging space where monsters can express 
                themselves and explore meaningful relationships. Driven by creativity and innovation, 
                Monster Mash combines cutting-edge technology with a deep understanding of our community's 
                needs. We’re not just about matchmaking; we’re about fostering connections that can lead 
                to lasting friendships, collaborations, and even love. With user-friendly features and a 
                focus on safety, our goal is to empower every monster to embrace their individuality while 
                discovering others who share their interests and values. Join us on this enchanting journey to 
                connect, celebrate, and thrive in the monster world!    
                </p>
            </div>

            {/* Join Us */}

            <div className="join-us-container">
            <h2 className="join-us-title">Join Us!</h2>
            <p className="join-us-description">
                Ready to find your monster match? Join our growing community today and discover the connections waiting for you!
            </p>
            <button className="join-button" onClick={() => window.location.href = '/signup'}>
                Get Started
            </button>
            </div>
        </div>
    </>
    );
}

export default Company;