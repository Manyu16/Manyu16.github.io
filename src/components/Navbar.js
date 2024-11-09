import React from 'react';
import '../stylesheets/Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><NavLink class = "navbar-link" to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink class = "navbar-link" to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink class = "navbar-link" to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink class = "navbar-link" to="/skills" activeClassName="active">Skills</NavLink></li>
      </ul>
      <div className="navbar-logo">
        <span>*</span>
      </div>
      <div className="navbar-social-icons">
        <a href="https://linkedin.com/in/abhimanyu16/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;

