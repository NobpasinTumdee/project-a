import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import '../style/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                Agentic AI
            </Link>

            <div className="nav-menu-container">
                <ul className={isMobileMenuOpen ? 'nav-links active' : 'nav-links'}>
                    <li>
                        <Link className='nav-menu' to="/" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li>
                        <Link className='nav-menu' to="/chatbot" onClick={closeMobileMenu}>AI Chatbot</Link>
                    </li>
                    <li>
                        <Link className='nav-menu' to="/history" onClick={closeMobileMenu}>History</Link>
                    </li>
                    <li>
                        <Link className='nav-menu' to="/documentation" onClick={closeMobileMenu}>Documentation</Link>
                    </li>
                </ul>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? <FiSun /> : <FiMoon />}
                </button>

                <button
                    className="menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;