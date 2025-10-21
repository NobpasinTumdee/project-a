import { Link } from "react-router-dom";
import '../App.css';

const HomePage = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <h1 className="hero-headline">
                    The Future of Intelligent Conversation
                </h1>
                <p className="hero-subheadline">
                    Meet Agentic AI — your advanced partner for complex problem-solving,
                    creative tasks, and seamless integration with your digital life.
                </p>
                <Link to="/chatbot" className="hero-cta-button">
                    Try the Chatbot Now
                </Link>
            </div>
        </section>
    );
}

export default HomePage
